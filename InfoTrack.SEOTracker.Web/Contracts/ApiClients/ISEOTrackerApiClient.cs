using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using InfoTrack.SEOTracker.Web.Models;

namespace InfoTrack.SEOTracker.Web.Contracts.ApiClients
{
    public interface ISEOTrackerApiClient
    {
        Task<IEnumerable<SearchResult>> GetSearchResults();
        Task<SearchResult> GetLatestSearchResult();
    }
}