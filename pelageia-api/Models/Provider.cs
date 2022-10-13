using System.Text.Json.Serialization;

namespace pelageia_api.Models
{
    public class Provider
    {
        public int Id { get; set; }
        public int User_Id { get; set; }
        public bool Deleted { get; set; }
        public string SelectQuery { get; set; } = string.Empty;
        public string WhereQuery { get; set; } = string.Empty;

        public List<ProviderFile> ProviderFiles { get; set; }
        [JsonIgnore]
        public User User {get; set;}
    }
}