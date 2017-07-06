using System.Web.Mvc;

namespace Acme.Web.Controllers
{   
    [RoutePrefix("resources")]
    public class OpportunitiesController : BaseController
    {
        [Route]
        [Route("index")]
        [AllowAnonymous]
        public ActionResult Index()
        {
            return View("index");
        }

        [Route("index/admin")]
        [Authorize(Roles = "Admin")]
        public ActionResult Admin()
        {
            return View("Admin");
        }
    }

}