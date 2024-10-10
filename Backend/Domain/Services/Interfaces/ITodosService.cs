using Backend.Domain.Models;

namespace Backend.Domain.Services.Interfaces;

public interface ITodosService
{
    Task<IEnumerable<TodoDto>> GetTodosAsync();
    Task<TodoDto> GetTodoAsync(Guid id);
    Task<TodoDto> CreateTodoAsync(TodoDto todo);
    Task<TodoDto> UpdateTodoAsync(Guid id, TodoDto todo);
    Task DeleteTodoAsync(Guid id);
}