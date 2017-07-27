using Infokilo.DataLayer;
using InfoKilo.WebApp.Miembros.WS.Controllers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
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
        public static IQueryable<dynamic> getSomatometria(string idGrupo, string textoBusqueda, string orden, string fichaseguimiento)
        {
            Repository<NinioEnPrograma> handle = new Repository<NinioEnPrograma>();
            int contadorNinios = 0;
            List<string> listaTablas = new List<string>
            {
                "Familias.Cuidador",
                "Familias.ExpedienteMadre",
                "Somatometria"
            };
            var lista = new List<NinioEnPrograma>();

            string[] paramsFS = new string[3];

            switch (fichaseguimiento)
            {
                case ("NAR"):
                     paramsFS[0] = "MODERADO";
                     paramsFS[1] = "GRAVE";
                    break;
                default:
                    break;
            }


            if (textoBusqueda == "")
            {
                lista = handle.Filter(n => n.Familias.IdGrupo.ToString() == idGrupo && n.Borrado == false , listaTablas.Count, listaTablas);

               // var serializer = new JavaScriptSerializer();
               // string json = serializer.Serialize(lista);
            }
            else
            {
                string buscarPor = textoBusqueda;
                lista = handle.Filter(n => n.Familias.IdGrupo.ToString() == idGrupo && n.Borrado == false &&
                                     (n.Nombre.Contains(buscarPor) ||
                                      n.ApMaterno.Contains(buscarPor) ||
                                      n.ApPaterno.Contains(buscarPor) ||
                                      n.Familias.NumFamilia.ToString() == buscarPor),
                                      listaTablas.Count, listaTablas).ToList();
            }

            var listaNinio = new List<NinioEnPrograma>();
            listaNinio = lista.OrderBy(c => c.Familias.NumFamilia).ToList();
            switch (orden)
            {
                case "Nombre":
                    listaNinio = lista.OrderBy(c => c.Nombre).ToList();
                    break;
                case "Familia":
                    listaNinio = lista.OrderBy(c => c.Familias.NumFamilia).ToList();
                    break;
                case "NumeroNiño":
                    listaNinio = lista.OrderBy(c => c.NumeroNinioEnFamilia).ToList();
                    break;
                default:
                    listaNinio = lista.OrderBy(c => c.Familias.NumFamilia).ToList();
                    break;
            }
           
           // var i = items.Where().
            List<dynamic> listRequest = new List<dynamic>();
            
            foreach (var item in listaNinio)
	            {
                //Query para hitorial
                var listaSomaCandidato = item.Somatometria.Where(a => a.DiagnosticoPesoEdad =="MODERADO" || a.DiagnosticoPesoEdad=="GRAVE").OrderByDescending(z=>z.FechaDeCreacion);
                if (listaSomaCandidato != null)
                {
                    try
                    {
                        if (listaSomaCandidato.Count() > 0)
                        {
                            dymanicChild child = new dymanicChild();
                            child.id = item.IdNinio;
                            child.ninoNombreCompleto = item.Nombre + " " + item.ApMaterno + " " + item.ApPaterno;
                            child.cuidadorNombreCompleto = item.Familias.Cuidador.Nombre + " " + item.Familias.Cuidador.ApMaterno + " " + item.Familias.Cuidador.ApPaterno;
                            child.fechaNacimineto = (item.FechaNacimiento.ToString() != "") ? item.FechaNacimiento.ToString() : "--/--/--";
                            child.sexo = (item.Genero == true) ? "M" : "F";
                            child.clave = item.ClaveNinio;
                            child.numeroFamilia = Convert.ToInt32(item.NumeroNinioEnFamilia);
                            child.somatometriaCount = listaSomaCandidato.Count();
                            child.listaSomatometrias = new List<dymanicSomatometria>();

                            foreach (var soma in item.Somatometria.OrderByDescending(z => z.FechaDeCreacion))
                            {
                                try
                                {
                                    dymanicSomatometria somatometria = new dymanicSomatometria();
                                    somatometria.id = soma.IdSomatometria;
                                    somatometria.peso = Convert.ToDecimal(soma.Peso);
                                    somatometria.talla = Convert.ToDecimal(soma.Talla);
                                    somatometria.hb = Convert.ToDecimal(soma.HB);
                                    somatometria.date = soma.FechaDeCreacion.ToString("dd/MM/yyyy");
                                    somatometria.dxPE = soma.DiagnosticoPesoEdad;
                                    somatometria.dxTE = soma.DiagnosticoTallaEdad;
                                    somatometria.dxPT = soma.DiagnosticoPesoTalla;
                                    child.listaSomatometrias.Add(somatometria);

                                }
                                catch (Exception)
                                {


                                }
                            }
                            listRequest.Add(child);
                        }
                    }
                    catch (Exception)
                    {
                        
                        
                    }
                   
                }
	            }
                      

            return listRequest.AsQueryable();
        }

        public class dymanicChild
        {
            public string ninoNombreCompleto { get; set; }
            public string cuidadorNombreCompleto { get; set; }
            public int numeroFamilia { get; set; }
            public int clave { get; set; }
            public string fechaNacimineto { get; set; }
            public string sexo { get; set; }
            public Guid id { get; set; }
            public int somatometriaCount { get; set; }
            public List<dymanicSomatometria> listaSomatometrias { get; set; }
        }
        public class dymanicSomatometria
        {
            public Guid id { get; set; }
            public decimal talla { get; set; }
            public decimal peso { get; set; }
            public decimal hb { get; set; }
            public string date { get; set; }
            public string dxPE { get; set; }
            public string dxTE { get; set; }
            public string dxPT { get; set; }
        }


    }
}