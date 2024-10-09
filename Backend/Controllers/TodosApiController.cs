using Backend.Domain.Models;
using Backend.Domain.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

[ApiController]
[Route("todos")]
[Authorize]
public class TodosApiController : ControllerBase
{
    private readonly ITodosService _todosService;

    public TodosApiController(ITodosService todosService)
    {
        _todosService = todosService;
    }

    [HttpGet]
    public async Task<IActionResult> GetTodos()
    {
        var todos = await _todosService.GetTodosAsync();
        return Ok(todos);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetTodo(Guid id)
    {
        var todo = await _todosService.GetTodoAsync(id);
        return Ok(todo);
    }

    [HttpPost("add")]
    public async Task<IActionResult> CreateTodo([FromBody] TodoDto todo)
    {
        var userIdClaim = User.Claims.FirstOrDefault(c => c.Type == "UserId");

        if (userIdClaim == null)
        {
            return Unauthorized(new { message = "User not found" });
        }

        todo.UserId = Guid.Parse(userIdClaim.Value);

        var createdTodo = await _todosService.CreateTodoAsync(todo);
        return Ok(createdTodo);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateTodo(Guid id, [FromBody] TodoDto todo)
    {
        var userIdClaim = User.Claims.FirstOrDefault(c => c.Type == "UserId");

        if (userIdClaim == null)
        {
            return Unauthorized(new { message = "User not found" });
        }

        todo.UserId = Guid.Parse(userIdClaim.Value);

        var updatedTodo = await _todosService.UpdateTodoAsync(id, todo);
        return Ok(updatedTodo);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteTodo(Guid id)
    {
        await _todosService.DeleteTodoAsync(id);
        return NoContent();
    }
}