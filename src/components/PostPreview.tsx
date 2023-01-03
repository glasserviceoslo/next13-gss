import Avatar from 'src/components/AuthorAvatar';
import MainImage from 'src/components/MainImage';
import Date from 'src/components/PostDate';
import type { Post } from 'src/lib/sanity.queries';
import Link from 'next/link';

export default function PostPreview({
  title,
  mainImage,
  date,
  description,
  author,
  slug,
}: Omit<Post, '_id'>) {
  return (
    <div>
      <div className="mb-5">
        <MainImage
          slug={slug}
          title={title}
          image={mainImage}
          priority={false}
        />
      </div>
      <h3 className="mb-3 text-3xl leading-snug">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="mb-4 text-lg">
        <Date dateString={date} />
      </div>
      {description && (
        <p className="mb-4 text-lg leading-relaxed">{description}</p>
      )}
      {author && <Avatar name={author.name} picture={author.picture} />}
    </div>
  );
}
