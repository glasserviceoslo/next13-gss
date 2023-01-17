/**
 * This component uses Portable Text to render a post body.
 *
 * You can learn more about Portable Text on:
 * https://www.sanity.io/docs/block-content
 * https://github.com/portabletext/react-portabletext
 * https://portabletext.org/
 *
 */
import { type PortableTextComponents, PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import { urlForImage } from 'src/lib/sanity.image';

const customComponents: PortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <Image
        className="h-auto w-full"
        width={750}
        height={500}
        alt={`Cover Image for ${value.title}`}
        src={urlForImage(value.asset)
          .format('webp')
          .width(750)
          .height(500)
          .url()}
        priority={value.priority}
      />
    ),
  },
  marks: {
    internalLink: ({ children, value }) => {
      return <Link href={`/posts/${value.slug.current}`}>{children}</Link>;
    },
  },
};

export default function PostBody({ content }) {
  return (
    <div className="mx-auto max-w-2xl text-lg leading-relaxed [&_a]:text-blue-500 [&_a]:underline [&_a:hover]:text-blue-800 [&_p]:my-6 [&_ul]:my-6 [&_ol]:my-6 [&_blockquote]:my-6 [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-3xl [&_h2]:leading-snug [&_h3]:mt-8 [&_h3]:mb-4 [&_h3]:text-2xl [&_h3]:leading-snug">
      <PortableText value={content} components={customComponents} />
    </div>
  );
}
