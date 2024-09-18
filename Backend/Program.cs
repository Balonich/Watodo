using System.Text;
using Backend.Domain.Database;
using Backend.Domain.Models;
using Backend.Domain.Models.MappingProfiles;
using Backend.Domain.Services.Implementations;
using Backend.Domain.Services.Interfaces;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<WatodoDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddAutoMapper(typeof(TodoMappingProfile));
builder.Services.AddScoped<ITodosService, TodosService>();
builder.Services.AddScoped<IAuthService, AuthService>();
builder.Services.AddScoped<ITokenService, TokenService>();

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

builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = builder.Configuration["Jwt:Issuer"],
        ValidAudience = builder.Configuration["Jwt:Issuer"],
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]))
    };
});
builder.Services.AddAuthorization();

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

app.UseAuthentication();
app.UseAuthorization();

app.UseCors();

app.MapGet("/todos", async (ITodosService todosService) =>
{
    return await todosService.GetTodosAsync();
})
.WithName("GetTodos")
.WithOpenApi()
.RequireAuthorization();

app.MapGet("/todos/{id}", async (ITodosService todosService, int id) =>
{
    return await todosService.GetTodoAsync(id);
})
.WithName("GetTodo")
.WithOpenApi()
.RequireAuthorization();

app.MapPost("/todos/add", async (ITodosService todosService, TodoDto todo) =>
{
    return await todosService.CreateTodoAsync(todo);
})
.WithName("CreateTodo")
.WithOpenApi()
.RequireAuthorization();

app.MapPut("/todos/{id}", async (ITodosService todosService, int id, TodoDto todo) =>
{
    return await todosService.UpdateTodoAsync(id, todo);
})
.WithName("UpdateTodo")
.WithOpenApi()
.RequireAuthorization();

app.MapDelete("/todos/{id}", async (ITodosService todosService, int id) =>
{
    return todosService.DeleteTodoAsync(id);
})
.WithName("DeleteTodo")
.WithOpenApi()
.RequireAuthorization();

app.MapPost("/login", async (IAuthService authService, UserDto user) =>
{
    var token = await authService.LoginAsync(user);
    return new { Token = token };
})
.WithName("Login")
.WithOpenApi();

app.Run();

