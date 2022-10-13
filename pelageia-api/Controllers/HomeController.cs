using Microsoft.AspNetCore.Mvc;

namespace pelageia_api.Controllers;

[ApiController]
[Route("[controller]")]
public class HomeController : ControllerBase
{
    [HttpGet]
    public ActionResult Get()
    {
        return Ok("Home Controller");
    }
}
