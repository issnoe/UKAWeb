//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Infokilo.DataLayer
{
    using System;
    using System.Collections.Generic;
    
    public partial class ReactivosRespuestas
    {
       // private DataLayer.AplicacionInstrumento respAplication;
       // private Reactivos item;


        public ReactivosRespuestas()
        {



            //this.AplicacionInstrumento = new AplicacionInstrumento();
        }

        public ReactivosRespuestas(AplicacionInstrumento nueva, Reactivos item)
        {

            this.aplicacionReactivoInstrumento = Guid.NewGuid();
            this.aplicacionInstrumentoId = nueva.aplicacionId;
            this.id = item.id;
            this.id_instrumento = item.id_instrumento;
            this.id_modulo = item.id_modulo;
            this.dataJson = item.dataJson;
            this.estado = item.estado;
            this.orden = item.orden;
            this.tipopregunta = item.tipopregunta;
            this.estilo = item.estilo;
            this.nota = item.nota;


        }
        public System.Guid aplicacionReactivoInstrumento { get; set; }
        public System.Guid aplicacionInstrumentoId { get; set; }
        public Nullable<int> id { get; set; }
        public Nullable<int> id_instrumento { get; set; }
        public Nullable<int> id_modulo { get; set; }
        public string dataJson { get; set; }
        public Nullable<int> estado { get; set; }
        public Nullable<int> orden { get; set; }
        public Nullable<int> tipopregunta { get; set; }
        public string estilo { get; set; }
        public string nota { get; set; }
        public string respuesta { get; set; }
    
        public virtual AplicacionInstrumento AplicacionInstrumento { get; set; }
    }
}
