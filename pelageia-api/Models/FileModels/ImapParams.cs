using System.ComponentModel.DataAnnotations.Schema;

namespace pelageia_api.Models.FileModels
{
    public class ImapParams
    {
        public int Id { get; set; }
        public string Sender { get; set; }
        public string Subject { get; set; }

        public int DownloadFileId { get; set; }
        [ForeignKey("DownloaFileId")]
        public DownloadFile? DownloadFile { get; set; }
    }
}