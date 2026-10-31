---
title: Convertir tablas de pdf a texto con pdftotext
date: "2014-05-09"
tags: ["utilidades"]
draft: false
summary: En ocasiones es difícil pasar tablas de un pdf a texto. Si intentamos copiar y pegarlas, se verá que salen desordenadas. Existe un programa muy sencillo que funciona en Mac y en Linux llamado pdftotext. Para los usuarios de Windows habría que instalar 1.
---

En ocasiones es difícil pasar tablas de un pdf a texto. Si intentamos copiar y pegarlas, se verá que salen desordenadas.

Existe un programa muy sencillo que funciona en Mac y en Linux llamado pdftotext. Para los usuarios de Windows habría que instalar [cygwin]( http://www.cygwin.com ).

Yo utilizo un Mac y lo he instalado con [homebrew](http://brew.sh ):

    $ brew install poppler

Utilizo poppler ya que éste instala una versión de **pdftotext** ampliada.

Luego simplemente escribimos en la consola/terminal:

    $ pdftotext -layout -enc Windows-1255 fichero.pdf

Se creará un fichero con la extensión txt que tendrá el texto incrustado en el pdf.

La opción *-layout* hace que se intente mantener el formato del pdf.

La opción *-enc* indica la codificación de texto que se utiliza en el pdf.

**Notas**:

Los pdf han de tener el texto incrustado. Resumiendo, si abrimos el PDF hay que poder seleccionar el texto. Si no se puede, tampoco podremos convertir el texto con este programa. Habría que utilizar un [OCR](http://es.wikipedia.org/wiki/Reconocimiento_óptico_de_caracteres).

Los textos pueden estar codificados de diferentes maneras, nos daremos cuenta si transformamos un texto con acentos. En el caso de que utilicemos una codificación incorrecta, no veremos correctamente los caracteres con acentos.

Es difícil saber qué codificación se utiliza en un pdf, por lo que hay que ir probando. El programa pdftotext tiene una opción para poder saber qué codificaciones soporta el sistema. Para ello escribiremos **pdftotext -listenc**. En mi caso son los siguientes:

 UCS-2, ASCII7, Latin1, UTF-8, ZapfDingbats, Symbol, Big5, EUC-JP, EUC-CN, ISO-2022-KR, Big5ascii, KOI8-R, GBK, ISO-8859-6, Latin2, Windows-1255, ISO-8859-7, ISO-8859-8, ISO-8859-9, ISO-2022-JP, TIS-620, ISO-2022-CN, Shift-JIS.

Hay versiones de pdftotext que no aceptan la opción -listenc, yo utilizo el pdftotext que viene con el paquete poppler y ese sí que lo tiene.

