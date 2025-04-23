using Microsoft.AspNetCore.Mvc;
using Portfolio.Models;

namespace Portfolio.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class IllustrationsController : ControllerBase
    {
        [HttpGet]
        public ActionResult<IEnumerable<Illustration>> Get()
        {
            var illustrations = new List<Illustration>
            {
                new Illustration { Id = 1, Title = "Look 1", ImageUrl = "http://localhost:5096/images/image_1.jpg" },
                new Illustration { Id = 2, Title = "Look 2", ImageUrl = "http://localhost:5096/images/image_1.jpg" },
                new Illustration { Id = 3, Title = "Look 3", ImageUrl = "http://localhost:5096/images/image_1.jpg" },
            };


            return Ok(illustrations);
        }
    }
}