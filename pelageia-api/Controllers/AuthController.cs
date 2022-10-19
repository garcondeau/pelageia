using Microsoft.AspNetCore.Mvc;
using pelageia_api.Models;
using pelageia_api.Dto;
using System.Security.Cryptography;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.AspNetCore.Authorization;

namespace pelageia_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IConfiguration _configuration;
        private readonly IUserService _userService;
        public AuthController(AppDbContext context, IConfiguration configuration, IUserService userService)
        {
            _context = context;
            _configuration = configuration;
            _userService = userService;
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

            var refereshToken = GenerateRefreshToken();

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
                RefreshToken = refereshToken.Token,
                TokenCreated = DateTime.Now,
                TokenExpires = DateTime.Now.AddHours(12)
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return Ok(user);
        }

        [HttpPost("login")]
        public async Task<ActionResult<string>> Login(string email, string password)
        {
            bool exist = _context.Users.Any(u => u.Email.Equals(email));

            if (!exist)
            {
                return BadRequest("Bad credentials.");
            }

            var user = _context.Users.Single(u => u.Email.Equals(email));

            if (!VerifyPasswordHash(password, user.PasswordHash, user.PasswordSalt))
            {
                return BadRequest("Wrong password.");
            }

            string token = CreateToken(user);

            var refreshToken = GenerateRefreshToken();
            user.RefreshToken = refreshToken.Token;

            await _context.SaveChangesAsync();

            return Ok(token);
        }

        [HttpPost("refresh-token"), Authorize]
        public async Task<ActionResult<string>> RefreshToken()
        {
            var refreshToken = Request.Cookies["refreshToken"];
            var user = _userService.GetMe();
            var dbUser = await _context.Users.FindAsync(user.Id);
            
            if (dbUser is null)
                return Unauthorized("User not authorized");
            
            else if (!dbUser.RefreshToken.Equals(refreshToken))
                return Unauthorized("Invalid Refresh Token.");
            
            else if (user.TokenExpires < DateTime.Now)
                return Unauthorized("Token Expired.");


            string token = CreateToken(user);
            var newRefreshToken = GenerateRefreshToken();
            await SetRefreshToken(newRefreshToken);

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
                new Claim(ClaimTypes.Name, user.Name),
                new Claim(ClaimTypes.Role, user.Role.ToString()),
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(ClaimTypes.MobilePhone, user.Phone)

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
        private RefreshToken GenerateRefreshToken()
        {
            var refreshToken = new RefreshToken
            {
                Token = Convert.ToBase64String(RandomNumberGenerator.GetBytes(64)),
                Expires = DateTime.Now.AddHours(12),
                Created = DateTime.Now
            };

            return refreshToken;
        }

        private async Task<IActionResult> SetRefreshToken(RefreshToken newRefreshToken)
        {
            var cookieOptions = new CookieOptions
            {
                HttpOnly = true,
                Expires = newRefreshToken.Expires
            };
            Response.Cookies.Append("refreshToken", newRefreshToken.Token, cookieOptions);

            var user = _userService.GetMe();
            
            var dbUser = await _context.Users.FindAsync(user.Id);

            if (dbUser is null)
                return BadRequest("User not found");

            dbUser.RefreshToken = newRefreshToken.Token;
            dbUser.TokenCreated = newRefreshToken.Created;
            dbUser.TokenExpires = newRefreshToken.Expires;
            
            await _context.SaveChangesAsync();

            return Ok(dbUser);
        }
    }
}