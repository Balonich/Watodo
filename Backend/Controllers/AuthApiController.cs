using Backend.Domain.Models;
using Backend.Domain.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

[ApiController]
public class AuthController : ControllerBase
{
    private readonly IAuthService _authService;
    private readonly IUserService _userService;

    public AuthController(IAuthService authService, IUserService userService)
    {
        _authService = authService;
        _userService = userService;
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] UserDto user)
    {
        try
        {
            var token = await _authService.LoginAsync(user);
            return Ok(new { Token = token });
        }
        catch (InvalidOperationException ex) when (ex.Message == "User not found" || ex.Message == "Invalid password")
        {
            return BadRequest(new { message = ex.Message });
        }
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] UserDto user)
    {
        try
        {
            var userDto = await _userService.CreateUserAsync(user);
            var token = await _authService.LoginAsync(userDto);

            return Ok(new { Token = token });
        }
        catch (InvalidOperationException ex) when (ex.Message == "User already exists.")
        {
            return Conflict(new { message = ex.Message });
        }
    }
}