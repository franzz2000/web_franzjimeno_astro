---
title: Update tool de Glasfish marca un error de privilegios en Mac OS X
date: "2011-04-19"
tags: ["programación"]
draft: false
summary: Por alguna razón desconocida por mi, la versión del programa Updatetool de Glassfish 3.1 me marca un error de privilegios. Estoy utilizando un Mac con sistema operativo OS X Snow Leopard.
---

Por alguna razón desconocida por mi, la versión del programa Updatetool de Glassfish 3.1 me marca un error de privilegios. Estoy utilizando un Mac con sistema operativo OS X Snow Leopard.

He conseguido solucionar este problema modificando los permisos de glassfish de la siguiente manera. En una terminal he escrito:

```bash
    sudo chown -R usuario:admin /Applications/NetBeans/glassfish3
```

Hay que sustituir el usuario por el nombre correcto del usuario. La ruta del programa glassfish puede cambiar de un ordenador a otro. Hay que asegurarse que también es la correcta.

De esta manera desaparecerá el error de privilegios que aparecía. Ya podemos ejecutar Update Tool sin problemas.
