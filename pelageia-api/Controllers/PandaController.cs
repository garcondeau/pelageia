using Microsoft.AspNetCore.Mvc;
using IronPython.Hosting;
using Microsoft.Scripting.Hosting;
using pelageia_api.Models.FileModels;

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

        [HttpGet("{providerId}")]
        public ActionResult GetProviderParams(int providerId)
        {
            var providerFiles = _context.ProviderFiles.Where(pf => pf.ProviderId == providerId);

            ScriptEngine engine = Python.CreateEngine();
            ScriptScope scope = engine.CreateScope();
            scope.SetVariable("provider_files", providerFiles);
            engine.ExecuteFile("../../pelageia/pelageia-core/script.py", scope);

            dynamic files = scope.GetVariable("provider_files");

            return Ok(files);
        }
    }
}