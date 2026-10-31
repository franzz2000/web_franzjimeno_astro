---
title: Mostrar tablas en xtable igual que con ftable en R
date: "2013-11-19"
tags: ["programación", "r"]
draft: false
summary: R tiene una función para mostrar tablas de contingencia que es muy útil llamada ftable
---
R tiene una función para mostrar tablas de contingencia que es muy útil llamada ftable. El problema es que no hay forma de mostrarlo a través de xtable, que permite crear tablas para LaTeX.

    > xtable(ftable(Titanic, row.vars = 1:3))
    Error en UseMethod("xtable") : 
      no applicable method for 'xtable' applied to an object of class "ftable"

La mejor forma es utilizar la función format, que transforma la tabla en texto, luego solo tenemos que añadirla a xtable.

    xtable(format(ftable(Titanic, row.vars = 1:3)))
