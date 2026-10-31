---
title: Autenticación en JSF2 con JAAS
date: "2011-04-07"
tags: ["programación"]
draft: false
summary: En este post voy a hablar de cómo hacer para que un programa en JSF2 utilice JAAS (Java Authentication and Authorization Service) para gestionar usuarios, autenticarlos con la ayuda del servidor y usar este sistema de seguridad en las páginas de JSF2 y en los Java Beans.
---

En este post voy a hablar de cómo hacer para que un programa en JSF2 utilice JAAS (Java Authentication and Authorization Service) para gestionar usuarios, autenticarlos con la ayuda del servidor y usar este sistema de seguridad en las páginas de JSF2 y en los Java Beans.

Primeramente hay que aclarar unos cuantos aspectos sobre unos cuantos términos:

- **Dominio** (Realm): Un dominio es una "base de datos", que puede ser un fichero (flat file) con información sobre el usuario/clave + información sobre el grupo al que pertenece, pueden ser bases de datos o directorios LDAP o cualquier cosa que puedas imaginar, como el acceso utilizando la clave de Facebook o de google. Puede ser utilizado por múltiples aplicaciones.
- **Usuario** (user): El usuario es una persona o programa que se quiere autenticar en nuestra aplicación/servidor. En el caso de que la aplicación sea una página web accedida por personas, estos serán tus usuarios. Si ofreces un servicio web (Webservice), los programas que accedan también serán usuarios. Un usuario pertenece a un dominio, por lo que puede ser un usuario válido para diferentes aplicaciones. (ver la función de principal más adelante)
- **Papel** (role): Los papeles se asignan a usuarios y/o grupos en una aplicación. Ejemplo: INVITADO para los usuarios no autenticados, USUARIO_REGISTRADO par un usuario autenticado, MODERADOR o ADMINISTRADOR para usuarios especiales...
- **Grupo** (group): Los Grupos son como los papeles (roles), pero pueden usarse para diferentes aplicaciones y se asignan a diferentes papeles en una determinada aplicación.
- **Principal** (principal): Un principal es un usuario autenticado en el marco de una aplicaicón. El mismo usuario puede tener múltiples principales en diferentes aplicaciones. Un principal se identifica por su nombre (name) y es autenticado utilizando datos de autenticación (authentication data; credentials)
- **Dominio de politica de seguridad** (security policy domain): También llamado dominio de seguridad (security domain) o dominio (realm). Se trata de la base de datos donde se encuentran los usuarios. En este caso es donde se utilizan los dominios (realms), en la aplicación 1, aplicación 2, aplicación n.
- **Atributos de seguridad** (security attributes): Son atributos asociados a cada principal, como "está autorizado a acceder al area de administrador" o similares.
- **Credencial** (credential): Contiene o referencia a los atributos de seguridad. se utilizan para autenticar a un principal en Java EE (aplicación web).

Una vez entendidos estos conceptos, podemos comenzar a crear nuestro sistema de autenticación.

Un contexto de login (LoginContext) es utilizado en las aplicaciones para autenticar a un usuario, independientemente de el sistema de autenticación que se utilice. Un sistema de autenticación puede ser una autenticación a través de un fichero, una base de datos o un sistema de autenticación LDAP, o a través de certificados.

La clase LoginContext está incluida en el paquete javax.security.auth.login y contiene métodos usados para autenticar Individuos(Subjects)/usuarios como hemos visto anteriormente. La documentación de java dice que:

Un individuo (subject) es una identidad al que un sistema quiere autenticar y dar permisos de acceso. Un individuo puede ser un humano, un proceso, o una máquina...

Existe un poco de confusión entre individuo y usuario, aunque en un principio son lo mismo.

En algún sitio de la documentación de Java, se explica que un individuo pued interactuar con diferentes autoridades (aplicaciones) y puede tener diferentes claves (credentials) para cada una. Para representar a este individuo/usuario en estas aplicaciones se utiliza la clase java.security.Principal.

Nuestro contexto de login (LoginContext) invoca a varios módulos de login (LoginModules), estos serán los encargados de gestionar las diferentes maneras de autenticación (a través de un formulario, HTTP-Basico, HTTP-Digest, etc). La interfaz LoginModule es parte del paquete javax.security.auth.spi. Si en algún momento alguien quiere integrar una conexión con Facebook o similar, este es el lugar donde consultar.

¿Pero como sabe el LoginContext, cual es el LoginModule a invocar? Esto se realiza a través de un objeto de Configuración (Configuration).

En resumidas cuentas:

- Tenemos unos LoginModules que gestionan diferentes formas de autenticación (ficheros, bases de datos, ldap...)
- Tenemos un LoginContext encargados de recoger las credenciales del usuario y enviándolas a los LoginModules.
- Tenemos configuraciones que especifican que LoginModules debe utilizar el LoginContext.
- Un cliente suministra sus credenciales al LoginContext. El LoginContext consulta en su configuración que LoginModules utilizar y autentica al cliente con las credenciales que aporta a través de los LoginModules.

Vamos a aprovechar que en nuestro servidor de aplicaciones posee este sistema de autenticación en lugar de utilizar uno propio para nuestra aplicación web.

Configuración:

Editamos el fichero web.xml de nuestra aplicación.

Aquí definiremos, cómo conseguir información de autenticación de nuestro usuario. Utilizaremos un ejemplo de una autenticación a través de formulario. La autenticación a través de HTTP-Basic ya no se no se suele utilizar.


```bash
    FORM
    nombreDelDominio
    /login.xhtml
    /loginError.xhtml
```

Con esta configuración, puedes crear el formulario de login en el formato que quieras.

login.xhtml

```bash
    <form method="post" action="#{request.contextPath}/j_security_check">;
    <label for="username">Userid</label><input id="username" name="j_username" type="text" />
    <label for="password">Password</label><input id="password" name="j_password" type="password" />
    <input type="submit" value="Login" />
    </form>
```

En la siguiente parte, veremos como se puede hacer con jsf/facelets.

Ahora ya tenemos nuestra página de login. Para hacer un Logout simplemente hay que hacer un link a /j_security_logout

Ahora ya tenemos nuestro login y logout, pero por ahora no funcionan. Tenemos que indicar con qué nos estamos autenticando. En este post, lo llamamos LoginModule, en Glassfish v3 se llama Dominio (Realm) y lo hemos configurado con el Login-Config antes.

En el siguiente apartado veremos como crear nuestro propio dominio (realm) que se adapte a nuestras necesidades.

Ya tenemos todo lo que necesitamos para nuestra autenticación básica, pero ahora necesitamos un grupo apara mapear los papeles (roles), que necesitaremos para cosas como #{request.isUserInRole('ADMIN')} o para anotar nuestros beans (ver más adelante para entender esto).

Lo que tendremos que hacer es mapear los grupos en papeles (roles). Primero tenemos que indicar a nuestra aplicación que papeles tenemos. Esto lo hacemos editando el fichero web.xml.

```bash
    <security-role>
    <description>todos los usuarios con el papel de Admin</description>
    <role-name>ADMIN</role-name>
    </security-role>
    <security-role>
    <description>todos los usuarios que se han autenticado</description>
    <role-name>LOGGEDIN_USERS</role-name>
    </security-role>
    <security-role>
    <description>todos los usuarios que son moderadores</description>
    <role-name>MODERATOR</role-name>
    </security-role>
```

Ahora ya podemos mapear los grupos que cogemos del dominio con nuestros papeles. Esto lo debemos hacer en /WEB-INF/sun-web.xml (si utilizamos Glassfish v3). El fichero será así:
