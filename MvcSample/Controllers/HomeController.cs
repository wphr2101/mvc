using System.Collections;
using System.Web.Mvc;

namespace MvcSample.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Jstest()
        {
            return View();
        }

        public ActionResult OOJS()
        {
            return View();
        }

        public ActionResult OOJSInheritance()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public double sumArrayList(ArrayList arr)
        {
            double sum = 0.0;
            foreach(double a in arr)
            {

            }
            return sum;
        }
    }
}