using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace InfoKilo.WebApp.Miembros
{
   
   public class Encuestas
    {
       private ICollection<Infokilo.DataLayer.AplicacionInstrumento> collection;
       private Infokilo.DataLayer.AplicacionInstrumento item;

       

       public Encuestas(Infokilo.DataLayer.AplicacionInstrumento item, string cases)
       {
       switch(cases){
           case "":
                this.aplicacionId = item.aplicacionId;
               this.candidatoCuidador = item.candidatoCuidador;
               this.candidatoMadreId = item.candidatoMadreId;
               this.instrumentoId = item.instrumentoId;
               this.fechaInicio = this.fechaInicio;
               this.data = item.data;
               this.fechaModificacion = this.fechaModificacion;
               this.status = item.status;
               break;
           case "list":
               this.aplicacionId = item.aplicacionId;
               this.candidatoCuidador = item.candidatoCuidador;
               this.candidatoMadreId = item.candidatoMadreId;
               this.instrumentoId = item.instrumentoId;
               this.fechaInicio = this.fechaInicio;
               //this.data = item.data;
               this.fechaModificacion = this.fechaModificacion;
               this.status = item.status;
               break;
           default:
               break;
       }
          

       }
        public System.Guid aplicacionId { get; set; }
        public Nullable<System.Guid> candidatoNinioId { get; set; }
        public Nullable<System.Guid> candidatoMadreId { get; set; }
        public Nullable<System.Guid> candidatoCuidador { get; set; }
        public Nullable<int> instrumentoId { get; set; }
        public string data { get; set; }
        public Nullable<System.DateTime> fechaInicio { get; set; }
        public Nullable<System.DateTime> fechaModificacion { get; set; }
        public Nullable<int> status { get; set; }
    }
}
