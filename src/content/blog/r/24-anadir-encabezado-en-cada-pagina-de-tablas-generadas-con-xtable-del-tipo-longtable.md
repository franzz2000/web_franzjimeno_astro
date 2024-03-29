---
title: Añadir encabezado en cada página de tablas generadas con xtable del tipo longtable
date: "2014-11-13"
tags: ["programación", "r"]
draft: false
summary: El paquete longtable en LaTeX define los siguientes comandos para definir encabezados, y pies de tabla
---

El paquete longtable en LaTeX define los siguientes comandos para definir encabezados, y pies de tabla:

  * **\endfirsthead**: Linea o lineas que aparecen como encabezado en la primera página
  * **\endhead**: Linea o lineas que aparecen como encabezado de todas las páginas, excepto la primera
  * **\endfoot**: Linea o lineas que aparecen en el pie de la tabla de cada página, excepto en la última página
  * **\endlastfoot***: Linea o lineas que aparecen al final de la tabla

Hay que añadir un **\endhead** después de la primera fila de la tabla con el parámetro add.to.row de la función print.xtable.

Muestro un ejemplo que he encontrado en [StackOverflow](http://stackoverflow.com/questions/7450141/repeat-headers-when-using-xtable-with-longtable-option):

    addtorow <- list()
    addtorow$pos <- list()
    addtorow$pos[[1]] <- c(0)
    addtorow$command <- c(paste("\\hline \n",
                                 "\\endhead \n",
                                 "\\hline \n",
                                 "{\\footnotesize Continúa en la página siguiente...} \n",
                                 "\\endfoot \n",
                                 "\\endlastfoot \n",sep=""))
    x.big <- xtable(x, label = "tabbig", caption = "Ejemplo de una tabla que ocupa más de una página")
    print(x.big, tabular.environment = "longtable", floating = FALSE,
          include.rownames = FALSE,  # addtorow no incluye los nombres de las filas
          add.to.row = addtorow,     # aquí es donde se añade el encabezado
          hline.after=c(-1))         # addtorow sustituye la hline de la primera fila
