---
title: Mostrar svg por fragmentos en reveal.js
date: "2016-02-17"
tags: ["programación_web", "utilidades"]
draft: false
summary: En esta ocasión voy a hablar de una extensión que se puede utilizar en Reveal.js
---

En esta ocasión voy a hablar de una extensión que se puede utilizar en Reveal.js, que sirve para realizar presentaciones en HTML de una forma bastante sencilla y que funciona bien como sustituto de PowerPoint.

Si tenemos instalada la página, vemos que se pueden añadir esquemas vectoriales a partir de un fichero svg (que podemos generar con Inkscape, un programa gratuito sustituto de Adobe Illustrator o Corel).

Si nos interesa que el esquema aparezca de forma secuencial en la presentación podemos utilizar la siguiente extensión que he encontrado en [github](https://gist.github.com/bollwyvl/fe1d2806449487cdf88a).

Primero tenemos que descargar el código en el directorio plugins de nuestra presentación. En el terminal clonamos el fragmento:

    git clone https://gist.github.com/bollwyvl/fe1d2806449487cdf88a&nbsp;

ya solo queda activarlo:

```
{src: 'reveal/plugin/svg-fragments/reveal-svg-fragment.js',
   condition: function () {
               return !!document.querySelector('[data-svg-fragment]');
           },
   // de manera opcional, si se tiene instalado el d3
   d3: "./d3.min.js"
}
```

**NOTAS importantes:**

  * Las capas han de llamarse "base", "fragment1", "fragment2", "fragmentX", sino no funciona.

```
<section>
  <div data-svg-fragment="imagenes/historia_enfermedad.svg#[*|label=base]" width="100%">
        <a class="fragment" title="[*|label=fragment1]"></a>
        <a class="fragment" title="[*|label=fragment2]"></a>
    </div>
 </section>
```
