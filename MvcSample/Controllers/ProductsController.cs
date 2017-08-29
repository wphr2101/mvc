using MvcSample.Models;
using System;
using System.Linq;
using System.Web.Mvc;

namespace MvcSample.Controllers
{
    public class ProductsController : Controller
    {
        // GET: Products
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult getAll()
        {
            using (SampleDBEntities dataContext = new SampleDBEntities())
            {
                var productList = dataContext.Products.ToList();
                return Json(productList, JsonRequestBehavior.AllowGet);
            }
        }

        public JsonResult getProductById(string ProdId)
        {
            using (SampleDBEntities dataContext = new SampleDBEntities())
            {
                int id = Convert.ToInt32(ProdId);
                var productList = dataContext.Products.Find(id);
                return Json(productList, JsonRequestBehavior.AllowGet);
            }
        }

        public string UpdateProduct(Product Prod)
        {
            if (Prod != null)
            {
                using (SampleDBEntities dataContext = new SampleDBEntities())
                {
                    int id = Convert.ToInt32(Prod.Id);
                    var productList = dataContext.Products.Where(x => x.Id == id).FirstOrDefault();
                    productList.Name = Prod.Name;
                    productList.Price = Prod.Price;
                    productList.Quantity = Prod.Quantity;
                    dataContext.SaveChanges();
                    return "Product Updated";
                }
            }
            else
            {
                return "Invalid Product";
            }
        }

        public string AddProduct(Product Prod)
        {
            if (Prod != null)
            {
                using (SampleDBEntities dataContext = new SampleDBEntities())
                {
                    dataContext.Products.Add(Prod);
                    dataContext.SaveChanges();
                    return "Product Updated";
                }
            }
            else
            {
                return "Invalid Product";
            }
        }

        public string DeleteProduct(Product Prod)
        {
            if (Prod != null)
            {
                using (SampleDBEntities dataContext = new SampleDBEntities())
                {
                    int id = Convert.ToInt32(Prod.Id);
                    var productList = dataContext.Products.Where(x => x.Id == id).FirstOrDefault();
                    dataContext.Products.Remove(productList);
                    dataContext.SaveChanges();
                    return "Product Deleted";
                }
            }
            else
            {
                return "Invalid Product";
            }
        }
    }
}