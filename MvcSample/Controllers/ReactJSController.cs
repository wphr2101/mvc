using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MvcSample.Controllers
{
    public class ReactJSController : Controller
    {
        // GET: React
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult GetMessage()
        {
            return Json(new { result = "Hello World From ReactJS Controller" }, JsonRequestBehavior.AllowGet);
        }

        public ActionResult CompoStyle()
        {
            return View();
        }
    }
}