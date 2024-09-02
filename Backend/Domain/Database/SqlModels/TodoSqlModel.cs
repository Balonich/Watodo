using System.ComponentModel.DataAnnotations;

namespace Backend.Domain.Database.SqlModels;

public class TodoSqlModel
{
    [Key]
    public int Id { get; set; }

    [Required]
    public string Title { get; set; }

    [Required]
    public bool Completed { get; set; }
}