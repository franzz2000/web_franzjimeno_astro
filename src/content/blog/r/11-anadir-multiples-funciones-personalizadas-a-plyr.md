---
title: Añadir múltiples funciones personalizadas a plyr
date: "2013-07-12"
tags: ["programación", "r"]
draft: false
summary: plyr es un paquete muy interesante que hay para R.
---

plyr es un paquete muy interesante que hay para R. Este está pensado para una tarea que se realiza en muchas ocasiones y lo hace muy bien.
El resumen sería el siguiente.
Si tenemos un conjunto de datos y queremos calcular algo para unos determinados subgrupos, se podrá hacer perfectamente con plyr.

Por ejemplo, si tenemos un dataframe y queremos que nos devuelva un dataframe utilizaremos la función ddplyr. La primera d del nombre de la función indica el "input", la entrada, que sería un data.frame, la segunda d indica el "output" o salida, que sería también un data.frame.
Los parámetros que hay que pasar a la función son los siguientes:
El primer parámetro es el conjunto de datos que utilizará la función, en este caso ha de ser un data.frame.
El segundo parámetro será la o las variables por las que se quiere agrupar.
El tercer parámetro son la o las funciones que se quiera aplicar.
Pongo un ejemplo para que sea más claro:

```R
#Activar la librería de plyr en R
#Nota: primeramente hay que instalar el paquete, esto solo hay que hacerlo una vez y lo hacemos con la siguiente función
#install.packages("plyr")
library(plyr)
#utilizamos un dataframe que está incluido en el paquete plyr como ejemplo
#Son datos estadísticos sobre jugadores de baseball
data(baseball)
#queremos encontrar el mínimo y máximo de partidos que ha jugado un jugador por año
ddply(baseball, .(id), function(x) c(años=nrow(x), minimo=min(x$g), maximo=max(x$g)))
```

La x de function(x) es el data.frame resultante de agrupar por id. A partir de la variable x podemos aplicar la función que queramos a una columna determinada.

En este caso hemos calculado en número de años que ha jugado, el mínimo de partidos jugados en un año y el máximo de partidos jugados en un año.
