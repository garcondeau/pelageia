using System.ComponentModel.DataAnnotations.Schema;

namespace pelageia_api.Models.FileModels
{
    public class UrlParams
    {
        public int Id { get; set; }
        public string Url { get; set; }

        public int DownloadFileId { get; set; }
        [ForeignKey("DownloaFileId")]
        public DownloadFile? DownloadFile { get; set; }
    }
}