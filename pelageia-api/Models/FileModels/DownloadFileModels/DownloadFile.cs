namespace pelageia_api.Models.FileModels.DownloadFileModels
{
    public class DownloadFile
    {
        public int Id { get; set; }
        public DownloadTypes DownloadType { get; set; }
        public int? ImapParamsId { get; set; }
        public ImapParams? ImapParams { get; set; }
        public int? UrlParamsId { get; set; }
        public UrlParams? UrlParams { get; set; }
        public int? FtpParamsId { get; set; }
        public FtpParams? FtpParams { get; set; }
    }
}