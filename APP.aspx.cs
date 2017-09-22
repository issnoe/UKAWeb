using Infokilo.DataLayer;
using InfoKilo.WebApp.Miembros.WS.Controllers;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Transactions;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace InfoKilo.WebApp.Miembros.WS
{
    public partial class APP : Page
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
                var listaEstados = handleRepository.Filter(n => n.Borrado == false).OrderBy(m => m.NombreEstado);
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
                var lista = handleRepository.Filter(n => n.IdComunidad.ToString() == id).OrderBy(m => m.NombreGrupo);
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
        public static string setReactivo(string aplicacionIdCurrentEncuesta, string aplicacionReactivoInstrumento, string dataJson, string respuesta)
        {
            Repository<ReactivosRespuestas> handle = new Repository<ReactivosRespuestas>();

            try
            {
                using (TransactionScope tran = new TransactionScope())
                {
                    ReactivosRespuestas data = handle.Retrieve(c => c.aplicacionReactivoInstrumento.ToString() == aplicacionReactivoInstrumento);
                    if (data != null)
                    {


                        data.dataJson = dataJson;
                        data.respuesta = respuesta;
                        handle.Update(data);
                            
                    }


                    tran.Complete();
                }
            }
            catch (Exception)
            {

                return "400";
            }


            return getLastReactivo(aplicacionIdCurrentEncuesta).ToString();
        }
         [System.Web.Services.WebMethod]
        public static SimpleAplicacionInstrumento getAplicacionInstrumento(string aplicacionId)
        {
          /*  List<string> relations = new List<string>
            {
                "Instrumentos",
                "Modulos"
            };
             */
            Repository<AplicacionInstrumento> handle = new Repository<AplicacionInstrumento>();
            var reactivo = handle.Retrieve(c => c.aplicacionId.ToString() == aplicacionId);
            return new SimpleAplicacionInstrumento(reactivo);
        }
        [System.Web.Services.WebMethod]
        public static SimpleReactivo getReactivo(string aplicacionReactivoInstrumento)
        {
            List<string> relations = new List<string>
            {
                "Instrumentos",
                "Modulos"
            };

            Repository<ReactivosRespuestas> handle = new Repository<ReactivosRespuestas>();
            var reactivo = handle.Retrieve(c => c.aplicacionReactivoInstrumento.ToString() == aplicacionReactivoInstrumento, relations.Count, relations);
            return new SimpleReactivo(reactivo);
        }
        [System.Web.Services.WebMethod]
        public static IQueryable<SimpleReactivo> getTreeReactivos(string aplicacionIdCurrentEncuesta)
        {
            List<string> relations = new List<string>
            {
                "Instrumentos",
                "Modulos"
            };
            
            Repository<ReactivosRespuestas> handle = new Repository<ReactivosRespuestas>();
            var listaReactivos = handle.Filter(c => c.aplicacionInstrumentoId.ToString() == aplicacionIdCurrentEncuesta, relations.Count, relations).OrderBy(n=>n.id_modulo).ThenBy(o=>o.id).ToList();
            List<SimpleReactivo> tree = new List<SimpleReactivo>();

            foreach (var item in listaReactivos)
            {
                tree.Add(new SimpleReactivo(item));
            }
            return tree.AsQueryable();
        }

        
        public static string getLastReactivo(string aplicacionIdCurrentEncuesta)
        {
            try
            {
                List<string> relations = new List<string>
            {
                "Instrumentos",
                "Modulos"
            };

                Repository<ReactivosRespuestas> handle = new Repository<ReactivosRespuestas>();
                var listaReactivos = handle.Filter(c => c.aplicacionInstrumentoId.ToString() == aplicacionIdCurrentEncuesta && c.respuesta == "---", relations.Count, relations).OrderBy(n => n.id_modulo).ThenBy(o => o.id).ToList();
                
                return (listaReactivos.Count==0)? "END":listaReactivos.First().aplicacionReactivoInstrumento.ToString();
            }
            catch (Exception ez)
            {
                var es = ez.Message;
                
                throw;
            }
          
        }

      

        [System.Web.Services.WebMethod]
        public static List<string> handleGenerateAplicacionInstrumento(string aplicacionIdCurrentEncuesta, string candidato, int instrumentoId, string fechaInicio)
        {
            string response = aplicacionIdCurrentEncuesta;
            Repository<AplicacionInstrumento> handle = new Repository<AplicacionInstrumento>();
            if (aplicacionIdCurrentEncuesta == "na")
            {
                Repository<Instrumentos> handleInstrumento = new Repository<Instrumentos>();
                Repository<Reactivos> handlReactivos = new Repository<Reactivos>();
                Repository<ReactivosRespuestas> handlReactivosRespuestas = new Repository<ReactivosRespuestas>();
                Instrumentos instrumento = handleInstrumento.Retrieve(u => u.id == instrumentoId);
                try
                {
                    using (TransactionScope tran = new TransactionScope())
                    {
                        ///Generar
                        AplicacionInstrumento nueva = new AplicacionInstrumento();
                        nueva.aplicacionId = Guid.NewGuid();
                        nueva.fechaInicio = Convert.ToDateTime(fechaInicio);
                        nueva.instrumentoId = instrumentoId;
                        nueva.status = 0;
                        nueva.fechaModificacion = DateTime.Now;
                        switch (instrumento.aplicado)
                        {
                            case 1:
                                nueva.candidatoNinioId = new Guid(candidato);
                                break;
                            case 2:
                                nueva.candidatoNinioId = new Guid(candidato);
                                break;
                            case 4:
                                nueva.candidatoMadreId = new Guid(candidato);
                                break;
                            case 3:
                                nueva.candidatoMadreId = new Guid(candidato);
                                nueva.candidatoCuidador = new Guid(candidato);
                                nueva.candidatoNinioId = new Guid(candidato);

                                break;

                        }

                        AplicacionInstrumento respAplication = handle.Create(nueva);

                        try
                        {
                            //llamar proceso de copia de intrumento 
                            var listaReactivos = handlReactivos.Filter(a => a.id_instrumento == instrumentoId);
                            foreach (var item in listaReactivos)
                            {
                                try
                                {
                                    handlReactivosRespuestas.Create(new ReactivosRespuestas(respAplication, item));
                                }
                                catch (Exception ex)
                                {

                                    var exs = ex.Message;
                                }
                            }
                            // Actualizar el instrumento con un estado diferente para entender que se ha modificado y en caso de alguna modificacion la version del cambio
                        }
                        catch (Exception)
                        {
                            return new List<string> { "error", "error" };
                        }
                        tran.Complete();
                        response = Convert.ToString(respAplication.aplicacionId);

                    }
                }
                catch (Exception)
                {
                    return new List<string> { "error", "error" };
                }
                return new List<string> { response, getLastReactivo(response) };
            }
            return new List<string> { aplicacionIdCurrentEncuesta, getLastReactivo(aplicacionIdCurrentEncuesta) };
            
        }


        [System.Web.Services.WebMethod]
        public static void saveAplicacionEncuestaEncuestador(string domicilio, string fechaTermina, string fechaInicio, string aplicacionId)
        {
            try
            {
                Repository<AplicacionInstrumento> handle = new Repository<AplicacionInstrumento>();
                using (TransactionScope tran = new TransactionScope())
                {
                    AplicacionInstrumento aplicada = handle.Retrieve(u => u.aplicacionId.ToString() == aplicacionId);
                    aplicada.fechaInicio = Convert.ToDateTime(fechaInicio);
                    aplicada.fechaTermina = Convert.ToDateTime(fechaTermina);
                    aplicada.domicilio = domicilio;
                    handle.Update(aplicada);

                    tran.Complete();
                }
            }
            catch (Exception)
            {
                
            }
        }

        [System.Web.Services.WebMethod]
        public static AplicacionEncuestaEncuestador getAplicacionEncuestaEncuestadorById(string aplicacionId)
            {
            List<string> listaTablas = new List<string>
            {
                "NinioEnPrograma",
                "Cuidador",
                "ExpedienteMadre",
            };
            Repository<AplicacionInstrumento> handle = new Repository<AplicacionInstrumento>();
            AplicacionInstrumento aplicada = handle.Retrieve(u => u.aplicacionId.ToString() == aplicacionId, listaTablas.Count, listaTablas);

            return new AplicacionEncuestaEncuestador(aplicada);
        }

        [System.Web.Services.WebMethod]
        public static IQueryable<dynamic> getCandidatos(int instrumentoId, string idGrupo, string textoBusqueda,string fechaAplicacion, bool isActivo,  string orden)
        {
            Repository<NinioEnPrograma> handle = new Repository<NinioEnPrograma>();
            Repository<ExpedienteMadre> handleMadre = new Repository<ExpedienteMadre>();
            Repository<Cuidador> handleCuidador = new Repository<Cuidador>();
            Repository<Instrumentos> handleInstrumento = new Repository<Instrumentos>();
            Instrumentos instrumento = handleInstrumento.Retrieve(u => u.id == instrumentoId);
           List<string> listaTablas = new List<string>
            {
                "Familias.Cuidador",
                "Familias.ExpedienteMadre",
                "AplicacionInstrumento"
            };
            DateTime nows = DateTime.Now;

            switch(instrumento.aplicado)   {
                case 1:
                    // "Niños/as menores de cinco años ";
                    var listaIterResponse = handle.Filter(n => n.Familias.IdGrupo.ToString() == idGrupo && n.Borrado == !isActivo && (
                                      (
                                      n.Nombre.Contains(textoBusqueda) ||
                                      n.ApMaterno.Contains(textoBusqueda) ||
                                      n.ApPaterno.Contains(textoBusqueda) ||
                                      n.Familias.NumFamilia.ToString() == textoBusqueda
                                      )
                        ), listaTablas.Count, listaTablas).OrderBy(o => orden).ToList();
                    List<CandidatosNinio> listRender = new List<CandidatosNinio>();
                    foreach (var item in listaIterResponse)
                    {
                        try
                        {
                            if (Convert.ToInt32(Calcular.EdadEnMeses(nows, item.FechaNacimiento)) <= 60) {
                                CandidatosNinio added = new CandidatosNinio(item.IdNinio, item.Nombre, item.ApPaterno, item.ApMaterno, item.Genero, item.CURP, item.NumeroSS, item.FechaNacimiento, item.NumeroNinioEnFamilia, item.UrlFotoNinio, item.ClaveNinio, item.domicilio, item.Egresado);
                                //Status 1 terminada 
                                added.GetEncuestasTerminadas(item.AplicacionInstrumento.Where(z => z.instrumentoId == instrumentoId && z.status == 1).ToList());
                                added.GetCurrentEncuesta(item.AplicacionInstrumento.Where(z => z.instrumentoId == instrumentoId && z.status == 0).ToList(), instrumento.nombre);
                                added.GetCuidador(item.Familias.Cuidador);
                                added.GetFamilia(item.Familias.NumFamilia);
                                listRender.Add(added);
                            }
                        }
                        catch (Exception)
                        {
                         //   throw;
                        }
                       
                    }
                    return listRender.AsQueryable();
                   break;
                case 2:
                    // "Niños/as y adolecentes (5 a 17 )";
                   var listaIterResponse2 = handle.Filter(n => n.Familias.IdGrupo.ToString() == idGrupo && n.Borrado == !isActivo && (
                                      (
                                      n.Nombre.Contains(textoBusqueda) ||
                                      n.ApMaterno.Contains(textoBusqueda) ||
                                      n.ApPaterno.Contains(textoBusqueda) ||
                                      n.Familias.NumFamilia.ToString() == textoBusqueda
                                      )
                        )
                                      , listaTablas.Count, listaTablas).OrderBy(o => orden).ToList();
                    List<CandidatosNinio> listRender2 = new List<CandidatosNinio>();
                    foreach (var item in listaIterResponse2)
                    {
                        try
                        {

                            if (Convert.ToInt32(Calcular.EdadEnMeses(nows, item.FechaNacimiento)) > 60) {
                                CandidatosNinio added = new CandidatosNinio(item.IdNinio, item.Nombre, item.ApPaterno, item.ApMaterno, item.Genero, item.CURP, item.NumeroSS, item.FechaNacimiento, item.NumeroNinioEnFamilia, item.UrlFotoNinio, item.ClaveNinio, item.domicilio, item.Egresado);
                                //Status 1 terminada 
                                added.GetEncuestasTerminadas(item.AplicacionInstrumento.Where(z => z.instrumentoId == instrumentoId && z.status == 1).ToList());
                                added.GetCurrentEncuesta(item.AplicacionInstrumento.Where(z => z.instrumentoId == instrumentoId && z.status == 0).ToList(), instrumento.nombre);
                                added.GetCuidador(item.Familias.Cuidador);
                                added.GetFamilia(item.Familias.NumFamilia);
                                listRender2.Add(added);
                            
                            }
                           
                        }
                        catch (Exception)
                        {
                            
                            throw;
                        }
                       
                    }
                    return listRender2.AsQueryable();
                    break;
                     
                //
                case 3:
                  //  candidatos =  "Hogares";

                    break;

                //
                case 4:
                  //  candidatos =  "Mujeres";
                    break;
                default:
                    break;

            }
          
               
           
            var lista = new List<NinioEnPrograma>();
            if (textoBusqueda == "")
            {
                lista = handle.Filter(n => n.Familias.IdGrupo.ToString() == idGrupo && n.Borrado == isActivo, listaTablas.Count, listaTablas);
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
                lista = handle.Filter(n => n.Familias.IdGrupo.ToString() == idGrupo && n.Borrado == false, listaTablas.Count, listaTablas);
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