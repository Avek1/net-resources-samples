using System;

namespace Acme.Web.Models.Requests
{
    public class OpportunitySearchRequest
    {
        public string SearchString { get; set; }
        public int? CurrentPage { get; set; }
        public int? ItemsPerPage { get; set; }
        public DateTime BeginDate { get; set; }
        public DateTime? EndDate { get; set; }
        public string SortByColumn { get; set; }
        public bool Descending { get; set; }
    }
}