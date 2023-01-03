import BlogMeta from 'src/components/BlogMeta';
import * as demo from 'src/lib/demo.data';
import { getPostBySlug, getSettings } from 'src/lib/sanity.client';
import { urlForImage } from 'src/lib/sanity.image';

export default async function SlugHead({
  params,
}: {
  params: { slug: string };
}) {
  const [{ title = demo.title }, post] = await Promise.all([
    getSettings(),
    getPostBySlug(params.slug),
  ]);
  return (
    <>
      <title>{post.title ? `${post.title} | ${title}` : title}</title>
      <BlogMeta />
      {post.mainImage?.asset?._ref && (
        <meta
          property="og:image"
          content={urlForImage(post.mainImage)
            .width(1200)
            .height(627)
            .fit('crop')
            .url()}
        />
      )}
    </>
  );
}
