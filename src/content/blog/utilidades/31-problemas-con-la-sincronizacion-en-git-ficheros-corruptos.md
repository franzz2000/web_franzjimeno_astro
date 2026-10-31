---
title: Problemas con la sincronización en git. Ficheros corruptos
date: "2015-02-11"
tags: ["utilidades"]
draft: false
summary: Git es un programa de control de versiones que estoy utilizando para mi tesis, ya que la hago con LaTeX.
---
Git es un programa de control de versiones que estoy utilizando para mi tesis, ya que la hago con LaTeX.

El problema que me ha surgido es que al sincronizar repositorios, en ocasiones, me aparecía un error durante la compresión de archivos que no me permitía finalizarla. Los errores eran aleatorios, aunque siempre aparecían cuando se estaba comprimiendo algún archivo pesado. En mi caso LaTeX genera un montón de PDF que pesan bastante y que al ser binarios no realiza una fusión por diferencias. La compresión de ficheros en mi servidor es lenta (se trata de un pentium IV) y creo que llega a saturarlo.

Por defecto, git solo comprime ficheros mayores de 250 Megas. Yo he reducido este tamaño, con lo que he conseguido que ya no me aparezcan esos errores.

En el repositorio del servidor (bare), dentro del directorio de trabajo he escrito el siguiente comando:

    git config --add core.bigFileThreshold 5

De esta manera, los ficheros de más de 5 Megas no se comprimen. Esto aumenta el tiempo de descarga pero no deja que se sature el servidor. Por ahora todo va a las mil maravillas.
