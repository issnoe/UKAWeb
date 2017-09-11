using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace InfoKilo.WebApp.Miembros.WS
{
    class Product
    {
        public string Name { get; set; }

        public DateTime Expiry { get; set; }

        public string[] Sizes { get; set; }
    }
}
