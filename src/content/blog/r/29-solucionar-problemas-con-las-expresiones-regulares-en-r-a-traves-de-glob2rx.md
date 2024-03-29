---
title: Solucionar problemas con las expresiones regulares en R a traves de glob2rx
date: "2015-01-22"
tags: ["programación", "r"]
draft: false
summary: Mi experiencia con expresiones regulares es bastante baja, por lo que en ocasiones tengo muchos problemas para definirlas en R
---

Mi experiencia con expresiones regulares es bastante baja, por lo que en ocasiones tengo muchos problemas para definirlas en R.
Con la funcion glob2rx puedo crear expresiones regulares con facilidad, utilizando el "globbing pattern" que sirve para buscar ficheros en la consola.
Dejo un ejemplo de cómo seleccionar unos ficheros que comiencen por un texto y finalicen con una determinada extensión.

```R
#Busco ficheros que comiencen por "tex_" y finalicen con ".pdf"

list.files(pattern=glob2rx("tex_*.pdf"))

#La expresión regular para esta búsqueda sería
glob2rx("tex_*.pdf"))

[1] "^tex_.*\\.pdf$"
```
