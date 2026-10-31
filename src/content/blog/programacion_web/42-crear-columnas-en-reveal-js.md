---
title: Crear columnas en reveal.js
date: "2018-02-21"
tags: ["programación"]
draft: false
summary: Una forma de crear columas es añadiendo el siguiente código al tema que se esté utilizando (fichero scss)
---

Una forma de crear columas es añadiendo el siguiente código al tema que se esté utilizando (fichero scss), suele estar en la ruta css/theme/source/nombre_tema.scss

Se puede añadir antes de:

```
// Theme template ------------------------------
@import "../template/theme";
// ---------------------------------------------

.multiCol {
    display: table;
    table-layout: fixed; // don't fudge depending on content
    width: 100%;
    text-align: left; // matter of taste, makes imho sense
    .col {
        display: table-cell;
        vertical-align: top;
        width: 50%;
        padding: 2% 0 2% 3%; // some vertical, and between columns
        &amp;:first-of-type { padding-left: 0; } // there's nothing before col1
    }
}
```

Luego solo tenemos que crear unos divs con la clase multicol y col, por ejemplo:

```
<section style="font-size: 70%">
    <h3>Doing two-column (this headline still full-width)</h3>

    <div class='multiCol'>
        <div class='col'>
            Gallia est omnis divisa in partes tres, quarum unam incolunt Belgae, aliam Aquitani, tertiam qui ipsorum lingua Celtae, nostra Galli appellantur.
        </div>
        <div class='col'>
            Qua de causa Helvetii quoque reliquos Gallos virtute praecedunt, quod fere cotidianis proeliis cum Germanis contendunt, cum aut suis finibus eos prohibent aut ipsi in eorum finibus bellum gerunt.
        </div>
    </div>
    And simply more regular full-width text in the following. But hey, there is also:
    <div class='multiCol'>
        <div class='col'>Also works for 3 columns...</div>
        <div class='col'>...as we can show in...</div>
        <div class='col'>...this example here.</div>
    </div>
</section>
```


**Nota:** Otra manera es utilizando grid de css:
