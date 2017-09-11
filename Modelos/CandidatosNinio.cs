using Infokilo.DataLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace InfoKilo.WebApp.Miembros

{
    public class CandidatosNinio
    {
        public System.Guid IdNinio { get; set; }
        public string Nombre { get; set; }
        public string ApPaterno { get; set; }
        public string ApMaterno { get; set; }
        public string NinioNombreCompleto { get; set; }
        public string Genero { get; set; }
        public string CURP { get; set; }
        public string NumeroSS { get; set; }
        public Nullable<System.DateTime> FechaNacimiento { get; set; }
        public Nullable<int> NumeroNinioEnFamilia { get; set; }
        public string UrlFotoNinio { get; set; }
        public int ClaveNinio { get; set; }
        public string domicilio { get; set; }
        public Nullable<bool> Egresado { get; set; }

        public string CuidadorNombreCompleto { get; set; }
        public string FechaNacimientoString { get; set; }

        public int NoFamilia { get; set; }
        public string edadEnMeses { get; set; }

        public string NombreInstrumento { get; set; }
        public string StatusUltimoInstrumento { get; set; }
        public string FechaUltimoInstrumento { get; set; }
        public string aplicacionIdCurrentEncuesta { get; set; }


       


        public List<Encuestas> encuestas;
        public Cuidador cuidador = new Cuidador();

    
        public CandidatosNinio(Guid guid, string p1, string p2, string p3, bool? nullable1, string p4, string p5, DateTime? nullable2, int? nullable3, string p6, int p7, string p8, bool? nullable4)
        {
            this.IdNinio = guid;
            this.Nombre = p1;
            this.ApPaterno = p2;
            this.ApMaterno = p3;
            this.NinioNombreCompleto = p1 + " " + p2 + " " + p3;
            this.Genero = (nullable1!=null && nullable1 ==true)?"M":"F";
            this.CURP = p4;
            this.NumeroSS = p5;
            this.FechaNacimiento = nullable2;
            this.FechaNacimientoString = (nullable2 != null && nullable2.ToString() != "01/01/0001") ? Convert.ToDateTime(nullable2).ToString("dd/MM/yyyy") : "--/--/--";
            this.NumeroNinioEnFamilia = nullable3;
            this.UrlFotoNinio = p6;
            this.ClaveNinio = p7;
            this.domicilio = p8;
            this.Egresado = nullable4;
            this.encuestas = new List<Encuestas>();
            this.edadEnMeses = Calcular.EdadEnMeses(DateTime.Now, this.FechaNacimiento);

        }



        public void GetEncuestasTerminadas(ICollection<AplicacionInstrumento> collection)
        {
            foreach (var item in collection)
            {
                this.encuestas.Add(new Encuestas(item, "list"));
            }
        }


        public  void GetCuidador(Cuidador cuidador)
        {
            this.CuidadorNombreCompleto = cuidador.Nombre + " " + cuidador.ApMaterno + " " + cuidador.ApMaterno;
            
            
        }

        public void GetFamilia(int p)
        {
            this.NoFamilia = p;
        }

        public void GetCurrentEncuesta(ICollection<AplicacionInstrumento> collection, string p)
        {
            //Detalles 
            if (collection.Count > 0)
            {
                int len = collection.Count - 1;
                var aplicacion = collection.Last();
                this.aplicacionIdCurrentEncuesta = Convert.ToString(aplicacion.aplicacionId);
                this.StatusUltimoInstrumento = (aplicacion.status == 1) ? "Terminada" : "No Terminada";
                this.FechaUltimoInstrumento = Convert.ToDateTime(aplicacion.fechaModificacion).ToString("dd/MM/yyyy");

            }
            else
            {
                this.StatusUltimoInstrumento = "No se ha aplicado";
                this.FechaUltimoInstrumento = "--/--/--";
                this.aplicacionIdCurrentEncuesta = "na";
            }
            this.NombreInstrumento = p;
        }
    }
}
