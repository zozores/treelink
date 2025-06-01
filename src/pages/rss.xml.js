import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE } from "@/siteConfig";

export async function GET(context) {
  const blog = await getCollection("blog");
  return rss({
    title: SITE.name,
    description: SITE.bio,
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publicationDate,
      link: `/blog/${post.slug}`,
    })),
  });
}
