using System;
using System.Collections.Generic;

namespace InfoTrack.SEOTracker.Web.Models
{
    public class SearchResult
    {
        public DateTime Timestamp
        {
            get;
            set;
        }

        public IEnumerable<SearchPosition> Data
        {
            get;
            set;
        }
    }
}