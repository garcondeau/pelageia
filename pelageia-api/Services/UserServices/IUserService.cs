using pelageia_api.Models;

namespace pelageia_api.Services.UserServices
{
    public interface IUserService
    {
        User GetMe();
    }
}