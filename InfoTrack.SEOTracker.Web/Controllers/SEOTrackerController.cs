using Microsoft.AspNetCore.Mvc;

namespace InfoTrack.SEOTracker.Web.Controllers
{
    [Route("seotracker")]
    public class SEOTrackerController : Controller
    {
        [HttpGet("latest")]
        public IActionResult LatestResult()
        {
            ViewData["Title"] = "Latest Result";

            return View("Index");
        }

        [HttpGet("all-time")]
        public IActionResult AllTimeResults()
        {
            ViewData["Title"] = "All Time Results";

            return View("Index");
        }
    }
}