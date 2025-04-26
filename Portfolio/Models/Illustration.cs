namespace Portfolio.Models
{
    public class Illustration
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string ImageUrl { get; set; } = string.Empty;
        public string Story { get; set; } = string.Empty;
    }
}