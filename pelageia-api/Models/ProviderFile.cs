using System.ComponentModel.DataAnnotations.Schema;

namespace pelageia_api.Models
{
    public class ProviderFile
    {
        public int Id { get; set; }
        public int ProviderId { get; set; }
        public string FileName { get; set; } = "data";
        public string FileType { get; set; } = "csv";
        public string FileUrl { get; set; } = string.Empty;
        public char Separator { get; set; } = ';';
        public string UseCols { get; set; } = string.Empty;
        public string Columns { get; set; } = string.Empty;
        [ForeignKey("ProviderId")]
        public Provider Provider { get; set; }
    }
}