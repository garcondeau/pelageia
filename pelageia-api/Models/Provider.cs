using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace pelageia_api.Models
{
    public class Provider
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Name { get; set; }
        public DateTime CreatedAt { get; set; }
        public bool Active { get; set; }
        public bool Deleted { get; set; }
        public string SelectQuery { get; set; } = string.Empty;
        public string? WhereQuery { get; set; }

        [JsonIgnore]
        public List<ProviderFile>? ProviderFiles { get; set; }
        [JsonIgnore]
        [ForeignKey("UserId")]
        public User? User { get; set; }
    }
}