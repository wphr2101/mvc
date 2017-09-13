using System.Web.Mvc;

namespace MvcSample.Controllers
{
    public class HelloController : Controller
    {
        // GET: Hello
        public ActionResult Index()
        {
            ViewBag.fibList = fibList(25);
            return View("Index","", "You");
        }

        public string fibList(int n)
        {
            string a = "[";
            int[] b = new int[n];
            for (int i = 0; i < n; i++)
            {
                if (i < 2)
                {
                    b[i] = i;
                }
                else
                    b[i] = b[i - 1] + b[i - 2];
                a += b[i];
                if ((i != n-1) &&(a != "[")) a += ",";
            }
            a += "]";
            return a;
        }
    }
}