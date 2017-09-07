using Infokilo.DataLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace InfoKilo.WebApp.Miembros
{
    public class SimpleReactivo
    {
        //private ReactivosRespuestas item;

        public SimpleReactivo(ReactivosRespuestas item)
        {
            // TODO: Complete member initialization
            this.aplicacionReactivoInstrumento = item.aplicacionReactivoInstrumento;
            this.respuesta = item.respuesta;
            this.id_instrumento = item.id_instrumento;
            this.id_modulo = item.id_modulo;
            this.nombreInstrumento = item.Instrumentos.nombre;
            this.nombreModulos = item.Modulos.modulo;
            this.dataJson = item.dataJson;
            this.prefijo = item.Modulos.prefijo;
            this.nota = item.nota;
        }
        public System.Guid aplicacionReactivoInstrumento { get; set; }
       
        public string respuesta { get; set; }
      public string dataJson { get; set; }
        public Nullable<int> id_instrumento { get; set; }
        public Nullable<int> id_modulo { get; set; }
        public string nombreInstrumento { get; set; }
        public string nombreModulos { get; set; }
        public string prefijo { get; set; }
        public string nota { get; set; }
    }
}
