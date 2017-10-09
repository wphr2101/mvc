using MvcSample.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MvcSample.Controllers
{
    public class DeptController : Controller
    {
        // GET: Dept
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult getAllDept()
        {
            using (SampleDBEntities dataContext = new SampleDBEntities())
            {
                var departmentList = dataContext.Departments.ToList();
                return Json(departmentList, JsonRequestBehavior.AllowGet);
            }
        }

        //public JsonResult getLatestId()
        //{
        //    using (SampleDBEntities dataContext = new SampleDBEntities())
        //    {
        //        int id = 1;
        //        if (dataContext.Departments.Count() > 0)
        //            id = dataContext.Departments.ToList().Last().Id;
        //        return Json(id, JsonRequestBehavior.AllowGet); ;
        //    }

        //}
        public JsonResult getDeptByNo(string DeptNo)
        {
            using (SampleDBEntities dataContext = new SampleDBEntities())
            {
                int no = Convert.ToInt32(DeptNo);
                var departmentList = dataContext.Departments.Find(no);
                return Json(departmentList, JsonRequestBehavior.AllowGet);
            }
        }
        public string UpdateDept(Department Dept)
        {
            if (Dept != null)
            {
                using (SampleDBEntities dataContext = new SampleDBEntities())
                {
                    int no = Convert.ToInt32(Dept.Id);
                    var departmentList = dataContext.Departments.Where(x => x.Id == no).FirstOrDefault();
                    departmentList.Name = Dept.Name;
                    dataContext.SaveChanges();
                    return "Department Updated";
                }
            }
            else
            {
                return "Invalid Department";
            }
        }
        public string AddDept(Department Dept)
        {
            if (Dept != null)
            {
                using (SampleDBEntities dataContext = new SampleDBEntities())
                {
                    dataContext.Departments.Add(Dept);
                    dataContext.SaveChanges();
                    return "Department Added";
                }
            }
            else
            {
                return "Invalid Department";
            }
        }

        public string DeleteDept(Department Dept)
        {
            if (Dept != null)
            {
                using (SampleDBEntities dataContext = new SampleDBEntities())
                {
                    int no = Convert.ToInt32(Dept.Id);
                    var departmentList = dataContext.Departments.Where(x => x.Id == no).FirstOrDefault();
                    dataContext.Departments.Remove(departmentList);
                    dataContext.SaveChanges();
                    return "Department Deleted";
                }
            }
            else
            {
                return "Invalid Department";
            }
        }
    }
}