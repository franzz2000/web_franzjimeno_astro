---
title: Saber qué aplicación usa un determinado puerto en Mac
date: "2011-06-07"
tags: ["programación"]
draft: false
summary: En ocasiones me he encontrado que me interesaba saber qué aplicación está utilizando un determinado puerto, ya que por alguna razón me aparecía un error diciendo que un puerto determinado está ocupado.
---

En ocasiones me he encontrado que me interesaba saber qué aplicación está utilizando un determinado puerto, ya que por alguna razón me aparecía un error diciendo que un puerto determinado está ocupado.

Para ello en el terminal se puede escribir el siguiente comando:

    lsof -i -P|grep -i "8080"

En este caso buscamos el programa que está utilizando el puerto 8080.

Se puede comprobar qué puertos utiliza el programa a través de la aplicación "Monitor de actividad".
