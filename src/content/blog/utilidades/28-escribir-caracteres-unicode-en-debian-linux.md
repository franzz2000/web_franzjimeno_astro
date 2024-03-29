---
title: Escribir caracteres unicode desde el teclado en Debian/Linux
date: "2015-01-15"
tags: ["utilidades"]
draft: false
summary: En ocasiones queremos escribir algún caracter unicode en nuestro sistema Linux y no podemos porque no lo muestra nuestro teclado. Hay un sistema sencillo que permite introducir cualquier símbolo unicode solo con saber su código. 
---

En ocasiones queremos escribir algún caracter unicode en nuestro sistema Linux y no podemos porque no lo muestra nuestro teclado.

Hay un sistema sencillo que permite introducir cualquier símbolo unicode solo con saber su código. Por ejemplo:

Queremos añadir una ~ y no sabemos qué tecla es en nuestro teclado. Podemos pulsar la siguiente combinación de teclas 

    Shift-Ctrl-U + 007B

si queremos añadir una @ sería 

    Shift-Ctrl-U + 40

Esto también me es útil cuando trabajo en remoto (con Teamviewer) desde un ordenador Mac, que por alguna razón no consigo enviar correctamente las combinaciones de teclas para estos símbolos.