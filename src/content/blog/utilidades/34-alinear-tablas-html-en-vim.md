---
title: Alinear tablas html en vim
date: "2016-02-18"
tags: ["utilidades"]
draft: false
summary: En ocasiones, cuando se está desarrollando aplicaciones y se hacen pruebas con un navegador como Safari, puede aparecer un error
---

Para alinear tablas escritas en html utilizo el plugin [Tabular](https://github.com/godlygeek/tabular) de Matt Wozniski godlygeek para vim.

Una vez seleccionadas todas las filas que quiero alinear escribo

    :Tabularize /&lt;[\/]*t[a-z]\+&gt;
