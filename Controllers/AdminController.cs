using Microsoft.AspNetCore.Mvc;
using Schmanagement.Models;

namespace Schmanagement.Controllers
{
    public class AdminController : Controller
    {
        private readonly ProjectDbContext context;

        public AdminController(ProjectDbContext context)
        {
            this.context = context;
        }


        //SIGNUP
        //GET METHOD
        public IActionResult SignUp()
        {
            return View();

        }


        //POST
        [HttpPost]
          public IActionResult SignUp(Admin Admins)
        {
            if (ModelState.IsValid) {
            
             context.admins.Add(Admins);
                context.SaveChanges();
                return RedirectToAction ("Login");
            
            }
            return View();

        }


            public IActionResult Index()
            {
                return View();
            }


            //LOGIN
            //GET METHOD
            public IActionResult Login()
            {
                ViewData["HideNavbar"] = true;  // Hide navbar on login page
                return View();
            }
            [HttpPost]

            //POST METHOD
            public IActionResult Login(Admin Admins)
            {
                var myuser = context.admins.Where(x => x.Email == Admins.Email && x.Password == Admins.Password).FirstOrDefault();
                if (myuser != null)
                {
                    HttpContext.Session.SetString("userSession", Admins.Email);
                    return RedirectToAction("DashBoard");


                }
                else
                {
                    ViewBag.Message = "Login failed";
                }
                return View();
            }

        //DASHBOARD
        public IActionResult DashBoard()
        {
            if (HttpContext.Session.GetString("userSession") != null)
            {
                ViewBag.MySession = HttpContext.Session.GetString("userSession");
            }
            else
            {
                return RedirectToAction("Login");
            }
            return View();
        }




    }



    //Logout
    //public IActionResult Logout()
    //{
    //    if (HttpContext.Session.GetString("userSession") != null)
    //    {

    //        HttpContext.Session.Remove("userSession");
    //        return RedirectToAction("Login");


    //    }
    //    return View();
    //}
}