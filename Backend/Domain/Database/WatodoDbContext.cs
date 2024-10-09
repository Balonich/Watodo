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

        var userId = Guid.NewGuid();

        // Seed data
        modelBuilder.Entity<UserSqlModel>().HasData(
            new UserSqlModel { Id = userId, Email = "balonich@gmail.com", Username = "balonich", Password = "password" }
        );

        modelBuilder.Entity<TodoSqlModel>().HasData(
            new TodoSqlModel { Id = Guid.NewGuid(), Title = "First Todo", Completed = false, UserId = userId }, 
            new TodoSqlModel { Id = Guid.NewGuid(), Title = "Second Todo", Completed = true, UserId = userId }
        );

        // Configure the foreign key relationship
        modelBuilder.Entity<TodoSqlModel>()
            .HasOne(todo => todo.User)
            .WithMany(user => user.Todos)
            .HasForeignKey(todo => todo.UserId);
    }
}