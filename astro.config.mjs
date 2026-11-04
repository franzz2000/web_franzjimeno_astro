import {defineConfig} from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwindcss from "@tailwindcss/vite";
import rehypeExternalLinks from 'rehype-external-links';
import { unified } from '@astrojs/markdown-remark';

import {SITE_METADATA} from "./src/consts.ts";

import solidJs from '@astrojs/solid-js';

// https://astro.build/config
export default defineConfig({
    site: SITE_METADATA.siteUrl,
    integrations: [mdx(), sitemap(), solidJs()],
    vite: {
        plugins:[tailwindcss()],
    },
    markdown: {
      processor: unified({
        rehypePlugins: [[rehypeExternalLinks, {
          target: "_blank",
          rel: ['noopener', 'noreferrer']
        }]],
      }),
    }
});
