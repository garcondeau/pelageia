using System.Net.Http.Headers;
using Microsoft.AspNetCore.Mvc;
using pelageia_api.Models;

namespace pelageia_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProvidersController : ControllerBase
    {
        private readonly AppDbContext _context;
        public ProvidersController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetProviders()
        {
            return Ok(await _context.Providers.ToListAsync());
        }

        [HttpGet("user/{userId}")]
        public ActionResult GetUserProviders(int userId)
        {
            return Ok(_context.Providers.Where(p => p.UserId == userId));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetProviderById(int id)
        {
            return Ok(await _context.Providers.FindAsync(id));
        }

        [HttpPost]
        public async Task<IActionResult> InsertProvider(Provider provider)
        {
            provider.User = await _context.Users.FindAsync(provider.UserId);
            _context.Add(provider);
            await _context.SaveChangesAsync();
            return Ok(await _context.Providers.ToListAsync());
        }

        [HttpPut]
        public async Task<IActionResult> UpdateProvider(Provider request)
        {
            var provider = await _context.Providers.FindAsync(request.Id);
            if (provider is null)
                return BadRequest("Provider not found");

            provider.Name = request.Name;
            provider.Active = request.Active;
            provider.SelectQuery = request.SelectQuery;
            provider.WhereQuery = request.WhereQuery;


            await _context.SaveChangesAsync();

            return Ok(await _context.Providers.ToListAsync());
        }

        [HttpPut("change_active/{id}")]
        public async Task<IActionResult> ChangeProviderActive(int id)
        {
            var provider = await _context.Providers.FindAsync(id);
            if (provider is null)
                return BadRequest("Provider not found");
            provider.Active = !provider.Active;


            await _context.SaveChangesAsync();

            return Ok(await _context.Providers.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> SetDeletedTrue(int id)
        {
            var provider = await _context.Providers.FindAsync(id);
            if (provider is null)
                return BadRequest("Provider Not Found");

            provider.Deleted = true;
            await _context.SaveChangesAsync();

            return Ok(await _context.Providers.ToListAsync());
        }
    }
}