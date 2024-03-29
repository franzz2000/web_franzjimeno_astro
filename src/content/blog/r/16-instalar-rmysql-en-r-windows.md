---
title: Instalar RMySQL en R (Windows) (solucionado)
date: "2013-10-03"
tags: ["programación", "r"]
draft: false
summary: R tiene una librería que permite conectarse a MySQL de forma sencilla, pero para poder utilizar esta librería es necesario instalar las fuentes de la misma, ya que no existen los binarios para Windows.
---

R tiene una librería que permite conectarse a MySQL de forma sencilla, pero para poder utilizar esta librería es necesario instalar las fuentes de la misma, ya que no existen los binarios para Windows.

Si miramos en la [web del desarrollador](http://biostat.mc.vanderbilt.edu/wiki/Main/RMySQL) encontramos unas instrucciones para la instalación.

Primeramente deberemos tener instalado [Rtools](http://cran.r-project.org/bin/windows/Rtools/), una herramienta para compilar los paquetes de R.

Después debemos tener instalado un [servidor MySQL]( https://dev.mysql.com/downloads/mysql/ ), con sus librerías de desarrollo. No vale la instalación de XAMPP, ya que no instala las librerías.

Para que la instalación encuentre la ruta al servidor MySQL es necesario que la variable de entorno MYSQL_HOME indique dónde encontrar los ficheros del servidor. Para eso definimos la variable desde R con:

    Sys.setenv("MYSQL_HOME"="C:/Program Files/MySQL/MySQL Server 5.6")

Una vez tenemos definida la variable ya podemos instalar el paquete:

    install.packages("RMySQL", type="source")

**Nota:**

Por alguna razón que desconozco, me aparece un error indicando que la instalación no encuentra una libreria libmysql.dll.

    gcc.exe: error: C:/Program Files/MySQL/MySQL Server 5.6/bin/libmySQL.dll: No such file or directory

Como os fijáis, el programa intenta encontrar el fichero libmySQL.dll en la carpeta bin de MySQL. Pues lo que he hecho es copiar todas las librerías en bin. Copio todos los ficheros y carpetas que hay dentro de la carpeta "lib" de mysql a la carpeta "bin", y todo solucionado. Luego se pueden volver a eliminar del fichero bin, ya que eso solo es necesario para la compilación del paquete.

Un [artículo que describe de forma sencilla el paquete se puede encontrar en R-bloggers](http://www.r-bloggers.com/mysql-and-r/)
