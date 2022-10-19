using Microsoft.AspNetCore.Mvc;

namespace pelageia_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PandaController : ControllerBase
    {
        private readonly AppDbContext _context;
        public PandaController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult> GetProviderDataFrames(int providerId)
        {
            var providerFiles = await _context.Providers.FindAsync(providerId);

            return Ok(providerFiles);
        }
    }
}