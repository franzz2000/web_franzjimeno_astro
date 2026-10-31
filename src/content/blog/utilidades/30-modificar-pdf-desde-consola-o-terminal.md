---
title: Modificar pdf desde consola o terminal
date: "2015-02-08"
tags: ["utilidades"]
draft: false
summary: He estado jugando un poco con programas para consola que permiten fusionar pdfs y modificarlos desde la consola o terminal del ordendador.
---

He estado jugando un poco con programas para consola que permiten fusionar pdfs y modificarlos desde la consola o terminal del ordendador. La mayor ventaja de esto es que se pueden hacer modificaciones masivas con muy poco esfuerzo. Todos son gratuitos y hacen funciones parecidas. Finalmente el que más me ha gustado es pdfjam por su sencillez.
Aquí añado los programas que he estado probando muy superficialmente:
* Ghostscript: puede ser el programa más utilizado para la creación/modificación de documentos en pdf. Lo malo es que su sintaxis es algo complicada.
* pdftk: un programa más sencillo de utilizar con mucha potencia.
* imagemagick: permite muchísimas modificaciones, no tan enfocado a pdf, pero sí a imágenes.
* <a href="http://www2.warwick.ac.uk/fac/sci/statistics/staff/academic-research/firth/software/pdfjam">pdfjam</a>: otro grupo de programas (scripts) que facilitan la transformación de documentos en pdf, se pueden separar páginas, juntar, rotar...
&nbsp;
Dejo algunos ejemplos para probarlos:
<em>Ghostscript</em>
Extraer determinadas páginas de un pdf, en este caso de la página 1 a la 3 de un pdf con nombre fichero_pdf.pdf a prueba.pdf

    gs -dBATCH -dNOPAUSE -q -sDEVICE=pdfwrite -dFirstPage=1 -dLastPage=3 -sOUTPUTFILE=prueba.pdf fichero_pdf.pdf

<em>Con pdfjam</em>

    pdfjam fichero_pdf.pdf '1-3' --outfile prueba.pdf

Generar una página de pdf en blanco

    echo "" | ps2pdf -sPAPERSIZE=a4 - prueba.pdf

Rotar una página con imagemagick

    convert -density 300x300 fichero_pdf.pdf -rotate 90 prueba.pdf

o con pdftk

    pdftk fichero_pdf.pdf cat 1east output out.pdf

Aumentar el tamaño de una página de dinA4 a dinA3

    gs -o fichero_pdf.pdf -sDEVICE=pdfwrite -sPAPERSIZE=a3 -dFIXMEDIA -dPDFFitPage -dCompatibilityLevel=1.4 prueba.pdf

Hace de 2 páginas dinA4 una página dinA3

    montage -density 600 -tile 2x1 fichero_pdf1.pdf fichero_pdf2.pdf -geometry +0+0+0+0 prueba.pdf

lo mismo con pdfjam

    pdfnup --sufix 2up --a3paper fichero_pdf1.pdf fichero_pdf2.pdf

Un ejemplo concreto que me ha sido útil para un trabajo que tengo que hacer: Extraer las páginas 14 y 15 de un pdf, fusionarlas y hacer un A3 de ellas, rotando una, todo con pdfjam:

    pdf90 fichero_pdf.pdf --outfile /dev/stdout | pdfjam --a3paper --outfile pagina1.pdf
    pdfjam --nup 2x1 --landscape --a3paper --outfile /dev/stdout informe1.pdf '14' informe1.pdf '15' | pdf90 --outfile pagina2.pdf
    pdfjoin pagina1.pdf pagina2.pdf --outfile fusion_paginas.pdf
