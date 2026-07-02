import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  return rss({
    title: '流雲の宝藏',
    description: '记录技术、设计与生活里那些值得留下的瞬间。',
    site: context.site ?? 'https://zcloud-blog.vercel.app',
    items: posts
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .map((post) => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.pubDate,
        link: `/posts/${post.id}/`,
      })),
  });
}
