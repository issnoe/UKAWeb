using Infokilo.DataLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace InfoKilo.WebApp.Miembros.WS.Controllers
{
    public class ControllerSomatometria
    {
        public  List<ControllerSomatometria> getAll()
        {
            Repository<ControllerSomatometria> handle = new Repository<ControllerSomatometria>();
            handle.GetAll();
            return handle.GetAll().ToList();



        }
    }
}