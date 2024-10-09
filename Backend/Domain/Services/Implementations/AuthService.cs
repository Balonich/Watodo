using Backend.Domain.Database;
using Backend.Domain.Models;
using Backend.Domain.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Backend.Domain.Services.Implementations;

public class AuthService : IAuthService
{
    private readonly WatodoDbContext _dbContext;
    private readonly ITokenService _tokenService;

    public AuthService(WatodoDbContext dbContext, ITokenService tokenService)
    {
        _dbContext = dbContext;
        _tokenService = tokenService;
    }

    public async Task<string> LoginAsync(UserDto user)
    {
        var userSqlModel = await _dbContext.Users.FirstOrDefaultAsync(u => u.Email == user.Email);

        if (userSqlModel == null)
        {
            throw new InvalidOperationException("User not found");
        }

        if (userSqlModel.Password != user.Password)
        {
            throw new InvalidOperationException("Invalid password");
        }
        
        return await _tokenService.GenerateTokenAsync(userSqlModel);
    }
}