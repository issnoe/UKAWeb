using Infokilo.DataLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace InfoKilo.WebApp.Miembros.WS
{
    public class SimpleAplicacionInstrumento
    {
      //  private Infokilo.DataLayer.AplicacionInstrumento reactivo;

        public SimpleAplicacionInstrumento(AplicacionInstrumento reactivo)
        {
            this.aplicacionId = reactivo.aplicacionId;
            this.fechaInicio = reactivo.fechaInicio;
            this.status = reactivo.status;
            
        }
        public System.Guid aplicacionId { get; set; }
        public Nullable<System.Guid> candidatoNinioId { get; set; }
        public Nullable<System.Guid> candidatoMadreId { get; set; }
        public Nullable<System.Guid> candidatoCuidador { get; set; }
        public Nullable<int> instrumentoId { get; set; }
        public Nullable<System.DateTime> fechaInicio { get; set; }
        public Nullable<System.DateTime> fechaModificacion { get; set; }
        public Nullable<int> status { get; set; }
    }
}
