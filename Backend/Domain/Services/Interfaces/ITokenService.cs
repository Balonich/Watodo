using Backend.Domain.Database.SqlModels;
using Backend.Domain.Models;

namespace Backend.Domain.Services.Interfaces;

public interface ITokenService
{
    Task<string> GenerateTokenAsync(UserSqlModel user);
}