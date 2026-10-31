---
title: Al crear un proyecto Maven en Netbeans me codifica como MacRoman
date: "2011-04-14"
tags: ["programación"]
draft: false
summary: Al crear un proyecto en Netbeans con Maven los ficheros se codifican como MacRoman y no es posible modificar tal opción en el apartado de preferencias. Si se modifica y se coloca UTF-8, por ejemplo, esta volverá a MacRoman.
---

Al crear un proyecto en Netbeans con Maven los ficheros se codifican como MacRoman y no es posible modificar tal opción en el apartado de preferencias. Si se modifica y se coloca UTF-8, por ejemplo, esta volverá a MacRoman.

Esto es debido a que en maven la configuración se encuentra en el fichero pom.xml. Es necesario entrar en ese fichero y editarlo.

Se incluirá la siguiente linea:

```bash
<project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
```
dentro de &lt;properties&gt;.
