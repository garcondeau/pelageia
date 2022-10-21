using pelageia_api.Dto;

namespace pelageia_api.Services.MailService
{
    public interface IMailService
    {
        void SendEmail(EmailDto request);
    }
}