using MvcSample.Models;
using System;
using System.Linq;
using System.Web.Mvc;

namespace MvcSample.Controllers
{
    public class EmployeeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult getAll()
        {
            using (SampleDBEntities dataContext = new SampleDBEntities())
            {
                var employeeList = from emp in dataContext.Employees
                                   join dept in dataContext.Departments on emp.deptId equals dept.Id
                                   //select new { Id = emp.Id, name = emp.name, email = emp.email, age = emp.age, address = emp.address, city = emp.city, state = emp.state, zip = emp.zip, department = dept.Name };
                                   select new { emp.Id, emp.name, emp.email, emp.age, emp.address, emp.city, emp.state, emp.zip, department = dept.Name };
                return Json(employeeList.ToList(), JsonRequestBehavior.AllowGet);
            }
        }

        public JsonResult getLatestId()
        {
            using (SampleDBEntities dataContext = new SampleDBEntities())
            {
                int id = 1;
                if (dataContext.Employees.Count() > 0)
                    id = dataContext.Employees.ToList().Last().Id;
                return Json(id, JsonRequestBehavior.AllowGet); ;
            }
            
        }
        public JsonResult getEmployeeByNo(string EmpNo)
        {
            using (SampleDBEntities dataContext = new SampleDBEntities())
            {
                int no = Convert.ToInt32(EmpNo);
                var employeeList = dataContext.Employees.Find(no);
                return Json(employeeList, JsonRequestBehavior.AllowGet);
            }
        }
        public string UpdateEmployee(Employee Emp)
        {
            if (Emp != null)
            {
                using (SampleDBEntities dataContext = new SampleDBEntities())
                {
                    int no = Convert.ToInt32(Emp.Id);
                    var employeeList = dataContext.Employees.Where(x => x.Id == no).FirstOrDefault();
                    employeeList.name = Emp.name;
                    employeeList.age = Emp.age;
                    employeeList.email = Emp.email;
                    dataContext.SaveChanges();
                    return "Employee Updated";
                }
            }
            else
            {
                return "Invalid Employee";
            }
        }
        public string AddEmployee(Employee Emp)
        {
            if (Emp != null)
            {
                using (SampleDBEntities dataContext = new SampleDBEntities())
                {
                    dataContext.Employees.Add(Emp);
                    dataContext.SaveChanges();
                    return "Employee Added";
                }
            }
            else
            {
                return "Invalid Employee";
            }
        }

        public string DeleteEmployee(Employee Emp)
        {
            if (Emp != null)
            {
                using (SampleDBEntities dataContext = new SampleDBEntities())
                {
                    int no = Convert.ToInt32(Emp.Id);
                    var employeeList = dataContext.Employees.Where(x => x.Id == no).FirstOrDefault();
                    dataContext.Employees.Remove(employeeList);
                    dataContext.SaveChanges();
                    return "Employee Deleted";
                }
            }
            else
            {
                return "Invalid Employee";
            }
        }
    }
}