---
title: Historial de navegación en revealjs
date: "2018-01-28"
tags: ["programación"]
draft: false
summary: En ocasiones nos interesa tener el historial de navegación en revealjs.
---

En ocasiones nos interesa tener el historial de navegación en revealjs, para poder desplazarnos por las diferentes diapositivas con el botón de navegación. Es útil también cuando estamos editando la presentación y queremos que al actualizar se refresque la diapositiva en el navegador. En caso de no tener activada esta opción, en cada refresco de la presentación, ésta comenzará con la primera diapositiva.

Para ello debemos añadir la opción: history: true, en Reveal.initialize. Nos quedará como sigue:

```javascript
Reveal.initialize({
  history: true,
  dependencies: [
    { src: 'plugin/markdown/marked.js' },
    { src: 'plugin/markdown/markdown.js' },
    { src: 'plugin/notes/notes.js', async: true },
    { src: 'plugin/highlight/highlight.js', async: true, callback: function() { 
      hljs.initHighlightingOnLoad(); }}
]});
```
