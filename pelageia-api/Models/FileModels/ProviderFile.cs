using System.ComponentModel.DataAnnotations.Schema;
using pelageia_api.Models.ProviderModels;

namespace pelageia_api.Models.FileModels
{
    public class ProviderFile
    {
        public int Id { get; set; }
        public int ProviderId { get; set; }
        public string FileName { get; set; } = "data";
        public FileTypes FileType { get; set; }
        public string? FileUrl { get; set; } = string.Empty;
        public bool Download { get; set; }
        public int? DownloadFileId { get; set; }
        public SeparatorTypes Separator { get; set; }
        public string UseCols { get; set; } = string.Empty;
        public CompressionTypes CompressionType { get; set; }
        public string Columns { get; set; } = string.Empty;
        [ForeignKey("ProviderId")]
        public Provider Provider { get; set; }
        public List<DownloadFile> DownloadFiles { get; set; }
    }
}