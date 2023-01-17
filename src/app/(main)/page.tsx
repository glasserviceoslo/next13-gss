import { previewData } from 'next/headers';
import IndexPage from 'src/components/IndexPage';
import PreviewIndexPage from 'src/components/preview/PreviewIndexPage';
import { PreviewSuspense } from 'src/components/preview/PreviewSuspense';
import { getAllPosts, getSettings } from 'src/lib/sanity.client';

export default async function IndexRoute() {
  // Fetch queries in parallel
  const [settings, posts] = await Promise.all([getSettings(), getAllPosts()]);

  if (previewData()) {
    const token = previewData().token || null;

    return (
      <PreviewSuspense
        fallback={
          <IndexPage loading preview posts={posts} settings={settings} />
        }
      >
        <PreviewIndexPage token={token} />
      </PreviewSuspense>
    );
  }

  return <IndexPage posts={posts} settings={settings} />;
}
