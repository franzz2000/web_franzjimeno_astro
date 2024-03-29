export const languages = {
  en: 'English',
  es: 'Español'
}
export const defaultLang = 'es' as const;

export const ui = {
  'en': {
    // Site Metadata
    'siteMetadata.title': 'Astro Starter Blog',
    'siteMetadata.headerTitle': 'Astro Starter Blog',   
    'siteMetadata.description': 'A blog created with Astro and Tailwind.css',
    'siteMetadata.language': 'en-US',

    // Pages
    'pages.home.latestPosts': 'Latest posts',
    'pages.home.viewAllPosts': 'View all posts',
    'pages.home.noPosts': 'No posts found',
    'pages.home.readMoreAbout': 'Read more about {title}',
    'pages.home.readMore': 'Read more',
    'pages.tags.title': 'Tags',
    'pages.tags.description': 'All tags used in the blog',
    'pages.tags.allTags': 'All tags',
    'pages.tags.noTags': 'No tags found',
    'pages.tags.viewPosts': 'View all posts with tag {tag}',
    'pages.projects.title': 'Projects',
    'pages.projects.description': 'All projects',
    'pages.projects.allProjects': 'All projects',
    'pages.projects.showcase': 'Showcase your projects',
    'pages.blog.title': 'Blog',
    'pages.blog.description': 'All blog posts',
    'pages.404.title': '404 - Not Found',
    'pages.404.description': 'The page you are looking for does not exist.',
    'pages.404.backToHome': 'Back to home',


    // Components
    'components.scrollTopAndComments.scrollTop': 'Scroll To Top',
    'components.themeSwitcher.toggleDarkMode': 'Toggle Dark Mode',
    'components.card.linkToPost': 'Read more about {title}',
    'components.mobileNav.toggleMenu': 'Toggle Menu',
    'components.listPostCover.publishedAt': 'Published at',
    'components.pagination.previous': 'Previous',
    'components.pagination.next': 'Next',
    'components.socialShareButtons.sharing': 'Sharing is caring!',

    // Navigation
    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'nav.projects': 'Projects',
    'nav.tags': 'Tags',
    'nav.about': 'About',

    // Layouts
    'layouts.authorLayout.aboutAuthor': 'About {author}',
    'layouts.authorLayout.latestPosts': 'Latest author posts',
    'layouts.listWithTagsLayout.allPosts': 'All posts',
    'layouts.listWithTagsLayout.publishedAt': 'Published at',
    'layouts.postLayout.publishedAt': 'Published at',
    'layouts.postLayout.authors': 'Authors',
    'layouts.postLayout.authorName': 'Name',
    'layouts.postLayout.authorTwitter': 'Twitter',
    'layouts.postLayout.draftMessage': 'This is a draft. It might be incomplete or have errors.',
    'layouts.postLayout.tableOfContents': 'Table of Contents',
    'layouts.postLayout.tags': 'Tags',
    'layouts.postLayout.previousPost': 'Previous post',
    'layouts.postLayout.nextPost': 'Next post',
    'layouts.postLayout.relatedPosts': 'Related posts',
    'layouts.postLayout.backToBlog': 'Back to blog',
    'layouts.simplePostLayout.previousPost': 'Previous post: {title}',
    'layouts.simplePostLayout.nextPost': 'Next post: {title}',

    // SEO
    'seo.pagination.page': '%s - Page {page}',
  }, 
  'es': {
    // Site Metadata
    'siteMetadata.title': 'Astro Blog de inicio',
    'siteMetadata.headerTitle': 'Astro Bloog de inicio',   
    'siteMetadata.description': 'Un blog creado con Tailwind y Astro.',
    'siteMetadata.language': 'es-ES',

    // Pages
    'pages.home.latestPosts': 'Últimos posts',
    'pages.home.viewAllPosts': 'Ver todos los posts',
    'pages.home.noPosts': 'No se han encontrado posts',
    'pages.home.readMoreAbout': 'Leer más sobre {title}',
    'pages.home.readMore': 'Leer más',
    'pages.tags.title': 'Etiquetas',
    'pages.tags.description': 'Todas las etiquetas usadas en el blog',
    'pages.tags.allTags': 'Todas las etiquetas',
    'pages.tags.noTags': 'Etiquetas no encontradas',
    'pages.tags.viewPosts': 'Ver todos los posts con la etiqueta {tag}',
    'pages.projects.title': 'Proyectos',
    'pages.projects.description': 'Todos los proyectos',
    'pages.projects.allProjects': 'Todos los proyectos',
    'pages.projects.showcase': 'Mostrar tus proyectos',
    'pages.blog.title': 'Blog',
    'pages.blog.description': 'Todos los posts',
    'pages.404.title': '404 - No encontrada',
    'pages.404.description': 'La página que has consultado no existe.',
    'pages.404.backToHome': 'Vuelta a inicio',


    // Components
    'components.scrollTopAndComments.scrollTop': 'Desplazarse al inicio',
    'components.themeSwitcher.toggleDarkMode': 'Cambiar de modo',
    'components.card.linkToPost': 'Leer más sobre {title}',
    'components.mobileNav.toggleMenu': 'Intercambiar Menúi',
    'components.listPostCover.publishedAt': 'Publicado el',
    'components.pagination.previous': 'Previo',
    'components.pagination.next': 'Siguiente',
    'components.socialShareButtons.sharing': 'Compartir es sano!',

    // Navigation
    'nav.home': 'Inicio',
    'nav.blog': 'Blog',
    'nav.projects': 'Proyectos',
    'nav.tags': 'Etiquetas',
    'nav.about': 'Acerca de',

    // Layouts
    'layouts.authorLayout.aboutAuthor': 'Acerca de {author}',
    'layouts.authorLayout.latestPosts': 'Últimos posts',
    'layouts.listWithTagsLayout.allPosts': 'Todos los posts',
    'layouts.listWithTagsLayout.publishedAt': 'Publicado el',
    'layouts.postLayout.publishedAt': 'Publicado el',
    'layouts.postLayout.authors': 'Autores',
    'layouts.postLayout.authorName': 'Nombre',
    'layouts.postLayout.authorTwitter': 'Twitter',
    'layouts.postLayout.draftMessage': 'Esto es un borrador. Puede que esté incompleto o que tenga errores.',
    'layouts.postLayout.tableOfContents': 'Tabla de contenidos',
    'layouts.postLayout.tags': 'Etiquetas',
    'layouts.postLayout.previousPost': 'Post anterior',
    'layouts.postLayout.nextPost': 'Próximo post',
    'layouts.postLayout.relatedPosts': 'Posts relacionados',
    'layouts.postLayout.backToBlog': 'Volver al blog',
    'layouts.simplePostLayout.previousPost': 'Post anterior: {title}',
    'layouts.simplePostLayout.nextPost': 'Próximo post: {title}',

    // SEO
    'seo.pagination.page': '%s - Página {page}',
  }
} as const;