---
title: Superponer imágenes en reveal.js con fragment
date: "2016-03-08"
tags: ["programación", "programación_web"]
draft: false
summary: Reveal.js es un framework en javascript para realizar presentaciones en formato html. Para poder sobreponer imaacute;genes e irlas pasando.
---

Reveal.js es un framework en javascript para realizar presentaciones en formato html.
Para poder sobreponer imágenes e irlas pasando.

El ejemplo es el siguiente:

```html
<section>
    <h5>Ejemplo de imaacute;genes superpuestas</h5>
    <div style="position:relative; width:100%; height:700px; margin:0 auto;">
        <div class="fragment fade-out" data-fragment-index="0" style="position:absolute;top:0;left:0;">
            <img width="100%" height="480" src="img/imagen1.png" alt="imagen1"  />
            <p style="background-color: white;">Pie de imagen 1</p>
        </div>
        <div class="fragment fade-in" data-fragment-index="0" style="position:absolute;top:0;left:0;">
            <img width="640" height="480" src="img/imagen2.png" alt="imagen 2"  />
            <p style="background-color: white;">Pie de imagen 2</p>
        </div>
        <div class="fragment fade-in" data-fragment-index="1" style="position:absolute;top:0;left:0;">
            <img width="640" height="480" src="img/imagen3.png" alt="imagen 3" />
            <p style="background-color: white;">Pie de imagen 3</p>
        </div>
    </div>
</section>
```
