---
title: Desactivar restricciones de origen cruzado (CORS) en Safari
date: "2020-08-26"
tags: ["programación", "programación_web"]
draft: false
summary: En ocasiones, cuando se está desarrollando aplicaciones y se hacen pruebas con un navegador como Safari, puede aparecer un error
---

En ocasiones, cuando se está desarrollando aplicaciones y se hacen pruebas con un navegador como Safari, puede aparecer un error como el siguiente:

    [Error] Cross-origin redirection to https://swapi.dev/api/films denied by Cross-Origin Resource Sharing policy: Origin http://localhost:8100 is not allowed by Access-Control-Allow-Origin.
    [Error] XMLHttpRequest cannot load http://swapi.dev/api/films due to access control checks.
    [Error] Failed to load resource: Cross-origin redirection to https://swapi.dev/api/films denied by Cross-Origin Resource Sharing policy: Origin http://localhost:8100 is not allowed by Access-Control-Allow-Origin. (films, line 0)

Este error solo aparece en el momento del desarrollo, no aparecerá en la aplicación. Para desactivar el CORS se puede hacer desde el Menú de desarrollo, seleccionando la opción de "Desactivar restricciones de origen cruzado".

En Chrome se puede hacer ejecutando Chrome con el parámetro

    --disable-web-security
