using Backend.Domain.Models;

namespace Backend.Domain.Services.Interfaces;

public interface IUserService
{
    Task<UserDto> CreateUserAsync(UserDto user);

    Guid GetUserId(string token);
}