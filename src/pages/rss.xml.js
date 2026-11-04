import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { useTranslations } from '@/i18n';

const t = useTranslations();

export async function GET(context) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);

  return rss({
    title: t('siteMetadata.title'),
    description: t('siteMetadata.description'),
    site: context.site,
    items: posts.map(({ id, data }) => ({
      title: data.title,
      description: data.summary,
      pubDate: data.date,
      link: `/blog/${id}/`,
      categories: data.tags.map((tag) => tag.id),
    })),
  });
}

