using pelageia_api.Models.FileModels;

namespace pelageia_api.Dto
{
    public class ProviderFileDto
    {
        public int ProviderId { get; set; }
        public string FileName { get; set; } = "data";
        public FileTypes FileType { get; set; }
        public CompressionTypes CompressionType {get; set;}
        public string FileUrl { get; set; } = string.Empty;
        public SeparatorTypes Separator { get; set; }
        public string UseCols { get; set; } = string.Empty;
        public string Columns { get; set; } = string.Empty;
    }
}