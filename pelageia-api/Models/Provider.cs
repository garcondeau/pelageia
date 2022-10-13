using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace pelageia_api.Models
{
    public class Provider
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public bool Deleted { get; set; }
        public string SelectQuery { get; set; } = string.Empty;
        public string WhereQuery { get; set; } = string.Empty;

        public List<ProviderFile> ProviderFiles { get; set; }
        [ForeignKey("User_Id")]
        public User? User {get; set;}
    }
}