var builder = WebApplication.CreateBuilder(args);

// ✅ CORS aktivieren
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins("http://localhost:3000") // Nur dein Next.js erlaubt
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

builder.Services.AddControllers();

var app = builder.Build();

// ✅ CORS Middleware aktivieren
app.UseCors("AllowFrontend");

app.UseStaticFiles();
app.MapControllers();

app.Run();