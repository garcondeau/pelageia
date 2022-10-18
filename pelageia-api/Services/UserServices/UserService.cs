using System.Security.Claims;
using pelageia_api.Models;

namespace pelageia_api.Services.UserServices
{
    public class UserService : IUserService
    {

        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly AppDbContext _context;

        public UserService(IHttpContextAccessor httpContextAccessor, AppDbContext context)
        {
            _httpContextAccessor = httpContextAccessor;
            _context = context;
        }
        public User GetMe()
        {
            var email = string.Empty;
            if (_httpContextAccessor.HttpContext != null)
            {
                email = _httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.Email);
            }

            var user = _context.Users.Single(u => u.Email.Equals(email));

            return user;
        }
    }
}