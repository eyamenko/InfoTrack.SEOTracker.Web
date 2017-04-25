using Microsoft.AspNetCore.Mvc;

namespace InfoTrack.SEOTracker.Web.Controllers
{
    public class HomeController : Controller
    {
        [Route("")]
        [Route("home")]
        [Route("home/index")]
        public IActionResult Index()
        {
            return Redirect("/seotracker/latest");
        }

        [Route("home/error")]
        public IActionResult Error()
        {
            return View();
        }
    }
}