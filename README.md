# Web de Franz Jimeno

[**Visitar la web → franzjimeno.es**](https://franzjimeno.es)

Repositorio de mi página web personal y blog, donde recopilo artículos, notas y soluciones sobre **tecnología, programación, redes y herramientas informáticas**. La idea es documentar lo que voy aprendiendo y compartir soluciones que pueden resultar útiles a otras personas.

La web está escrita principalmente en español y se publica como sitio estático mediante **Astro** y **GitHub Pages**.

## Contenido

- **Inicio:** últimas entradas publicadas.
- **Blog:** artículos y notas técnicas, con paginación.
- **Etiquetas:** navegación por temas.
- **Acerca de:** información sobre el autor.
- **Proyectos:** sección disponible en la web; actualmente conserva contenido de ejemplo de la plantilla.

También dispone de un [canal RSS](https://franzjimeno.es/rss.xml) para seguir las publicaciones.

## Tecnologías

| Tecnología | Uso |
| --- | --- |
| [Astro 5](https://astro.build/) | Generación del sitio estático |
| [TypeScript](https://www.typescriptlang.org/) | Código y configuración |
| [Tailwind CSS 4](https://tailwindcss.com/) | Estilos |
| [MDX](https://mdxjs.com/) | Contenido enriquecido del blog |
| [SolidJS](https://www.solidjs.com/) | Componentes interactivos |
| [GitHub Actions](https://github.com/features/actions) | Compilación y despliegue automático |
| [GitHub Pages](https://pages.github.com/) | Alojamiento y publicación |

El proyecto incluye soporte para imágenes, temas claro y oscuro, metadatos SEO, mapa del sitio y RSS.

## Desarrollo local

Se recomienda utilizar una versión reciente de **Node.js** (por ejemplo, Node.js 24) y npm.

```bash
# Clonar el repositorio
git clone https://github.com/franzz2000/web_franzjimeno_astro.git
cd web_franzjimeno_astro

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm run dev
```

La web de desarrollo estará disponible en [http://localhost:4321](http://localhost:4321).

| Comando | Función |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Comprueba el proyecto con Astro y genera `dist/` |
| `npm run preview` | Previsualiza localmente la compilación |
| `npm run astro -- --help` | Muestra la ayuda de Astro |

## Organización del proyecto

```text
.github/workflows/deploy.yml  Despliegue en GitHub Pages
src/
├── components/              Componentes de la interfaz
├── content/
│   ├── authors/             Información sobre autores
│   ├── blog/                Artículos en Markdown/MDX
│   └── tags/                Etiquetas
├── i18n/                    Textos de la interfaz
├── layouts/                 Plantillas de página
├── pages/                   Rutas, páginas y RSS
├── consts.ts                Metadatos y navegación
└── functions.ts             Utilidades del blog
astro.config.mjs             Configuración de Astro
```

Las colecciones de contenido y sus campos se definen en `src/content/config.ts`.

### Añadir una entrada

Crea un archivo `.md` o `.mdx` en `src/content/blog/`. Por ejemplo:

```md
---
title: "Título de la entrada"
date: 2026-11-04
summary: "Breve descripción del artículo."
draft: false
---

Aquí comienza el contenido de la entrada.
```

Se pueden añadir campos opcionales como `cover`, `tags`, `authors`, `lastmod` o `related`, respetando los esquemas de `src/content/config.ts`. Las etiquetas y los autores se referencian por sus identificadores de colección.

Para modificar el título del sitio, la URL, los enlaces sociales o la navegación, consulta `src/consts.ts`. Los textos de la interfaz se encuentran en `src/i18n/ui.ts`.

## Publicación

La web se publica en **[https://franzjimeno.es](https://franzjimeno.es)**, con dominio personalizado y HTTPS gestionado por GitHub Pages.

El workflow `[.github/workflows/deploy.yml](.github/workflows/deploy.yml)` se ejecuta automáticamente con cada `push` a la rama `main` (y también se puede lanzar manualmente desde GitHub Actions). Sus dos trabajos principales son:

1. **Build:** instala las dependencias, compila Astro y sube el artefacto de la web.
2. **Deploy:** publica el artefacto en GitHub Pages.

Para publicar cambios:

```bash
git add .
git commit -m "Actualizar contenido"
git push origin main
```

El sitio estático se genera en `dist/`; no es necesario alojar un servidor Node.js para servirlo en producción.

## Origen del proyecto

La web parte de la plantilla [Tailwind Astro Starting Blog](https://github.com/wanoo21/tailwind-astro-starting-blog), adaptada a mi contenido, configuración y despliegue actual.
