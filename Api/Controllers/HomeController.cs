using Microsoft.AspNetCore.Mvc;
using IronPython.Hosting;
using Microsoft.Scripting.Hosting;

namespace Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class HomeController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        string message = "Python works";

        ScriptEngine engine = Python.CreateEngine();
        ScriptScope scope = engine.CreateScope();

        engine.ExecuteFile("./Core/main.py", scope);
        dynamic square = scope.GetVariable("test");
        dynamic result = square(message);
        Console.WriteLine(result);
        return Ok(result);
    }
}

