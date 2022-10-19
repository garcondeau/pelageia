using pelageia_api.Models.ProviderModels;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace pelageia_api.Models.SubscriptionModels
{
    public class Subscription
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Name { get; set; }
        public TimeSpan Timeout { get; set; }

        [ForeignKey("UserId")]
        public User? User { get; set; } = new();
    }
}