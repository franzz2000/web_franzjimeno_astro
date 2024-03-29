---
title: El mapa de Asturias en R y con ggplot2
date: "2014-05-07"
tags: ["programación", "r"]
draft: false
summary: Últimamente he estado trasteando con 1, una librería para generar gráficos muy interesante, basada en la gramática de gráficos.
---

Últimamente he estado trasteando con [ ggplot2 ](http://ggplot2.org/), una librería para generar gráficos muy interesante, basada en la gramática de gráficos. Por supuesto, también permite generar gráficos de mapas.
Os voy a poner un ejemplo con el mapa de Asturias.

* El mapa que utilizo es el de Asturias que me he descargado previamente de [GADM]( http://www.gadm.org ). Lo he transformado como en el [ post sobre mapas con R ]( index.php?option=com_content&amp;view=article&amp;id=12:mapas-con-r&amp;catid=8:r&amp;Itemid=101 ).
* Los datos de los municipios los he descargado del [Instituto nacional de estadística (INE)]( http://www.ine.es ), en el apartado de [población de municipios]( http://www.ine.es/jaxi/menu.do?type=pcaxis&amp;path=%2Ft20%2Fe260&amp;file=inebase&amp;L=0 ). Y los he adaptado para que coincidan con los del mapa.

Aquí va el código:

    library(ggplot2)
    library(rgdal)

    # Descargo los datos administrativos de GADM, me los guarda en una variable llamada gadm
    load(url("http://gadm.org/data/rda/ESP_adm3.RData"))

    # Me quedo con los datos de Asturias
    asturias.adm3.spdf <- gadm[gadm$NAME_2=="Asturias",]

    # Creo el data.frame a partir de los datos de GADM
    asturias.adm3.df <- fortify(asturias.adm3.spdf, group="NAME_2")

    # Genero datos de desempleo de forma aleatoria para cada id
    desempleo.df <- data.frame(id= unique(asturias.adm3.df[,'id']), desempleo = runif(n = length(unique(asturias.adm3.df[,'id'])), min = 0, max = 25))
    
    # Fusiono ambos data.frames
    asturias.adm3.df <- merge(asturias.adm3.df, desempleo.df, by.y = 'id', all.x = TRUE)

    # Obtengo las coordenadas para las etiquetas

    asturias.adm3.centroids.df <- data.frame(long = coordinates(asturias.adm3.spdf)[, 1], 
                                         lat = coordinates(asturias.adm3.spdf)[, 2],
                                         ID_2=asturias.adm3.spdf@data[,"ID_3"],
                                         NAME_2=asturias.adm3.spdf@data[,'NAME_3']) 

    #Cambio codificación del texto de latin a utf-8 para que se muestren los acentos correctamente
    asturias.adm3.centroids.df$NAME_2 <- as.factor(iconv(as.character(asturias.adm3.centroids.df$NAME_2), "latin1", "utf-8"))

    #Asigno los nombres correctos de cada Área Sanitaria
    levels(temp) <- list(
                       "Area I"="Eo-Navia",
                       "Área II"="n.a. (194)",
                       "Área III"="Avilés",
                       "Área IV"="Oviedo",
                       "Área V"="n.a. (108)",
                       "Área VI"="Oriente",
                       "Área VII"="Caudal",
                       "Área VIII"="n.a. (195)"
                       )

    # Create ggplot with labels for administrative areas

    p <- ggplot(asturias.adm3.df, aes(x = long, y = lat, group = group)) +
        geom_polygon(aes(fill = cut(desempleo,5))) +
        geom_text(data = asturias.adm3.centroids.df, aes(label = NAME_2, x = long, y = lat, group = NAME_2), size = 3) +
        labs(x=" ", y=" ") +
        theme_bw() +
        scale_fill_brewer('Tasa de Desempleo (Ene 2011)', palette  = 'PuRd') +
        coord_map() +
        theme(panel.grid.minor=element_blank(), panel.grid.major=element_blank()) +
        theme(axis.ticks = element_blank(), axis.text.x = element_blank(), axis.text.y = element_blank()) +
        theme(panel.border = element_blank())
    
    print(p)
