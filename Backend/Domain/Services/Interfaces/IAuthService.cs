using Backend.Domain.Models;

namespace Backend.Domain.Services.Interfaces;

public interface IAuthService
{
    Task<string> LoginAsync(UserDto user);
}
