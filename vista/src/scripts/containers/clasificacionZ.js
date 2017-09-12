
        /// <summary>
        /// Metodo que onbtiene el estado nutricional del niño en base a su indice z y su peso
        /// </summary>
        /// <returns>segresa una cadena de caracter con la descripcion de su estado nutricional,
        /// tambien puede ser que no aplique para el niño si es que no estaba entre los rangos de edad
        /// o si su indice z tampoco esta dentro de los rangos establecidos (ente 5 y (menos) 5)</returns>
        function  estadoNutricionPeso(z)
        {
            
            if (z > -5 && z <= -3)
                return "GRAVE";
            else if (z > -3 && z <= -2)
                return "MODERADO";
            else if (z > -2 && z <= -1)
                return "LEVE";
            else if (z > -1 && z <= 1)
                return "NORMAL";
            else if (z > 1 && z <= 2)
                return "SOBREPESO";
            else if (z > 2 && z < 5)
                return "OBESIDAD";
            else
                return "No VALIDO";

        }

        function  estadoNutricionTalla(z)
        {
           
            if (z > -5 && z <= -3)
                return "GRAVE";
            else if (z > -3 && z <= -2)
                return "MODERADO";
            else if (z > -2 && z <= -1)
                return "LEVE";
            else if (z > -1 && z < 5)
                return "NORMAL";
            else
                return "No VALIDO";

        }