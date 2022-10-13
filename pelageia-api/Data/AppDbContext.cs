using Microsoft.EntityFrameworkCore;
using pelageia_api.Models;

namespace pelageia_api.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options) { }

        public DbSet<User> Users => Set<User>();
        public DbSet<Provider> Providers => Set<Provider>();
        public DbSet<ProviderFile> ProviderFiles => Set<ProviderFile>();
    }
}