using System.ComponentModel.DataAnnotations.Schema;

namespace pelageia_api.Models.FileModels.DownloadFileModels
{
    public class FtpParams
    {
        public int Id { get; set; }
        public string Host { get; set; }
        public string User { get; set; }
        public string Password { get; set; }

        public int DownloadFileId { get; set; }
        [ForeignKey("DownloaFileId")]
        public DownloadFile? DownloadFile { get; set; }
    }
}