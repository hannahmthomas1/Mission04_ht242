using Microsoft.AspNetCore.Mvc;
using Mission04_ht242.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04_ht242.Controllers
{
    public class IndController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult calculator ()
        {
            return View();
        }

        [HttpPost]
        public IActionResult calculator (calculatorModel model)
        {
            return View();
        }
    }
}
