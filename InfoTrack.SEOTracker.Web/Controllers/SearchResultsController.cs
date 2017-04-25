using System;
using Microsoft.AspNetCore.Mvc;
using InfoTrack.SEOTracker.Web.Contracts.Services;
using System.Threading.Tasks;

namespace InfoTrack.SEOTracker.Web.Controllers
{
    [Route("api/[controller]")]
    public class SearchResultsController : Controller
    {
        private readonly ISEOTrackerService _seoTrackerService;

        public SearchResultsController(ISEOTrackerService seoTrackerService)
        {
            _seoTrackerService = seoTrackerService;
        }

        [HttpGet("latest/positions")]
        public async Task<IActionResult> GetLatestSearchResultPositions()
        {
            try
            {
                var positions = await _seoTrackerService.GetLatestSearchResultPositions();

                return Ok(positions);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("datapoints")]
        public async Task<IActionResult> GetDataPoints()
        {
            try
            {
                var dataPoints = await _seoTrackerService.GetDataPoints();

                return Ok(dataPoints);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}