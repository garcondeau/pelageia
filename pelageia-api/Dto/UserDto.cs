using System.ComponentModel.DataAnnotations.Schema;
using pelageia_api.Models;
using System.Text.Json.Serialization;

namespace pelageia_api.Dto
{
    public class UserDto
    {
        public string Name { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public string Phone { get; set; } = string.Empty;
    }
}