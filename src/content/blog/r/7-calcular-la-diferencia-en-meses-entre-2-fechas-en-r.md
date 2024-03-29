---
title: Calcular la diferencia en meses entre 2 fechas en R
date: "2013-06-25"
tags: ["programación", "r"]
draft: false
summary: R es un lenguaje y entorno de programación para análisis estadístico y gráfico.
---

R es un lenguaje y entorno de programación para análisis estadístico y gráfico.

Dentro de todas sus posibilidades se encuentran capacidades para calcular diferencias entre fechas, pero eso se hace de una manera directa para el cálculo de días. La cosa se complica un poco más si lo que queremos hacer es sobre meses.

He estado buscando por internet y he encontrado las siguientes soluciones:

Solución 1

```R
d1 <- asDate("01 marzo 1950", "%d %B %Y")
d2 <- as.Date(c("01 abril 1955", "01 julio 1980"), "%d %B %Y")
round((d2 - d1)/(365.25/12))
```

Solución 2

```R
as.Date.numeric <- function(x) structure(floor(x+.001), class = "Date")
sapply(d2, function(d2) length(seq(d1, as.Date(d2), by = "month")))-1<br /><br />
```

Solución 3 en el caso de que queramos calcular la diferencia con horas y minutos

```R
d1 <- strptime("01-11-1950 11:30", "%d-%m-%Y %H:%M")
d2 <- strptime("01-11-1950 12:30", "%d-%m-%Y %H:%M")
difftime(d2, d1, units="min")
```