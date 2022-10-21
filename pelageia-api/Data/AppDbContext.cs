global using pelageia_api.Models.UserModels;
global using pelageia_api.Models.ProviderModels;
global using pelageia_api.Models.FileModels;
global using pelageia_api.Models.SubscriptionModels;
global using pelageia_api.Models.FileModels.DownloadFileModels;

namespace pelageia_api.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options) { }

        public DbSet<User> Users => Set<User>();
        public DbSet<Provider> Providers => Set<Provider>();
        public DbSet<Subscription> Subscriptions => Set<Subscription>();
        public DbSet<ProviderFile> ProviderFiles => Set<ProviderFile>();
        public DbSet<ProviderQuery> ProviderQueries => Set<ProviderQuery>();
        public DbSet<DownloadFile> DownloadFiles => Set<DownloadFile>();
        public DbSet<ImapParams> ImapParams => Set<ImapParams>();
        public DbSet<FtpParams> FtpParams => Set<FtpParams>();
        public DbSet<UrlParams> UrlParams => Set<UrlParams>();
    }
}