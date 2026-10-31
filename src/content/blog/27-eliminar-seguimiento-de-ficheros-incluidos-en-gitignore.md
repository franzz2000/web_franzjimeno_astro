---
title: Eliminar seguimiento de ficheros incluidos en .gitignore
date: "2015-01-13"
tags: ["programación"]
draft: false
summary: Cuando añadimos unos ficheros para que los controle git y luego queremos ignorarlos, veremos que no sirve solo añadir una regla en el fichero .gitignore. Tendremos que \"refrescar\" la caché de git.
---

Cuando añadimos unos ficheros para que los controle git y luego queremos ignorarlos, veremos que no sirve solo añadir una regla en el fichero .gitignore. Tendremos que "refrescar" la caché de git.

Step 1. IMPORTANTE: hacer un commit de los cambios ya que todo los demás cambios se perderán. Después:

    git rm -r --cached .

Luego:

    git add .

y

    git commit -m "fixed untracked files"

Con esto tendremos todos los ficheros que hayamos incluido en .gitignore eliminados de la cache.
