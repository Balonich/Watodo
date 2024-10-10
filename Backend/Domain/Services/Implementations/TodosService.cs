using AutoMapper;
using Backend.Domain.Database;
using Backend.Domain.Database.SqlModels;
using Backend.Domain.Models;
using Backend.Domain.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

public class TodosService : ITodosService
{
    private readonly WatodoDbContext _dbContext;
    private readonly IMapper _mapper;

    public TodosService(WatodoDbContext dbContext, IMapper mapper)
    {
        _dbContext = dbContext;
        _mapper = mapper;
    }

    public async Task<IEnumerable<TodoDto>> GetTodosAsync()
    {
        var todos = await _dbContext.Todos.ToListAsync();

        return _mapper.Map<IEnumerable<TodoDto>>(todos);
    }

    public async Task<TodoDto> GetTodoAsync(Guid id)
    {
        var todo = await _dbContext.Todos.FindAsync(id);

        return _mapper.Map<TodoDto>(todo);
    }

    public async Task<TodoDto> CreateTodoAsync(TodoDto todo)
    {
        var todoSqlModel = _mapper.Map<TodoSqlModel>(todo);

        _dbContext.Todos.Add(todoSqlModel);
        await _dbContext.SaveChangesAsync();

        return _mapper.Map<TodoDto>(todoSqlModel);
    }

    public async Task<TodoDto> UpdateTodoAsync(Guid id, TodoDto todo)
    {
        var todoSqlModel = await _dbContext.Todos.FindAsync(id);

        _mapper.Map(todo, todoSqlModel);

        await _dbContext.SaveChangesAsync();

        return _mapper.Map<TodoDto>(todoSqlModel);
    }

    public async Task DeleteTodoAsync(Guid id)
    {
        var todo = await _dbContext.Todos.FindAsync(id);

        _dbContext.Todos.Remove(todo);
        
        await _dbContext.SaveChangesAsync();
    }
}