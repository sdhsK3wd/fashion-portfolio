using Microsoft.AspNetCore.Mvc;
using Portfolio.Models;
using System.Collections.Generic;
using System.Linq;

namespace Portfolio.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class IllustrationsController : ControllerBase
    {
        private static readonly List<Illustration> _illustrations = new()
        {
            new Illustration
            {
                Id = 1,
                Title = "Look 1",
                ImageUrl = "http://localhost:5096/images/Image_1-removebg-preview.png",
                Story = "Inspiriert vom urbanen Neonlicht in der Zukunft."
            },
            new Illustration
            {
                Id = 2,
                Title = "Look 2",
                ImageUrl = "http://localhost:5096/images/Image_2-removebg-preview.png",
                Story = "Minimalistischer Entwurf mit Fokus auf Silhouetten."
            },
            new Illustration
            {
                Id = 3,
                Title = "Look 3",
                ImageUrl = "http://localhost:5096/images/Image_3-removebg-preview.png",
                Story = "Dieser Look spielt mit geometrischen Mustern und Kontrasten."
            },
            new Illustration
            {
                Id = 4,
                Title = "Look 4",
                ImageUrl = "http://localhost:5096/images/Image_4-removebg-preview.png",
                Story = "Futuristisch und feminin, inspiriert von Sci-Fi-Ästhetik."
            },
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
}