using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace pelageia_api.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Role { get; set; } = "Client";
        public string UserName { get; set; } = "John Doe";
        public string Email { get; set; } = "john.doe@sample.mail";
        public bool IsActive { get; set; }
        public string Phone { get; set; } = "+0123456789";
        public DateTime CreatedAt { get; set; }
        public int Subscription { get; set; }

        [JsonIgnore]
        public List<Provider> Providers { get; set; } = new();
    }
}