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
        public async Task<IActionResult> Get()
        {
            return Ok(await _context.Providers.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            return Ok(await _context.Providers.FindAsync(id));
        }

        [HttpPost]
        public async Task<IActionResult> Insert(Provider provider)
        {
            provider.User = await _context.Users.FindAsync(provider.UserId);
            _context.Add(provider);
            await _context.SaveChangesAsync();
            return Ok(await _context.Users.ToListAsync());
        }

        [HttpPut]
    public async Task<IActionResult> Update(Provider request)
    {
        var provider = await _context.Providers.FindAsync(request.Id);
        if (provider is null)
            return BadRequest("User not found");

        provider.UserId = provider.UserId;
        provider.Deleted = request.Deleted;
        provider.SelectQuery = request.SelectQuery;
        provider.WhereQuery = request.WhereQuery;


        await _context.SaveChangesAsync();

        return Ok(await _context.Users.ToListAsync());
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var provider = await _context.Providers.FindAsync(id);
        if (provider is null)
            return BadRequest("User Not Found");
            
        _context.Providers.Remove(provider);
        await _context.SaveChangesAsync();

        return Ok(await _context.Users.ToListAsync());
    }
    }
}