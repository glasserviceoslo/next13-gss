import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { urlForImage } from 'src/lib/sanity.image';

interface CoverImageProps {
  title: string;
  slug?: string;
  image: any;
  priority?: boolean;
}

export default function MainImage(props: CoverImageProps) {
  const { title, slug, image: source, priority } = props;
  const image = source?.asset?._ref ? (
    <div
      className={cn('shadow-small', {
        'transition-shadow duration-200 hover:shadow-medium': slug,
      })}
    >
      <Image
        className="h-auto w-full"
        width={2000}
        height={1000}
        alt={`Cover Image for ${title}`}
        src={urlForImage(source).format('webp').height(1000).width(2000).url()}
        sizes="100vw"
        priority={priority}
      />
    </div>
  ) : (
    <div className="bg-slate-200 pt-[50%]" />
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
