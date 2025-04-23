using Microsoft.AspNetCore.Mvc;
using Portfolio.Models;

using Microsoft.AspNetCore.Mvc;

namespace Portfolio.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class IllustrationsController : ControllerBase
    {
        private static readonly List<Illustration> _illustrations = new()
        {
            new Illustration { Id = 1, Title = "Look 1", ImageUrl = "http://localhost:5096/images/image_1.jpg" },
            new Illustration { Id = 2, Title = "Look 2", ImageUrl = "http://localhost:5096/images/image_1.jpg" },
            new Illustration { Id = 3, Title = "Look 3", ImageUrl = "http://localhost:5096/images/image_1.jpg" },
            new Illustration { Id = 4, Title = "Look 4", ImageUrl = "http://localhost:5096/images/image_1.jpg" },
        };

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_illustrations);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var illustration = _illustrations.FirstOrDefault(i => i.Id == id);
            if (illustration == null)
                return NotFound();

            return Ok(illustration);
        }
    }

    public class Illustration
    {
        public int Id { get; set; }
        public string Title { get; set; } = "";
        public string ImageUrl { get; set; } = "";
    }
}
