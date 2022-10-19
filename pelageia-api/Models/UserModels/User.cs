using pelageia_api.Models.ProviderModels;
using System.Text.Json.Serialization;

namespace pelageia_api.Models.UserModels
{
    public class User
    {
        public int Id { get; set; }
        public Roles Role { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Phone { get; set; } = string.Empty;
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public bool IsActive { get; set; }
        public DateTime CreatedAt { get; set; }
        public int Subscription { get; set; }
        public string EmailCode { get; set; }

        [JsonIgnore]
        public List<Provider> Providers { get; set; } = new();
    }
}