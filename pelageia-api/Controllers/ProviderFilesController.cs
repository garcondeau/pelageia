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

        [HttpGet("{providerId}")]
        public ActionResult GetFiles(int providerId)
        {
            var providerFiles = _context.ProviderFiles.Where(pf => pf.ProviderId == providerId);
            if(providerFiles is null)
                return BadRequest("Provider not found");

            return Ok(providerFiles);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetFile(int id)
        {
            var providerFile = await _context.ProviderFiles.FindAsync(id);

            return Ok(providerFile);
        }

        [HttpPost]
        public async Task<ActionResult> AppendFile(ProviderFileDto file)
        {
            var provider = await _context.Providers.FindAsync(file.ProviderId);
            if (provider is null)
                return BadRequest("File provider not found");
            var providerFile = new ProviderFile
            {
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

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateFile(ProviderFile file)
        {
            var providerFile = await _context.ProviderFiles.FindAsync(file.Id);
            if (providerFile is null)
                return BadRequest("Provider File not found");

            providerFile.FileUrl = file.FileUrl;
            providerFile.FileName = file.FileName;
            providerFile.FileType = file.FileType;
            providerFile.CompressionType = file.CompressionType;
            providerFile.Separator = file.Separator;
            providerFile.Download = file.Download;
            providerFile.DownloadFiles = file.DownloadFiles;
            providerFile.UseCols = file.UseCols;
            providerFile.Columns = file.Columns;

            return Ok(providerFile);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteFile(int id)
        {
            var providerFile = await _context.ProviderFiles.FindAsync(id);
            if (providerFile is null)
                return BadRequest("Provider File not found");

            _context.Remove(providerFile);
            await _context.SaveChangesAsync();

            return Ok("Provider File Deleted");
        }
    }
}