import Link from 'next/link';
import AuthorAvatar from 'src/components/AuthorAvatar';
import MainImage from 'src/components/MainImage';
import Date from 'src/components/PostDate';
import type { Post } from 'src/lib/sanity.queries';

export default function HeroPost(
  props: Pick<
    Post,
    'title' | 'mainImage' | 'date' | 'description' | 'author' | 'slug'
  >,
) {
  const { title, mainImage, date, description, author, slug } = props;
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <MainImage slug={slug} title={title} image={mainImage} priority />
      </div>
      <div className="mb-20 md:mb-28 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
        <div>
          <h3 className="mb-4 text-4xl leading-tight lg:text-6xl">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title || 'Untitled'}
            </Link>
          </h3>
          <div className="mb-4 text-lg md:mb-0">
            <Date dateString={date} />
          </div>
        </div>
        <div>
          {description && (
            <p className="mb-4 text-lg leading-relaxed">{description}</p>
          )}
          {author && (
            <AuthorAvatar name={author.name} picture={author.picture} />
          )}
        </div>
      </div>
    </section>
  );
}
