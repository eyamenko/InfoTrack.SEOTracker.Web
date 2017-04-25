using System.Threading.Tasks;
using InfoTrack.SEOTracker.Web.Contracts.ApiClients;
using InfoTrack.SEOTracker.Web.Models;
using System.Collections.Generic;
using System.Linq;
using InfoTrack.SEOTracker.Web.Contracts.Services;

namespace InfoTrack.SEOTracker.Web.Services
{
    public class SEOTrackerService : ISEOTrackerService
    {
        private readonly ISEOTrackerApiClient _seoTrackerApiClient;

        public SEOTrackerService(ISEOTrackerApiClient seoTrackerApiClient)
        {
            _seoTrackerApiClient = seoTrackerApiClient;
        }

        public async Task<IEnumerable<SearchPosition>> GetLatestSearchResultPositions()
        {
            var searchResult = await _seoTrackerApiClient.GetLatestSearchResult();

            if (searchResult == null)
                return Enumerable.Empty<SearchPosition>();

            return searchResult.Data;
        }

        public async Task<IEnumerable<DataPoint>> GetDataPoints()
        {
            var searchResults = await _seoTrackerApiClient.GetSearchResults();

            return searchResults.Select(ToDataPoint);
        }

        private DataPoint ToDataPoint(SearchResult searchResult)
        {
            var firstPosition = searchResult.Data.FirstOrDefault();
            var position = firstPosition == null ? 0 : firstPosition.Index;

            return new DataPoint { Position = position, Timestamp = searchResult.Timestamp };
        }
    }
}