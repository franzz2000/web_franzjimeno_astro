---
title: Como generar grafos con R e igraph v1.0 para crear movimiento
date: "2015-07-22"
tags: ["programación", "r"]
draft: false
summary: He estado buscando en numerosos sitios la forma de hacer una secuencia de grafos que mostraran cómo se iban recolocando los vértices aplicando un determinado algoritmo dando sensación de movimiento, y no encontraba nada hasta que llegué a esta dirección
---

He estado buscando en numerosos sitios la forma de hacer una secuencia de grafos que mostraran cómo se iban recolocando los vértices aplicando un determinado algoritmo dando sensación de movimiento, y no encontraba nada hasta que llegué a [esta dirección](http://estebanmoro.org/2012/11/temporal-networks-with-igraph-and-r-with-20-lines-of-code/) que explica cómo hacer una secuencia termporal con grafos obtenidos de datos de Twitter. El problema es que el método utilizado sirve para versiones antiguas de igraph y no funcionan en la versión 1.0. Aquí muestro una adaptación sencilla para la versión 1.0 y posteriores de igraph:

```R
library(igraph)

g <- graph_from_literal(1-2-3-4-5-6-7-2)
layout.old &lt;- layout_randomly(g)
png(file="example%03d.png", width=1600,height=900)
for(i in 1:40){
  layout.new &lt;- layout_with_fr(g,niter=2,coords=layout.old, start.temp = .05)
  plot(g,layout=layout.new)
  layout.old &lt;- layout.new
}
dev.off()
```

Con este ejemplo se generan 40 imágenes que muestran cómo se va iterando el algoritmo de Fructermann-Rheingold y se guardan como png. Éstos se pueden añadir a una presentación o convertirlos en un video con <a href="ffmpeg.org">ffmpeg</a>, un programa que permite hacer videos a partir de imágenes y que funciona en windows, linux y mac.
La orden sería :

    ffmpeg -r 10 -i example%03d.png -b 20M output.mp4

Aquí está el video de muestra:
{{<youtube E5uwYT-n0TU>}}
<!--<iframe width="300" height="169" src="https://www.youtube.com/embed/E5uwYT-n0TU" frameborder="0" allowfullscreen></iframe>-->
