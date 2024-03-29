---
title: Encontrar la primera palabra de una frase en vectores de R
date: "2013-07-04"
tags: ["programación", "r"]
draft: false
summary: Las listas son un elemento muy potente en R, aunque a veces es complicado el acceso a las mismas.
---
Las listas son un elemento muy potente en R, aunque a veces es complicado el acceso a las mismas. En ocasiones, por ejemplo, nos interesaría poder encontrar el primer elemento de una lista en R.


Para ello puede ser útil el siguiente ejemplo:

```R
#Supongamos que queremos extraer la primera palabra de un texto, y eso para cada elemento de un vector
texto <- c("Esto es una prueba", "Aquí tenemos la segunda", "Y la tercera")
#Separamos las palabras por los espacios, nos devuelve una lista
lista <- strsplit(texto, " ")
#Si queremos conocer la primera palabra de cada fila
sapply(lista, "[[", 1)
#Para la 3ª palabra sería
sapply(lista, "[[", 3)
```