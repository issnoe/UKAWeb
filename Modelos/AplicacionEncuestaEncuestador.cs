using Infokilo.DataLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace InfoKilo.WebApp.Miembros
{
    public class AplicacionEncuestaEncuestador
    {
        public string aplicacionId { get; set; }
        public string candidatoNinioId { get; set; }
        public string candidatoMadreId { get; set; }
        public string candidatoCuidador { get; set; }
        public string fechaInicio { get; set; }
        public string fechaModificacion { get; set; }
        public Nullable<int> status { get; set; }
        public string fechaTermina { get; set; }
        public string domicilio { get; set; }
        public string Ubicacion { get; set; }
        public string NombreEncuestado { get; set; }
        public string Clave { get; set; }

        public AplicacionEncuestaEncuestador(AplicacionInstrumento aplicada)
        {
            if (aplicada.candidatoNinioId != null) {
                this.NombreEncuestado = aplicada.NinioEnPrograma.Nombre + " " + aplicada.NinioEnPrograma.ApMaterno + " " + aplicada.NinioEnPrograma.ApMaterno;
                this.candidatoNinioId = aplicada.NinioEnPrograma.IdNinio.ToString();
                this.Clave = aplicada.NinioEnPrograma.ClaveNinio.ToString();
            }
            if(aplicada.candidatoCuidador!=null){
                this.NombreEncuestado = aplicada.Cuidador.Nombre + " " + aplicada.Cuidador.ApPaterno + " " + aplicada.Cuidador.ApMaterno;
                this.candidatoCuidador = aplicada.Cuidador.IdCuidador.ToString();
                this.Clave = aplicada.Cuidador.ClaveCuidador.ToString();
            }
            if (aplicada.candidatoMadreId != null)
            {
                this.NombreEncuestado = aplicada.ExpedienteMadre.Nombre + " " + aplicada.ExpedienteMadre.ApPaterno + " " + aplicada.ExpedienteMadre.ApMaterno;
                this.candidatoMadreId = aplicada.ExpedienteMadre.IdExpedienteMadre.ToString();
                this.Clave = "";
            }
            this.aplicacionId = aplicada.aplicacionId.ToString();
            this.fechaInicio = (aplicada.fechaInicio != null) ? Convert.ToDateTime(aplicada.fechaInicio).ToString("yyyy/MM/dd") : "";
            this.fechaModificacion = (aplicada.fechaModificacion != null) ? Convert.ToDateTime(aplicada.fechaModificacion).ToString("yyyy/MM/dd") : "";
            this.fechaTermina = (aplicada.fechaTermina != null) ? Convert.ToDateTime(aplicada.fechaTermina).ToString("yyyy/MM/dd") : "";
          	        
            this.domicilio = aplicada.domicilio;
		
	      
           


        }
    }
}
