using AutoMapper;
using Backend.Domain.Database;
using Backend.Domain.Database.SqlModels;
using Backend.Domain.Models;
using Backend.Domain.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

public class TodosService : ITodosService
{
    private readonly WatodoDbContext dbContext;
    private readonly IMapper mapper;

    public TodosService(WatodoDbContext dbContext, IMapper mapper)
    {
        this.dbContext = dbContext;
        this.mapper = mapper;
    }

    public async Task<IEnumerable<TodoDto>> GetTodosAsync()
    {
        var todos = await dbContext.Todos.ToListAsync();

        return mapper.Map<IEnumerable<TodoDto>>(todos);
    }

    public async Task<TodoDto> GetTodoAsync(int id)
    {
        var todo = await dbContext.Todos.FindAsync(id);

        return mapper.Map<TodoDto>(todo);
    }

    public async Task<TodoDto> CreateTodoAsync(TodoDto todo)
    {
        var todoSqlModel = mapper.Map<TodoSqlModel>(todo);

        dbContext.Todos.Add(todoSqlModel);
        await dbContext.SaveChangesAsync();

        return mapper.Map<TodoDto>(todoSqlModel);
    }

    public async Task<TodoDto> UpdateTodoAsync(int id, TodoDto todo)
    {
        var todoSqlModel = await dbContext.Todos.FindAsync(id);

        mapper.Map(todo, todoSqlModel);

        await dbContext.SaveChangesAsync();

        return mapper.Map<TodoDto>(todoSqlModel);
    }

    public async Task DeleteTodoAsync(int id)
    {
        var todo = await dbContext.Todos.FindAsync(id);

        dbContext.Todos.Remove(todo);
        
        await dbContext.SaveChangesAsync();
    }
}