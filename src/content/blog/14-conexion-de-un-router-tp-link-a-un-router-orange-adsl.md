---
title: Conexión de un router TP-LINK a un router orange ADSL
date: "2013-08-17"
tags: ["default"]
draft: false
summary: He estado buscando en numerosos sitios la forma de hacer una secuencia de grafos que mostraran cómo se iban recolocando los vértices aplicando un determinado algoritmo dando sensación de movimiento, y no encontraba nada hasta que llegué a esta dirección
---

Este verano nos hemos ido de vacaciones con la familia y para asegurar una conexión a internet Wifi en sitios donde solo la había por cable, me he llevado el router TP-LINK WR841N. De esa manera, me aseguraba poder conectar todos mis aparatejos (iphone, ipad...) por wifi en hoteles, casas... que no tuvieran esa opción.

Cual a sido mi sorpresa cuando al ir a conectarlo a un router de los que daba orange hace unos años con conexión a ADSL, exactamente el Thomson SpeedTouch 530, no conseguía conectarme.

Pensaba que con conectar el TP-LINK, este actuaría como si fuera un ordenador más, recibiría su IP y listos, a navegar. Pues no, al conectarlo al Thomson, que solo tiene una salida Ethernet, no me conectaba.

El router recibía su IP, pero luego no permitía ver ninguna página web. Los dispositivos que se conectaban por Wifi tampoco...

Finalmente lo conseguí y descubrí cual era el problema.

El TP-link hay que configurarlo dentro del apartado de WAN para que realice una conexión pppoE, introduciendo el usuario y password que da orange para ello, que en mi caso eran:

**sXXXXXXXXX@adslorange** y la contraseña **123456**, donde XXXXXXXXXX es el número de teléfono desde el cual se conecta uno.

Aquí muestro una captura de la página de configuración:

![configuracion tp-link](/static/images/configuracion_tp-link.png) 
