---
title: Configurar Vite para crear páginas offline
date: "2024-04-02"
tags: ["programación_web"]
draft: false
summary: Para un proyecto que estoy realizando necesito que la página web que voy a crear permita ejecutarse sin necesidad de servidor
---

Para un proyecto que estoy haciendo, tengo que crear una página web que permita generarse como un fichero único de html y js, de manera que se pueda abrir haciendo doble clic sobre ella sin que sea necesario subirla a un servidor.

Dejo aquí como crear un proyecto y utilizar esta opción.

Voy a poner un ejemplo creando una página con vite y Typescript. Creamos un proyecto vite:

    npm create vite@latest -- --template react-ts

Una vez creado el proyecto añadiremos el plugin vite-plugin-make-offline

    npm install vite-plugin-make-offline

Luego añadiremos una opción más en el fichero package.json dentro de "scripts" para poder ejecutar el script.

    "build-offline": "tsc && vite build --config vite.config.offline.ts",

Crearemos un fichero nuevo "vite.config.offline.ts" que sea una copia del "vite.config.ts"

El fichero ha de ser algo similar a esto:

```javascript
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { makeOffline } from "vite-plugin-make-offline";

export default defineConfig({
  plugins: [react(), makeOffline()], // Este es el plugin 😃
})
````

Ahora podremos ejecutar y nos creará los ficheros en el directorio de dist

    npm run build-offline
