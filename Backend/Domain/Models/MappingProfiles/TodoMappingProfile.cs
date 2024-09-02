using AutoMapper;
using Backend.Domain.Database.SqlModels;

namespace Backend.Domain.Models.MappingProfiles;

public class TodoMappingProfile : Profile
{
    public TodoMappingProfile()
    {
        CreateMap<TodoSqlModel, TodoDto>().ReverseMap();
    }
}
