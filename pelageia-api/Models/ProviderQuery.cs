using System.ComponentModel.DataAnnotations.Schema;

namespace pelageia_api.Models
{
    public class ProviderQuery
    {
        public int Id { get; set; }
        public int ProviderId { get; set; }

        public string SelectQuery { get; set; } = string.Empty;
        public string? WhereQuery { get; set; } = string.Empty;
        
        [ForeignKey("ProviderId")]
        public Provider Provider { get; set; }
    }
}