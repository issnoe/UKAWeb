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
        public static dymanicUser getUser(string id)
        {
            dymanicUser user = new dymanicUser();
            Repository<Usuarios> getUser = new Repository<Usuarios>();
            var usuario = getUser.Retrieve(u => u.IdUsuario.ToString() == id, 1, new List<string> { "Roles" });
            user.id = usuario.IdUsuario;
            user.name = usuario.ApMaterno + " " + usuario.ApPaterno + " " + usuario.Nombre;
            user.email = usuario.Email;
            user.rolname = usuario.Roles.Nombre;
            user.username = usuario.NombreUsuario;

            return user;
        }
        [System.Web.Services.WebMethod]
        public static List<Estados> getEstados(string id)
        {
            try
            {
                Repository<Estados> handleRepository = new Repository<Estados>();
                var listaEstados = handleRepository.Filter(n => n.Borrado == false).OrderBy(m =>m.NombreEstado);
                return listaEstados.ToList();
            }
            catch (Exception e) { return null; }
            
        }
        [System.Web.Services.WebMethod]
        public static List<Municipios> getMunicipios(string id)
        {
            try
            {
                Repository<Municipios> handleRepository = new Repository<Municipios>();
                var lista = handleRepository.Filter(n => n.Borrado == false && n.IdEstado.ToString() == id).OrderBy(m => m.NombreMunicipio);
                return lista.ToList();
            }
            catch (Exception e) { return null; }

        }

        [System.Web.Services.WebMethod]
        public static List<Comunidades> getComunidades(string id)
        {
            try
            {
                Repository<Comunidades> handleRepository = new Repository<Comunidades>();
                var lista = handleRepository.Filter(n => n.Borrado == false && n.Municipios_IdMunicipios.ToString() == id).OrderBy(m => m.NombreComunidad);
                return lista.ToList();
            }
            catch (Exception e) { return null; }

        }
        [System.Web.Services.WebMethod]
        public static List<GruposComunidad> getGrupos(string id)
        {
            try
            {
                Repository<GruposComunidad> handleRepository = new Repository<GruposComunidad>();
                var lista = handleRepository.Filter(n => n.IdComunidad.ToString() == id).OrderBy(m =>m.NombreGrupo);
                return lista.ToList();
            }
            catch (Exception e) { return null; }

        }



        [System.Web.Services.WebMethod]
        public static dymanicLocation getlocation(string idEstado, string idMunicipio, string idComunidad, string idGrupo)
        {
            try
            {
                Repository<Estados> obtenerEstado = new Repository<Estados>();
                Repository<Municipios> obtenerMunicipio = new Repository<Municipios>();
                Repository<Comunidades> obtenerComunidad = new Repository<Comunidades>();
                Repository<GruposComunidad> obtenerGrupo = new Repository<GruposComunidad>();

                Estados estadoActual = new Estados();
                Municipios municipioActual = new Municipios();
                Comunidades comunidadActual = new Comunidades();
                GruposComunidad GrupoActual = new GruposComunidad();
                estadoActual = obtenerEstado.Retrieve(es => es.IdEstado.ToString() == idEstado);
                municipioActual = obtenerMunicipio.Retrieve(mu => mu.IdMunicipios.ToString() == idMunicipio);
                comunidadActual = obtenerComunidad.Retrieve(co => co.IdComunidad.ToString() == idComunidad);
                GrupoActual = obtenerGrupo.Retrieve(gu => gu.IdGrupo.ToString() == idGrupo);

                dymanicLocation location = new dymanicLocation();
                location.estado = estadoActual.NombreEstado;
                location.municipio = municipioActual.NombreMunicipio;
                location.comunidad = comunidadActual.NombreComunidad;
                location.grupo = GrupoActual.NombreGrupo;

                return location;
            }
            catch (Exception)
            {

                dymanicLocation location = new dymanicLocation();
                return location;
            }
           
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
            if (textoBusqueda == "")
            {
                lista = handle.Filter(n => n.Familias.IdGrupo.ToString() == idGrupo && n.Borrado == false , listaTablas.Count, listaTablas);
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
            List<dynamic> listRequest = new List<dynamic>();
            foreach (var item in listaNinio)
	            {
                    try
                    {
                        if (item.Somatometria.Count() > 0)
                        {
                            dymanicChild child = new dymanicChild();
                            child.id = item.IdNinio;
                            child.ninoNombreCompleto = item.Nombre + " " + item.ApMaterno + " " + item.ApPaterno;
                            child.cuidadorNombreCompleto = item.Familias.Cuidador.Nombre + " " + item.Familias.Cuidador.ApMaterno + " " + item.Familias.Cuidador.ApPaterno;
                            child.fechaNacimineto = (item.FechaNacimiento.ToString() != "") ? (Convert.ToDateTime(item.FechaNacimiento)).ToString("dd/MM/yyyy") : "--/--/--";
                            child.sexo = (item.Genero == true) ? "M" : "F";
                            child.clave = item.ClaveNinio;
                            child.edadMeses = Calcular.EdadEnMeses(DateTime.Now, item.FechaNacimiento);
                            child.numeroFamilia = Convert.ToInt32(item.Familias.NumFamilia);
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
	            
                      

            return listRequest.AsQueryable();
        }
        public class dymanicUser
        {
            public string name { get; set; }
            public string email { get; set; }
            public Guid id { get; set; }
            public string rolname { get; set; }
            public string username { get; set; }
        }
        public class dymanicLocation
        {
            public string cedit { get; set; }
            public string estado { get; set; }
            public string municipio { get; set; }
            public string comunidad { get; set; }
            public string grupo { get; set; }
        }

        public class dymanicChild
        {
            public string ninoNombreCompleto { get; set; }
            public string cuidadorNombreCompleto { get; set; }
            public int numeroFamilia { get; set; }
            public int clave { get; set; }
            public string edadMeses { get; set; }
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