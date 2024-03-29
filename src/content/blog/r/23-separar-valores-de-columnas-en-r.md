---
title: Separar valores de columnas en R y reorganizarlos
date: "2014-07-17"
tags: ["programación", "r"]
draft: false
summary: Una manera sencilla de separar valores de columnas en R y reorganizarlos
---

Pongamos un ejemplo:

Tenemos este data.frame:

    df <- data.frame(
        Column1=c("id1", "id2", "id3"),
        Column2=c("text1, text2, text3", "text4", "text5, text6"),
        Column3=c("text7", "text8,text9,text10,text11", "text12,text13"))

    df
      Column1           Column2                   Column3
    1     id1 text1,text2,text3                     text7
    2     id2             text4 text8,text9,text10,text11
    3     id3       text5,text6             text12,text13


y nos interesaría llegar al siguiente resultado:

      Column1 variable                     value
    1     id1  Column2                     text1
    2     id1  Column2                     text2
    3     id1  Column2                     text3
    4     id2  Column2                     text4
    5     id3  Column2                     text5
    6     id3  Column2                     text6
    7     id1  Column3                     text7
    8     id2  Column3                     text8
    9     id2  Column3                     text9
    10    id2  Column3                    text10
    11    id2  Column3                    text11
    12    id3  Column3                    text12
    13    id3  Column3                    text13

Para ello podemos utilizar la siguiente solución, que he cogido de [StackOverflow](http://stackoverflow.com/questions/24595421/how-to-strsplit-data-frame-column-and-replicate-rows-accordingly):

    library(reshape2)
    library(splitstackshape)
    library(dplyr)
    select(na.omit(concat.split.multiple(melt(df, id.vars="Column1"), split.col="value", sep=",", direction="long")), -time)
