---
title: Crear automáticamente nuevos directorios al editar un fichero en vim
date: "2018-02-21"
tags: ["utilidades"]
draft: false
summary: En ocasiones, cuando se está desarrollando aplicaciones y se hacen pruebas con un navegador como Safari, puede aparecer un error
---

En ocasiones queremos crear un nuevo fichero en vim en un directorio que no existe.
Si escribimos:

    :e directorio_nuevo/fichero_nuevo.txt

vim nos recordará que el directorio no existe. Si a continuación escribimos

    :!mkdir -p %:h

vim creará automáticamente los directorios que faltan.
