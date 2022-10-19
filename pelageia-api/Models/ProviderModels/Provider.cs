using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace pelageia_api.Models.ProviderModels
{
    public class Provider
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Name { get; set; }
        public DateTime CreatedAt { get; set; }
        public bool IsActive { get; set; }
        public bool Deleted { get; set; }

        [JsonIgnore]
        public List<ProviderFile>? ProviderFiles { get; set; }
        [JsonIgnore]
        public ProviderQuery? ProviderQueryId { get; set; }
        [JsonIgnore]

        [ForeignKey("UserId")]
        public User? User { get; set; }
    }
}