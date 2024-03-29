---
title: Añadir la tabla de datos a una gráfica con ggplot2
date: "2013-11-07"
tags: ["programación", "r"]
draft: false
summary: Este método ayuda a añadir una tabla a una grafica generada con ggplot2. Este ejemplo funciona con la versión 0.9.3.1, no funciona con versiones anteriores de ggplot2 y no aseguro que funcione con versiones posteriores.
---

Este documento también está publicado en [Rpubs]( http://rpubs.com/franzz2000/10316 )

# Añadir la tabla de datos a una gráfica con ggplot2

Este método ayuda a añadir una tabla a una grafica generada con ggplot2. Este ejemplo funciona con la versión 0.9.3.1, no funciona con versiones anteriores de ggplot2 y no aseguro que funcione con versiones posteriores.

Cargamos las librerías necesarias para generar la gráfica.

El ejemplo es una adaptación del post de Learning R: [ggplot2: Labelling Data Series and Adding a Data Table]( http://learnr.wordpress.com/2009/04/29/ggplot2-labelling-data-series-and-adding-a-data-table/ )>

Primeramente seleccionamos las librerías necesarias para el ejemplo. Estas se han de instalar antes con el comando install.packages(“NombreDeLaLibrería”)

    library(ggplot2)
    library(scales)
    library(plyr)
    library(reshape2)
    library(grid)

Creamos un data.frame para el ejemplo

    df <- structure(list(
                      City = structure(c(2L, 3L, 1L),
                      .Label = c("Minneapolis", "Phoenix", "Raleigh"),
                      class = "factor"),
                      January = c(52.1, 40.5, 12.2), 
                      February = c(55.1, 42.2, 16.5),
                      March = c(59.7, 49.2, 28.3),
                      April = c(67.7, 59.5, 45.1),
                      May = c(76.3, 67.4, 57.1),
                      June = c(84.6, 74.4, 66.9),
                      July = c(91.2, 77.5, 71.9),
                      August = c(89.1, 76.5, 70.2),
                      September = c(83.8, 70.6, 60),
                      October = c(72.2, 60.2, 50),
                      November = c(59.8, 50, 32.4),
                      December = c(52.5, 41.2, 18.6)
                  ),
                .Names = c("City", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"),
                class = "data.frame",
                row.names = c(NA, -3L)
        )

Transformamos el data.frame para que se pueda utilizar dentro de ggplot2. En lugar del formato de tabla, nos interesa un data.frame con columnas y una variable de frecuencia que llamaremos month. Acortamos los nombres de los meses con month.abb.

    dfm <- melt(df, variable.name = "month", id = "City")
    levels(dfm$month) <- month.abb

Creamos la variable p con los datos necesarios para generar la gráfica. Con la segunda instrucción generamos una gráfica de lineas.

    p <- ggplot(dfm, aes(month, value, group = City, colour = City))
    p1 <- p + geom_line(size = 1)

Función que imprime el símbolo de grados junto al número.

    dgr_fmt <- function(x, ...) {
    parse(text = paste(x, "*degree", sep = ""))

Cambios esteticos en el gráfico. Eliminamos la rejilla, la leyenda, el fondo y el borde. Damos un color gris a los ejes.

    none <- element_blank()
    p2 <- p1 +
        theme_bw() +
        scale_y_continuous(
            labels = dgr_fmt, limits = c(0, 100), expand = c(0, 0)
        ) +
        labs(title = expression("Average Monthly Temperatures ("* degree * "F)"), x = NULL, y = NULL) +
        theme(
            panel.grid.major = none,
            panel.grid.minor = none,
            legend.position = "none",
            panel.background = none,
            panel.border = none,
            axis.line = element_line(colour = "grey50")
        )

Añadimos unas líneas para indicar las estaciones del año y el punto de congelacion.

    p3 <- p2 +
        geom_vline(
            xintercept = c(2.9, 5.9, 8.9, 11.9),
            colour = "grey85",
            alpha = 0.5
        ) +
        geom_hline(
            yintercept = 32,
            colour = "grey80",
            alpha = 0.5
        ) + 
        annotate(
            "text",
            x = 1.2,
            y = 35,
            label = "Freezing",
            colour = "grey80",
            size = 4
        ) +
        annotate(
            "text",
            x = c(1.5, 4.5, 7.5, 10.5),
            y = 97,
            label = c("Winter", "Spring", "Summer", "Autumn"),
            colour = "grey70",
            size = 4
        )

Añadimos un texto que muestra el nombre de la ciudad junto a la linea que le corresponde

    p4 <- p3 +
    geom_text(
        data = dfm[dfm$month == "Dec", ],
        aes(label = City),
        hjust = 0.7,
        vjust = 1
    )

Generamos la tabla en formato ggplot, para poder añadirla al gráfico.

    data_table <- ggplot(
                      dfm,
                      aes(
                          x = month,
                          y = factor(City),
                          label = format(value, nsmall = 1),
                          colour = City
                  )) + 
                  geom_text(size = 3.5) +
                  theme_bw() + 
                  scale_y_discrete(
                      labels = abbreviate,
                      limits = c("Minneapolis", "Raleigh", "Phoenix")) +
                  theme(panel.grid.major = element_blank(),
                        legend.position = "none",
                        panel.border = element_blank(),
                        axis.text.x = element_blank(),
                        axis.ticks = element_blank(),
                        plot.margin = unit(c(-0.5, 1, 0, 0.5), "lines")) +
                  labs(x = NULL, y = NULL) 

Con la función grid creamos la plantilla para insertar los 2 gráficos. Se trata de una rejilla de 1 columna y 3 filas con proporciones 2:0.01:0,25. La unidad es null, que solo se puede utilizar con grid.layout. El hueco de 0.01 evita que se solapen las gráficas y salgan las etiquetas de la gráfica cortadas.

    Layout <- grid.layout(
                  nrow = 3,
                  ncol = 1,
                  heights = unit(c(2.5, 0.01, 0.25),
                  c("null", "null", "null")))
    grid.show.layout(Layout)

![plot of chunk unnamed-chunk-10](data:image/png;base64,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)

Crea una nueva gráfica con la plantilla Layout a través de la función vplayout. Selecciona el hueco con subplot y añade las 2 gráficas con la función mmplot.

    vplayout <- function(...) {
        grid.newpage()
        pushViewport(viewport(layout = Layout))
    }

    subplot <- function(x, y) viewport(layout.pos.row = x, layout.pos.col = y)

    mmplot <- function(a, b) {
        vplayout()
        print(a, vp = subplot(1, 1)<span class="paren">)</span>
        print(b, vp = subplot(3, 1)<span class="paren">)</span>
    }

    mmplot(p4, data_table)

![ plot of chunk unnamed-chunk-11 ]( data:image/png;base64,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 )

En este procedimiento se utiliza la librería grid que permite incluir varias gráficas en un mismo objeto, pudiendo modificar sus dimensiones y posición. Existe una librería que simplifica mucho esto y que añade algunas funcionalidades, que se llama <a href="http://cran.r-project.org/web/packages/gridExtra/">gridExtra</a>. No sirve para el ejemplo anterior, pero sí que ayuda en otras ocasiones.
