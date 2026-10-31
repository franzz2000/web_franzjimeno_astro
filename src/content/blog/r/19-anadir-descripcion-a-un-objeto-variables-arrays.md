---
title: Añadir descripción a un objeto en R (variables, arrays,...)
date: "2013-11-19"
tags: ["programación", "r"]
draft: false
summary: En ocasiones los nombres de variables que se utilizan en R son cortos, difíciles de reconocer, sobre todo si ya ha pasado un tiempo desde que trabajó con esos datos. Para no tener que estar mirando continuamente en la documentación, se puede añadir una descripción a cualquier objeto en R a través de sus atributos.Voy a poner un ejemplo. Tenemos un data.frame llamado datos con muchas variables como por ejemplo ed1, ged... Podemos añadir un atributo \"descripcion\" que puede ser una descripción del atributo. Es importante tener en cuenta que existen nombres de atributos reservados, que se utilizan en determinadas funciones, por lo que no es recomendable utilizarlos. Yo para evitar estos conflictos suelo utilizar nombres en español, que se que no se utilizan.
---

En ocasiones los nombres de variables que se utilizan en R son cortos, difíciles de reconocer, sobre todo si ya ha pasado un tiempo desde que trabajó con esos datos.j

Para no tener que estar mirando continuamente en la documentación, se puede añadir una descripción a cualquier objeto en R a través de sus atributos.Voy a poner un ejemplo. Tenemos un data.frame llamado datos con muchas variables como por ejemplo ed1, ged... Podemos añadir un atributo "descripcion" que puede ser una descripción del atributo. Es importante tener en cuenta que existen nombres de atributos reservados, que se utilizan en determinadas funciones, por lo que no es recomendable utilizarlos. Yo para evitar estos conflictos suelo utilizar nombres en español, que se que no se utilizan.

    attr(datos$ed1, "descripcion") <- "Edad de la persona en la primera muestra"
    attr(datos$ged) &lt;- "Grupo de edad"

Se puede acceder a la información a través de la misma función:

    attr(datos$ed1, "descripcion")
    attr(datos$ged, "descripcion")

Para ver la descripción de todas las variables de un data.frame se puede utilizar la siguiente instrucción:

    lapply(datos, attr, "descripcion")

Se puede obtener más información sobre los atributos escribiendo en R:

    help(attr)

También existe un paquete llamado Hmisc que añade una función para manejar un atributo label, que puede ser útil.
