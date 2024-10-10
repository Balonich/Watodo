using AutoMapper;
using Backend.Domain.Database.SqlModels;

namespace Backend.Domain.Models.MappingProfiles;

public class UserMappingProfile : Profile
{
    public UserMappingProfile()
    {
        CreateMap<UserSqlModel, UserDto>().ReverseMap();
    }
}