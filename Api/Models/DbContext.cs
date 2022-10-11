using Microsoft.EntityFrameworkCore;

namespace api.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options) { }

        public DbSet<Provider> Providers => Set<Provider>();
        public DbSet<Product> Products => Set<Product>();
    }
}