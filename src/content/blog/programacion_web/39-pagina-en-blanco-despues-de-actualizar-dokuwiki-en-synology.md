---
title: Página en blanco después de actualizar dokuwiki en Synology
date: "2017-07-17"
tags: ["programación"]
draft: false
summary: Después de actualizar dokuwiki, me aparcecían todas las páginas en blanco.
---

Después de actualizar dokuwiki, me aparcecían todas las páginas en blanco. Encontré un error en el log de errores de Apache (/var/log/httpd/apache22-error_log accediendo desde ssh al NAS de Synology):

    FastCGI: server "/php56-fpm-handler" stderr: PHP message: PHP Fatal error: &nbsp;Uncaught exception
     Exception' with message 'There is no suitable CSPRNG installed on your system' in /volume1/web/dokuwiki/vendor/paragonie/random_compat/lib/random.php:203, referer: http://192.168.0.24/dok
     uwiki/doku.php

La solución se encontraba en la configuración de php. Hay que añadir un directorio en el open_basedir.

Para ello hay que entrar en la configuracin de Web Station del Panel de Control y seleccionar la sección PHP Settings.

Existe una opción llamada "Customize PHP open_basedir". Hay que añadir al final

    :/dev/urandom

de esa manera el texto quedaría como:

    /var/services/tmp:/etc.defaults:/usr/bin/php:/usr/syno/synoman:/etc:/var/run:/volume1/@tmp/php:/var/services/web:/var/services/photo:/var/services/blog:/var/services/homes:/dev/urandom

Reiniciando el servidor, todo solucionado.
