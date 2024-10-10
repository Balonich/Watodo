using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Backend.Domain.Database.SqlModels;
using Backend.Domain.Services.Interfaces;
using Microsoft.IdentityModel.Tokens;

namespace Backend.Domain.Services.Implementations;

public class TokenService : ITokenService
{
    private readonly IConfiguration _configuration;

    public TokenService(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    public async Task<string> GenerateTokenAsync(UserSqlModel user)
    {
        var claims = new List<Claim> {
            new Claim(ClaimTypes.Email, user.Email),
            new Claim("UserId", user.Id.ToString())
        };

        var jwtToken = new JwtSecurityToken(
            claims: claims,
            issuer: _configuration["Jwt:Issuer"],
            audience: _configuration["Jwt:Issuer"],
            notBefore: DateTime.UtcNow,
            expires: DateTime.UtcNow.AddDays(1),
            signingCredentials: new SigningCredentials(
                new SymmetricSecurityKey(
                   Encoding.UTF8.GetBytes(_configuration["Jwt:Key"])
                    ),
                SecurityAlgorithms.HmacSha256Signature)
            );

        return await Task.FromResult(new JwtSecurityTokenHandler().WriteToken(jwtToken));
    }
}