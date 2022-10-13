using Microsoft.AspNetCore.Mvc;
using pelageia_api.Models;

namespace pelageia_api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase
{
    private readonly AppDbContext _context;
    public UserController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
        return Ok(await _context.Users.ToListAsync());
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> Get(int id)
    {
        var user = await _context.Users.FindAsync(id);
        if (user is null)
            return BadRequest("User Not Found");
        return Ok(user);
    }

    [HttpPost]
    public async Task<IActionResult> Insert(User user)
    {
        _context.Add(user);
        await _context.SaveChangesAsync();
        return Ok(await _context.Users.ToListAsync());
    }
}
