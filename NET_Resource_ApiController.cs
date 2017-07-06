using Acme.Web.Domain;
using Acme.Web.Models.Requests;
using Acme.Web.Models.Responses;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Acme.Web.Requests.Interfaces;

namespace Acme.Web.Controllers.Api
{
    [RoutePrefix("api/opportunities")]
    public class OpportunitiesApiController : ApiController
    {
        private IOpportunityService _opportunity = null;
            public OpportunitiesApiController(IOpportunityService svcOpportunityService)
        {
            _opportunity = svcOpportunityService;
        }

        // POST 
        [Route, HttpPost]
        public HttpResponseMessage Add(OpportunityAddRequest model)
        {
            if (!ModelState.IsValid)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }

            ItemResponse<int> response = new ItemResponse<int>();
            response.Item = _opportunity.Insert(model);
            return Request.CreateResponse(HttpStatusCode.OK, response);
             
        }
       
        // PUT  
        [Route("{id:int}"), HttpPut]
        public HttpResponseMessage Update(OpportunityUpdateRequest model)
        {
            if (!ModelState.IsValid)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }

            _opportunity.Update(model);

            SuccessResponse response = new SuccessResponse();

            return Request.CreateResponse(HttpStatusCode.OK, response);
        }

        // GET  
        [Route("{id:int}"), HttpGet]
        public HttpResponseMessage SelectById(int id)
        {
            if (!ModelState.IsValid)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }

            ItemResponse<Opportunity> response = new ItemResponse<Opportunity>();
            response.Item = _opportunity.SelectById(id);

            return Request.CreateResponse(HttpStatusCode.OK, response);
        }

        // GET 
        [Route(""), HttpGet]
        public HttpResponseMessage SelectAll()
        {
            List<Opportunity> opportunity = _opportunity.SelectAll();
            ItemsResponse<Opportunity>
                response = new ItemsResponse<Opportunity>();
            response.Items = opportunity;

            return Request.CreateResponse(HttpStatusCode.OK, response);
        }

        // DELETE  
        [Route("{id:int}"), HttpDelete]
        public HttpResponseMessage DeleteById(int id)
        {
            _opportunity.Delete(id);

            SuccessResponse response = new SuccessResponse();

            return Request.CreateResponse(HttpStatusCode.OK, response);

        }

        // SEARCH 
        [Route("search"), HttpGet]
        public HttpResponseMessage Search([FromUri]OpportunitySearchRequest model)
        {
            int rows = 0;
            List<Opportunity> opportunity = _opportunity.Search(model, out rows);
            SearchResponse<Opportunity>
                response = new SearchResponse<Opportunity>();
            response.Items = opportunity;
            response.ResultCount = rows;

            return Request.CreateResponse(HttpStatusCode.OK, response);         
        }
    }
}
