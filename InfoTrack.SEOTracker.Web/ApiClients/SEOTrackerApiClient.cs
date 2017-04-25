﻿using InfoTrack.SEOTracker.Web.ApiClients.Primitives;
using System.Threading.Tasks;
using InfoTrack.SEOTracker.Web.Models;
using System.Collections.Generic;
using System.Linq;
using InfoTrack.SEOTracker.Web.Contracts.ApiClients;

namespace InfoTrack.SEOTracker.Web.ApiClients
{
    public class SEOTrackerApiClient : BaseApiClient, ISEOTrackerApiClient
    {
        public SEOTrackerApiClient(string endpoint) : base(endpoint) { }

        public async Task<IEnumerable<SearchResult>> GetSearchResults()
        {
            return await GetSafeResponseAsync<IEnumerable<SearchResult>>(c => c.GetAsync("v1/searchresults")) ?? Enumerable.Empty<SearchResult>();
        }

        public Task<SearchResult> GetLatestSearchResult()
        {
            return GetSafeResponseAsync<SearchResult>(c => c.GetAsync("v1/searchresults/latest"));
        }
    }
}