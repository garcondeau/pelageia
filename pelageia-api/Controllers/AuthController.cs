using Microsoft.AspNetCore.Mvc;
using pelageia_api.Dto;
using System.Security.Cryptography;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.AspNetCore.Authorization;
using pelageia_api.Models;

namespace pelageia_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IConfiguration _configuration;
        private readonly IUserService _userService;
        private readonly IMailService _mailService;
        public AuthController(AppDbContext context, IConfiguration configuration, IUserService userService, IMailService mailService)
        {
            _context = context;
            _configuration = configuration;
            _userService = userService;
            _mailService = mailService;
        }


        [HttpPost("register")]
        public async Task<ActionResult<string>> Login(UserDto request)
        {
            bool exist = _context.Users.Any(u => u.Email.Equals(request.Email));

            if (exist)
            {
                return BadRequest("Email address reserved");
            }

            CreatePasswordHash(request.Password, out byte[] passwordHash, out byte[] passwordSalt);

            var user = new User
            {
                Name = request.Name,
                Email = request.Email,
                Phone = request.Phone,
                CreatedAt = DateTime.Now,
                Role = Roles.Client,
                Subscription = 0,
                PasswordHash = passwordHash,
                PasswordSalt = passwordSalt,
                EmailCode = GenerateEmailCode(),
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            var email = new EmailDto
            {
                To = user.Email,
                Subject = "Pelageia Email Verification Code",
                Body = $"Your Email Verification Code {user.EmailCode}"
            };

            _mailService.SendEmail(email);

            return Ok(user);
        }

        [HttpPost("activate")]
        public async Task<ActionResult> Activate(string userEmail, string code)
        {
            var user = await _context.Users.SingleAsync(u => u.Email.Equals(userEmail));
            if (user is null)
                return BadRequest("User not found");
            if (!VerifyEmailCode(user.EmailCode, code))
                return BadRequest("Email verification code is not correct");
            user.IsActive = true;
            await _context.SaveChangesAsync();
            return Ok(user);
        }

        [HttpPost("login")]
        public async Task<ActionResult<string>> Login(string email, string password)
        {
            bool exist = await _context.Users.AnyAsync(u => u.Email.Equals(email));

            if (!exist)
                return BadRequest("Bad credentials.");

            var user = await _context.Users.SingleAsync(u => u.Email.Equals(email));

            if (!VerifyPasswordHash(password, user.PasswordHash, user.PasswordSalt))
                return BadRequest("Wrong password.");

            if (!user.IsActive)
                return BadRequest("User is not active, please confirm email");

            var token = CreateToken(user);

            return Ok(token);
        }

        [HttpGet, Authorize]
        public ActionResult<User> GetMe()
        {
            var user = _userService.GetMe();
            return Ok(user);
        }

        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using (var hmac = new HMACSHA512(passwordSalt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                return computedHash.SequenceEqual(passwordHash);
            }
        }

        private string CreateToken(User user)
        {
            List<Claim> claims = new List<Claim>
            {
                new Claim("user_id", user.Id.ToString()),
                new Claim(ClaimTypes.Name, user.Name),
                new Claim(ClaimTypes.Role, user.Role.ToString()),
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(ClaimTypes.MobilePhone, user.Phone),
            };

            var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(
                _configuration.GetSection("AppSettings:Token").Value));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddHours(12),
                signingCredentials: creds);

            var jwt = new JwtSecurityTokenHandler().WriteToken(token);

            return jwt;
        }

        private string GenerateEmailCode()
        {
            var chars = "0123456789";
            var stringChars = new char[6];
            var random = new Random();

            for (int i = 0; i < stringChars.Length; i++)
            {
                stringChars[i] = chars[random.Next(chars.Length)];
            }

            return new String(stringChars);
        }

        private bool VerifyEmailCode(string userCode, string RequestCode)
        {
            if (!userCode.Equals(RequestCode))
                return false;
            return true;
        }
    }
}