using Backend.Domain.Database;
using Backend.Domain.Models;
using Backend.Domain.Models.MappingProfiles;
using Backend.Domain.Services.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<WatodoDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddAutoMapper(typeof(TodoMappingProfile));
builder.Services.AddScoped<ITodosService, TodosService>();

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
        builder.AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "Todo API", Description = "Keep track of your tasks", Version = "v1" });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "Todo API V1");
    });
}

app.UseHttpsRedirection();

app.UseCors();

app.MapGet("/todos", async (ITodosService todosService) =>
{
    return await todosService.GetTodosAsync();
})
.WithName("GetTodos")
.WithOpenApi();

app.MapGet("/todos/{id}", async (ITodosService todosService, int id) =>
{
    return await todosService.GetTodoAsync(id);
})
.WithName("GetTodo")
.WithOpenApi();

app.MapPost("/todos/add", async (ITodosService todosService, TodoDto todo) =>
{
    return await todosService.CreateTodoAsync(todo);
})
.WithName("CreateTodo")
.WithOpenApi();

app.MapPut("/todos/{id}", async (ITodosService todosService, int id, TodoDto todo) =>
{
    return await todosService.UpdateTodoAsync(id, todo);
})
.WithName("UpdateTodo")
.WithOpenApi();

app.MapDelete("/todos/{id}", async (ITodosService todosService, int id) =>
{
    await todosService.DeleteTodoAsync(id);
})
.WithName("DeleteTodo")
.WithOpenApi();

app.Run();

