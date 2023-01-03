import Container from 'src/components/BlogContainer';
import Layout from 'src/components/BlogLayout';
import MoreStories from 'src/components/MoreStories';
import PostBody from 'src/components/PostBody';
import PostHeader from 'src/components/PostHeader';
import PostTitle from 'src/components/PostTitle';
import SectionSeparator from 'src/components/SectionSeparator';
import type { Post, Settings } from 'src/lib/sanity.queries';
import { notFound } from 'next/navigation';

export default function PostPage(props: {
  preview?: boolean;
  loading?: boolean;
  data: { post: Post; morePosts: Post[] };
  settings: Settings;
}) {
  const { preview, loading, data, settings } = props;
  const { post = {} as any, morePosts = [] } = data || {};

  const slug = post?.slug;

  if (!slug && !preview) {
    notFound();
  }

  return (
    <Layout preview={preview} loading={loading}>
      <Container>
        {preview && !post ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <PostHeader
                title={post.title}
                mainImage={post.mainImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.body} />
            </article>
            <SectionSeparator />
            {morePosts?.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  );
}
