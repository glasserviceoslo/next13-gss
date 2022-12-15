import Container from 'components/BlogContainer';
import Layout from 'components/BlogLayout';
import HeroPost from 'components/HeroPost';
import MoreStories from 'components/MoreStories';
import type { Post, Settings } from 'lib/sanity.queries';
import { Suspense } from 'react';

import Rive from './Rive';

export default function IndexPage(props: {
  preview?: boolean;
  loading?: boolean;
  posts: Post[];
  settings: Settings;
}) {
  const { preview, loading, posts, settings } = props;
  const [heroPost, ...morePosts] = posts || [];

  return (
    <>
      <Layout preview={preview} loading={loading}>
        <Container>
          <Suspense fallback="loading...">
            <Rive />
          </Suspense>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              mainImage={heroPost.mainImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              description={heroPost.description}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}
