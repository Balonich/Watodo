using System.ComponentModel.DataAnnotations;

namespace Backend.Domain.Database.SqlModels;

public class UserSqlModel
{
    [Key]
    public Guid Id { get; set; }

    [Required]
    public string Email { get; set; }

    [Required]
    public string Username { get; set; }

    [Required]
    public string Password { get; set; }

    public ICollection<TodoSqlModel> Todos { get; set; }
}