using Infokilo.DataLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace InfoKilo.WebApp.Miembros
{
   
   public class Encuestas
    {
       public Encuestas(AplicacionInstrumento item, string cases)
       {
               this.aplicacionId = item.aplicacionId;
               this.candidatoCuidador = item.candidatoCuidador;
               this.candidatoMadreId = item.candidatoMadreId;
               this.instrumentoId = item.instrumentoId;
               this.fechaInicio = item.fechaInicio;
               this.fechaModificacionString = (item.fechaModificacion != null && item.fechaModificacion.ToString() != "01/01/0001") ? Convert.ToDateTime(item.fechaModificacion).ToString("dd/MM/yyyy") : "--/--/--";
         
       }
        public System.Guid aplicacionId { get; set; }
        public Nullable<System.Guid> candidatoNinioId { get; set; }
        public Nullable<System.Guid> candidatoMadreId { get; set; }
        public Nullable<System.Guid> candidatoCuidador { get; set; }
        public Nullable<int> instrumentoId { get; set; }
        public string data { get; set; }
        public Nullable<System.DateTime> fechaInicio { get; set; }
        public Nullable<System.DateTime> fechaModificacion { get; set; }
        public string fechaModificacionString { get; set; }

        public Nullable<int> status { get; set; }
    }
}
