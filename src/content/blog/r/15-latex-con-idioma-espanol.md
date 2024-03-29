---
title: Utilizar caracteristicas de LaTeX con idioma español en knitr
date: "2013-10-01"
tags: ["programación", "r", "latex"]
draft: false
summary: Mi solución a problemas con el idioma español con knitr y R
---

Para generar informes con R utilizo el paquete knitr, que facilita la integración de resultados de R en documentos pdf. Knitr transforma todo a LaTeX y luego genera el documento pdf.

LaTeX es un compositor de texto muy utilizado en el mundo científico por su flexiblidad.

El problema es que por defecto knitr está configurado para utilizar caracteres en inglés, por lo que si no añadimos nada a la descripción del documento, tendremos problemas con los acentos y las ñ.

La mejor solución que he encontrado es utilizar el paquete "babel", que se encarga de las traducciones.

Para ello tenemos que añadir la siguientes lineas al documento tex.

    \usepackage[utf8]{inputenc}
    \usepackage[spanish, es-tabla]{babel}

Editado: En la actualidad se recomienda utilizar XeTex/XeLaTex en lugar de pdfLatex para generar los documentos, ya que el primero utiliza codificación unicode, que incluye de forma nativa los acentos. Si utilizamos XeTex no tenemos que añadir estos paquetes, pero tendremos que añadir el paquete fontspec y guardar el documento en UTF-8.

    \usepackage{fontspec}

Para compilar el fichero, en lugar de pdflatex utilizaremos xelatex.
