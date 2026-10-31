---
title: Ordenar etiquetas de eje x con ggplot2
date: "2013-06-27"
tags: ["programación", "r"]
draft: false
summary: En ocasiones uno quiere ordenar las etiquetas de variables categóricas que aparecen en el eje x de una gráfica hecha en ggplot2.
---

En ocasiones uno quiere ordenar las etiquetas de variables categóricas que aparecen en el eje x de una gráfica hecha en ggplot2. Para ello lo que hay que ordenar son los niveles (levels) de la variable en cuestión.

```R
library(ggplot2)
#Generamos unos datos aleatorios
muestra <- sample(c("Muy Bueno", "Bueno", "Regular", "Malo", "Muy malo"), 100, replace=TRUE)
#Consultamos el orden de frecuencia de la muestra. En este caso de mayor a menor.
#Guardamos el orden de los levels en una variable
orden <- names(sort(table(muestra), decreasing=TRUE))
#Convertimos en un factor con los niveles ordenados
#y en un data.frame para que ggplot lo reconozca
muestra <- data.frame(valoracion=factor(muestra, levels=orden))
#Generamos e imprimimos la gráfica
print(ggplot(muestra, aes(x=valoracion, y=..count..))
+ geom_bar(binwidth=1))
```

Éste es el resultado.

![Gráfica con etiquetas ordenadas por frecuencia](/static/images/graf_ordenado.png)

Puede ser que el gráfico aparezca diferente al que muestro aquí, ya que se basa en una muestra de resultados aleatorios.

Edito el 06/06/2014:

Acabo de encontrar una función que permite ordenar los niveles de un factor a partir de otra variable. Esto puede ser útil, ya que ggplot2 utiliza los niveles para ordenar los elementos en la gráfica. Se trata de la función *reorder*, del paquete stats, que habrá que cargar antes de utilizarla con *library*(stats)).

La función toma 2 parámetros, primeramente el factor que se quiere ordenar y en segundo lugar un valor numérico por el que se quiere ordenar. En el caso de que queramos ordenar de forma inversa le podemos añadir un signo negativo al valor numérico.

Aquí va el ejemplo con la gráfica de arriba.

```R
library(stats)
library(ggplot2)
#Generamos unos datos aleatorios para el ejemplo
muestra <- sample(c("Muy Bueno", "Bueno", "Regular", "Malo", "Muy malo"), 100, replace=TRUE)
#Creamos un data.frame con las frecuencias de la muestra
muestra <- ddply(as.data.frame(muestra), .(muestra), nrow)
#Ordenamos los datos por la variable V1. En este caso para que sea decreciente, le he puesto un signo negativo
#a V1.
muestra$muestra <- with(muestra, reorder(muestra, -V1))
#Genero el gráfico a partir de los datos
p <- ggplot(muestra, aes(x=muestra, y=V1)) + geom_bar(stat="identity")
print(p)
```
La figura será la misma que he mostrado arriba.