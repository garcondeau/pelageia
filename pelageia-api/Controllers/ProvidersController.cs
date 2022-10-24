using System.Net;
using System.Net.Http.Headers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using pelageia_api.Models;

namespace pelageia_api.Controllers
{
    [ApiController]
    [Route("api/[controller]"), Authorize]
    public class ProvidersController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IUserService _userService;
        public ProvidersController(AppDbContext context, IUserService userService)
        {
            _context = context;
            _userService = userService;
        }

        [HttpGet, Authorize(Roles = "Admin")]
        [Route("list")]
        public async Task<IActionResult> GetProviders()
        {
            return Ok(await _context.Providers.ToListAsync());
        }

        [HttpGet]
        public ActionResult GetUserProviders()
        {
            var user = _userService.GetMe();
            return Ok(_context.Providers.Where(p => p.UserId == user.Id));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetProviderById(int id)
        {
            return Ok(await _context.Providers.FindAsync(id));
        }

        [HttpPost]
        public async Task<IActionResult> InsertProvider(string name)
        {
            var user = _userService.GetMe();
            var provider = new Provider{
                UserId = user.Id,
                Name = name,
                CreatedAt = DateTime.Now,
                IsActive = true,
                Deleted = false
            };
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
            provider.IsActive = request.IsActive;


            await _context.SaveChangesAsync();

            return Ok(await _context.Providers.ToListAsync());
        }

        [HttpPut("change_active/{id}")]
        public async Task<IActionResult> ChangeProviderActive(int id)
        {
            var provider = await _context.Providers.FindAsync(id);
            if (provider is null)
                return BadRequest("Provider not found");
            provider.IsActive = !provider.IsActive;


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