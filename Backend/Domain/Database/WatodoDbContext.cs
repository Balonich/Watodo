using Backend.Domain.Database.SqlModels;
using Microsoft.EntityFrameworkCore;

namespace Backend.Domain.Database;

public class WatodoDbContext : DbContext
{
    public WatodoDbContext(DbContextOptions<WatodoDbContext> options) : base(options)
    {
    }

    public DbSet<TodoSqlModel> Todos { get; set; }
    public DbSet<UserSqlModel> Users { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Seed data
        modelBuilder.Entity<TodoSqlModel>().HasData(
            new TodoSqlModel { Id = 1, Title = "First Todo", Completed = false },
            new TodoSqlModel { Id = 2, Title = "Second Todo", Completed = true }
        );

        modelBuilder.Entity<UserSqlModel>().HasData(
            new UserSqlModel { Id = 1, Email = "balonich@gmail.com", Username = "balonich", Password = "password" }
        );
    }
}