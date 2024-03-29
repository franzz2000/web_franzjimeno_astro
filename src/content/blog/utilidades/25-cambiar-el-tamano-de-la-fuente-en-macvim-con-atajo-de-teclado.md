---
title: Atajos y extensiones interesantes para MacVim
date: "2014-11-20"
tags: ["programación", "programación_web"]
draft: false
summary: Incluyo unos cuantos atajos y extensiones interesantes para Vim y en concreto para la versión de OSX MacVim.
---

Incluyo unos cuantos atajos y extensiones interesantes para Vim y en concreto para la versión de OSX MacVim.

Cambiar el tamaño de la fuente a través de un atajo de teclado

<!--![imagen1](/images/imagenes_blog/tecla-cmd.png)-->

Cmd + Shift + = ;aumenta el tamaño
<!--![Tecla-cmd]()+!(/images/imagenes_blog/tecla-shift.png)[tecla-shift] width="67" height="50" />&nbsp;+&nbsp;<img src="/images/imagenes_blog/tecla-igual.png" alt="tecla-igual" width="54" height="50" />&nbsp;aumenta el tamaño-->

<!--<img src="/images/imagenes_blog/tecla-cmd.png" alt="tecla-cmd" width="57" height="50" />&nbsp;+&nbsp;<img src="/images/imagenes_blog/tecla-menos.png" alt="tecla-menos" width="51" height="50" />-->

Cmd + - ;disminuye el tamaño

Nota: la tecla mayúscula en el primer caso es para que sea un =, en caso de que el teclado tenga una distribución diferente, habrá que elimnarlo si no se necesita para mostrarlo

## Extensión Vundle
Extensión administradora de plugins para Vim. Podemos instalarla siguiendo las instrucciones de su página en <a href="https://github.com/gmarik/Vundle.vim">github</a>.

## Extensión surround para Vim
Una extensión interesantísima que ayuda a rodear texto con multitud de signos: paréntesis, comillas, corchetes, etiquetas XML.... permite añadir, modificar y eliminar estos signos.
Se puede instalar muy fácilmente gracias a la extensión Vundle que he comentado anteriormente.&nbsp;
Únicamente hay que añadir la siguiente linea en el fichero .vimrc (unix y mac), despues de cargar el paquete Vundle:
Bundle 'tpope/vim-surround'
Podemos ver una introducción a los comandos en la página de <a href="https://github.com/tpope/vim-surround">github</a> del paquete.

## Prevenir "CapsLock" al salir del modo Insert y utilizarla como tecla "Esc"
La tecla CapsLock (Bloqueo mayúscula) es una tecla especial que controla el sistema operativo. Por eso es difícil de controlar a través del programa vim. Cada vez que se sale del modo "insert", si nos olvidamos de desactivarla, podemos hacer muchos "destrozos" en el documento.
Yo utilizo un plugin llamado vim-capslock, que emula la tecla CapsLock por software. Se puede descargar de <a href="https://github.com/tpope/vim-capslock">github</a>.
Si queremos usar CapsLock, en lugar de pulsar esta tecla, lo que debemos pulsar es &lt;C-G&gt;c. Yo desactivo la tecla CapsLock con un programa llamado <a href="https://pqrs.org/osx/karabiner/seil.html.en">Seil</a>.&nbsp;Con <a href="http://www.keyboardmaestro.com/main/">Keyboard Maestro</a>&nbsp;detecto que estoy en macVim y ejecuto el comando para desactivar el CapsLock de Seil. En el momento que salgo de macVim, se vuelve a activar la tecla CapsLock.

Si tienes instalado Vundle, la opción sería:

    Bundle 'tpope/vim-capslock'

El script de Keyboard Maestro para desactivar el CapsLock y utilizar la tecla como si fuera la tecla "Esc":

```
cli=/Applications/Seil.app/Contents/Library/bin/seil
#Activa la modificación de la tecla CapsLock
$cli set enable_capslock 1
/bin/echo -n .
#Si se pulsa CapsLock, será como pulsar la tecla Esc
$cli set keycode_capslock 53
/bin/echo -n .
#Muestra un mensaje de notificación
/bin/echo 'CapsLock desactivado, usa &lt;C-G&gt;c como CapsLock'
El script de Keyboard Maestro para activar de nuevo el CapsLock:
cli=/Applications/Seil.app/Contents/Library/bin/seil
#Desactiva la modificación de la tecla CapsLock
$cli set enable_capslock 0
/bin/echo -n .
#Vuelve a colocar el código de CapsLock por defecto (esto no debería ser necesario)
$cli set keycode_capslock 57
/bin/echo -n .
/bin/echo 'CapsLock activado'
```

El "trigger" de Keyboard Maestro ha de ser cuando la aplicación "MacVim" se activa y desactiva.
