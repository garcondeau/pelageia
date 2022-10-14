using Microsoft.AspNetCore.Mvc;
using pelageia_api.Models;

namespace pelageia_api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
    private readonly AppDbContext _context;
    public UsersController(AppDbContext context)
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
        user.CreatedAt = DateTime.Now;
        _context.Add(user);
        await _context.SaveChangesAsync();
        return Ok(await _context.Users.ToListAsync());
    }

    [HttpPut]
    public async Task<IActionResult> Update(User request)
    {
        var user = await _context.Users.FindAsync(request.Id);
        if (user is null)
            return BadRequest("User not found");

        user.UserName = request.UserName;
        user.Phone = request.Phone;
        user.Email = request.Email;
        user.Subscription = request.Subscription;
        user.IsActive = request.IsActive;


        await _context.SaveChangesAsync();

        return Ok(await _context.Users.ToListAsync());
    }

    [HttpPut("change_active/{id}")]
        public async Task<IActionResult> ChangeUserActive(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user is null)
                return BadRequest("Provider not found");
            user.IsActive = !user.IsActive;


            await _context.SaveChangesAsync();

            return Ok(await _context.Users.ToListAsync());
        }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var user = await _context.Users.FindAsync(id);
        if (user is null)
            return BadRequest("User Not Found");
            
        _context.Users.Remove(user);
        await _context.SaveChangesAsync();

        return Ok(await _context.Users.ToListAsync());
    }
}
