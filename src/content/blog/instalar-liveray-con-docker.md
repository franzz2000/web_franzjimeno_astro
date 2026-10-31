---
title: Instalar Liferay con Docker
date: "2022-06-17"
tags: ["programación",]
draft: false
summary: Cómo instalar Liveray en un Docker
cover: '@/assets/og-image.png'
---

# Introducción

Liveray es un CMS que se ejecuta bajo Java que se utiliza mucho en el entorno empresarial, por tratarse de una herramienta que permite mucha flexibilidad y control de acceso a los diferentes apartados de una web.

En este post vamos a describir cómo instalar la herramienta en un contenedor de Docker en un Mac.

Para instalar Liferay es necesario tener instalado Docker. En un Mac podemos instalarlo a través de homebrew.

Una vez tenemos Docker procederemos a instalar Liferay. Ejecutaremos el siguiente comando en la consola/terminal.

```bash
docker run -it -m 8g -p 8080:8080 liferay/portal:7.4.3.2-ga22
```
Se instalará la versión que se encuentre actualmente activa y que aparece al final del comando. El parámetro -it permitirá cerrar el contenedeor pulsando las teclas Ctrl-C. De otra manera será necesario escribir el siguiente comando en la consola para cerrar el contenedor.

```bash
docker kill {containerId}
```
El parámetro -m libera 8Gb de espacio para la aplicación.

El parámetro -p 8080:8080 mapea el puerto 8080 del contenedor con el puerto 8080 del ordenador local, de esta manera podremos acceder Liferay DXP desde un navegador a través del puerto 8080, escribiendo la siguiente url:
 
```bash
http://localhost:8080
```

# Variables de entorno

Se pueden configurar variables a través de la variable de entorno LIFERAY_JVM_OPTS. Se puede encontrar una descripción de las variables en https://github.com/liferay/liferay-portal/blob/master/portal-impl/src/portal.properties

Todas las variables comenzarán por `LIFERAY_` y se continuarán del nombre de la variable. Si esta tiene algún punto, este se sustituirá por `_PERIOD_`.


Por ejemplo `locales.enabled` será `LIFERAY_LOCALES_PERIOD_ENABLED`.

Las variables que contengan una letra mayúscula irán precedidas de `_UPPERCASE` y la letra en mayúscula. Se verá mejor en un ejemplo. La variable `jdbc.default.driverClassName` sería `JDBC_PERIOD_DEFAULT_DRIVER_UPPERCASEC_LASS_UPPERCASEN_AME`.

Las variables las podemos agregar con el parámetro `-e`

```bash
docker run -it -m 8g -p 8080:8080 -e LIFERAY_JDBC_PERIOD_DEFAULT_PERIOD_JNDI_PERIOD_NAME=jdbc/MyPool liferay/dxp:[tag] 
```

Podemos concatenar parámetros con `-e`. Ej: `-e VARIABLE_A=valor -e VARIABLE_B=valor`

También podemos añadir las propiedades en el fichero `portal-ext.properties`

```bash
echo "jdbc.default.jndi.name=jdbc/MyPool" >> [host folder]/files/portal-ext.properties
```

# Sistema de archivos

Los contenedores de Docker no son persistentes, cada vez que se reinicie el contenedor se perderán todos los datos introducidos. Para probar cambios sin tener que guardar una nuev imagen, se puede mapear el sistema de archivos del cliente en el sistema de ficheros del contenedor.

Arranca el contenedor con la opción `-v $(pwd)/xyz123:/mnt/liferay` para vincular el directorio local `$(pwd)/xyz123/` al directorio `/mnt/liferay` del contenedor.

`$(pwd)` es el directorio donde se ejecuta el comando y `xyz123` será el directorio que deseemos utilizar para ubicar los ficheros en nuestro directorio.

Los ficheros que se encuentren en el directorio `$(pwd)/xyz123` se encontrarán también en el directorio `/mnt/liferay/file` del contenedor y se compiarán en el directorio `/opt/liferay` antes de que arranque Liferay DXP.

Por ejemplo, si quieres cambiar el fichero `setenv.sh` de Tomcat, entonces añade el fichero `setenv.sh` en el directorio `$(pwd)/xyz123/files/tomcat/bin/setenv.sh` y el fichero sobreescribirá el fichero `setenv.sh` que se encuentra en `/opt/liferay/tomcat/bin/setenv.sh` antes de que arranque Liferay DXP.


# Scripts

Todos los scripts en el directorio `/mnt/liferay/scripts` se ejecutarán antes de que arranque Liferay DXP. Coloca los ficheros en `$(pwd)/xyz123/deploy` para instalar los módulos en el momento del arranque.

Se puede encontrar más información en https://learn.liferay.com/dxp/latest/en/installation-and-upgrades/installing-liferay/using-liferay-docker-images.html
