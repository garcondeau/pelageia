using Microsoft.AspNetCore.Mvc;
using pelageia_api.Dto;
using pelageia_api.Models;

namespace pelageia_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProviderFilesController : ControllerBase
    {
        private readonly AppDbContext _context;
        public ProviderFilesController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult> GetFiles()
        {
            var providerFiles = await _context.ProviderFiles.ToListAsync();

            return Ok(providerFiles);
        }

        [HttpPost]
        public async Task<ActionResult> AppendFile(ProviderFileDto file)
        {
            var provider = await _context.Providers.FindAsync(file.ProviderId);
            if(provider is null)
                return BadRequest("File provider not found");
            var providerFile = new ProviderFile{
                ProviderId = file.ProviderId,
                FileName = file.FileName,
                FileType = file.FileType,
                CompressionType = file.CompressionType,
                FileUrl = file.FileUrl,
                Separator = file.Separator,
                UseCols = file.UseCols,
                Columns = file.Columns,
                Provider = provider
            };
            await _context.ProviderFiles.AddAsync(providerFile);
            await _context.SaveChangesAsync();
            return Ok(file);
        }
    }
}