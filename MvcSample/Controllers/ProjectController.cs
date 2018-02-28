using MvcSample.Models;
using System;
using System.Linq;
using System.Web.Mvc;

namespace MvcSample.Controllers
{
    public class ProjectController : Controller
    {
        // GET: Project
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult getAllPoj()
        {
            using (SampleDBEntities dataContext = new SampleDBEntities())
            {
                var projectList = dataContext.Project.ToList();
                return Json(projectList, JsonRequestBehavior.AllowGet);
            }
        }

        public JsonResult getProjByNo(string ProjNo)
        {
            using (SampleDBEntities dataContext = new SampleDBEntities())
            {
                int no = Convert.ToInt32(ProjNo);
                var projectList = dataContext.Project.Find(no);
                return Json(projectList, JsonRequestBehavior.AllowGet);
            }
        }
        public string UpdateProj(Project Proj)
        {
            if (Proj != null)
            {
                using (SampleDBEntities dataContext = new SampleDBEntities())
                {
                    int no = Convert.ToInt32(Proj.Id);
                    var projectList = dataContext.Project.Where(x => x.Id == no).FirstOrDefault();
                    projectList.Name = Proj.Name;
                    projectList.Description = Proj.Description;
                    dataContext.SaveChanges();
                    return "Project Updated";
                }
            }
            else
            {
                return "Invalid Project";
            }
        }
        public string AddProj(Project Proj)
        {
            if (Proj != null)
            {
                using (SampleDBEntities dataContext = new SampleDBEntities())
                {
                    dataContext.Project.Add(Proj);
                    dataContext.SaveChanges();
                    return "Project Added";
                }
            }
            else
            {
                return "Invalid Project";
            }
        }

        public string DeleteProj(Project Proj)
        {
            if (Proj != null)
            {
                using (SampleDBEntities dataContext = new SampleDBEntities())
                {
                    int no = Convert.ToInt32(Proj.Id);
                    var projectList = dataContext.Project.Where(x => x.Id == no).FirstOrDefault();
                    dataContext.Project.Remove(projectList);
                    dataContext.SaveChanges();
                    return "Project Deleted";
                }
            }
            else
            {
                return "Invalid Project";
            }
        }
    }
}