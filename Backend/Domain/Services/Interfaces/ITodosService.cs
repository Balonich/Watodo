using Backend.Domain.Models;

namespace Backend.Domain.Services.Interfaces;

public interface ITodosService
{
    Task<IEnumerable<TodoDto>> GetTodosAsync();
    Task<TodoDto> GetTodoAsync(int id);
    Task<TodoDto> CreateTodoAsync(TodoDto todo);
    Task<TodoDto> UpdateTodoAsync(int id, TodoDto todo);
    Task DeleteTodoAsync(int id);
}