---
title: Copia de seguridad de iPhoto a NAS con rsync
date: "2015-01-09"
tags: ["utilidades"]
draft: false
summary: En ocasiones, cuando se está desarrollando aplicaciones y se hacen pruebas con un navegador como Safari, puede aparecer un error
---

Para realizar una copia de seguridad de las fotos de mi Mac, utilizo el programa rsync, que permite hacer copias exactas del directorio de iPhoto. Aunque en el Finder veamos la iPhoto Library como un programa, este en realidad es una carpeta. Podríamos entrar en ella haciendo clic con el botón derecho y seleccionando la opción "Mostrar conenido del paquete".
Me baso en las explicaciones de [esta web](http://www.experts-exchange.com/OS/Apple_Operating_Systems/OS_X/Q_28377997.html).

Abro el terminal y, en mi caso, escribo el siguiente comando:

    rsync -avz /Users/franz/Pictures/iPhoto\ Library /Volumes/photo/iphoto

El primer parámetro será la dirección de la librería de iPhoto, esta varía para cada usuario. Si se deja el nombre del origen sin el "\" final, en el destino se creará una carpeta con el nombre "iPhoto Library". Si se añade el "\", no se creará la carpeta y añadirá directamente el contenido de la carpeta iPhoto Library.

Se puede añadir la opción --delete, que eliminaría en el destino los ficheros que se eliminen en el origen en las siguientes sincronizaciones. Yo en mi caso no la tengo, ya que de esa manera puedo recuperar fotos que haya eliminado por equivocación.

El segundo parámetro La opción -v (verbose) muestra por pantalla todos los ficheros que se van analizando.
Si se quieren guardar los mensajes en un fichero log, tenemos que añadir al final la opción

    rsync -avz /Users/franz/Pictures/iPhoto\ Library\ /Volumes/franz/iPhoto\ Library &gt; rsync.log

Si se quiere ambas opciones, entonces sería

    rsync -avz /Users/franz/Pictures/iPhoto\ Library\ /Volumes/franz/iPhoto\ Library | tee rsync.log

En un siguiente post explicaré cómo programar las copias a intervalos de tiempo de forma automática con cron.
