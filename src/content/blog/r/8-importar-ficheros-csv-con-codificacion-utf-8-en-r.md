---
title: Importar ficheros csv con codificación UTF-8 en R
date: "2013-06-25"
tags: ["programación", "r"]
draft: false
summary: Los ficheros de texto que encontramos pueden guardarse con diferentes codificaciones, entre las más universales se encuentra el formato UTF-8, compatible con casi cualquier sistema actual.
---

Los ficheros de texto que encontramos pueden guardarse con diferentes codificaciones, entre las más universales se encuentra el formato UTF-8, compatible con casi cualquier sistema actual. Para poder importar correctamente estos ficheros en R es necesario añadir un parámetro dentro de la función de read.csv:

```R
read.csv(file="fichero.csv", fileEncoding="utf-8"
```

De esta manera nos aparecerán de forma correcta los acentos y eñes.

