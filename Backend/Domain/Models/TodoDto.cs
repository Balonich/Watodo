namespace Backend.Domain.Models;

public class TodoDto
{
    public Guid Id { get; set; }
    public string Title { get; set; }
    public bool Completed { get; set; }
    public Guid UserId { get; set; }
}