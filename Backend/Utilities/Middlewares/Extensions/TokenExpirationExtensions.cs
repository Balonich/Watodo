namespace Backend.Utilities.Middlewares.Extensions;

    public static class TokenExpirationExtensions
    {
        public static IApplicationBuilder UseTokenExpiration(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<TokenExpirationMiddleware>();
        }
    }
