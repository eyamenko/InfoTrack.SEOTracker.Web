using System.Collections.Generic;
using System.Threading.Tasks;
using InfoTrack.SEOTracker.Web.Models;

namespace InfoTrack.SEOTracker.Web.Contracts.Services
{
    public interface ISEOTrackerService
    {
        Task<IEnumerable<SearchPosition>> GetLatestSearchResultPositions();
        Task<IEnumerable<DataPoint>> GetDataPoints();
    }
}