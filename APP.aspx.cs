using Infokilo.DataLayer;
using InfoKilo.WebApp.Miembros.WS.Controllers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace InfoKilo.WebApp.Miembros.WS
{
    public partial class APP : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }
        [System.Web.Services.WebMethod]
        public static List<Somatometria> getSomatometria()
        {
            Repository<Somatometria> handle = new Repository<Somatometria>();
            handle.GetAll();
            return handle.GetAll().ToList();
        }
    }
}