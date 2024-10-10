using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using AutoMapper;
using Backend.Domain.Database;
using Backend.Domain.Database.SqlModels;
using Backend.Domain.Models;
using Backend.Domain.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Backend.Domain.Services.Implementations;

public class UserService : IUserService
{
    private readonly IMapper _mapper;
    private readonly WatodoDbContext _dbContext;

    public UserService(WatodoDbContext dbContext, IMapper mapper)
    {
        _dbContext = dbContext;
        _mapper = mapper;
    }

    public async Task<UserDto> CreateUserAsync(UserDto user)
    {
        if (await UserExistsAsync(user.Email))
        {
            throw new InvalidOperationException("User already exists.");
        }

        var userSqlModel = _mapper.Map<UserSqlModel>(user);

        _dbContext.Users.Add(userSqlModel);
        await _dbContext.SaveChangesAsync();

        return _mapper.Map<UserDto>(userSqlModel);
    }

    public Guid GetUserId(string token)
    {
        var jwtToken = new JwtSecurityTokenHandler().ReadToken(token) as JwtSecurityToken;
        var userIdClaim = jwtToken?.Claims.FirstOrDefault(claim => claim.Type == "UserId");

        if (userIdClaim == null)
        {
            throw new InvalidOperationException("UserId not found in token.");
        }

        return new Guid(userIdClaim.Value);
    }

    private async Task<bool> UserExistsAsync(string email)
    {
        return await _dbContext.Users.AnyAsync(u => u.Email == email);
    }
}