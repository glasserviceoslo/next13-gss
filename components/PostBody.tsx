/**
 * This component uses Portable Text to render a post body.
 *
 * You can learn more about Portable Text on:
 * https://www.sanity.io/docs/block-content
 * https://github.com/portabletext/react-portabletext
 * https://portabletext.org/
 *
 */
import { PortableText, type PortableTextComponents } from '@portabletext/react'
import { urlForImage } from 'lib/sanity.image';
import Image from 'next/image';
import Link from 'next/link';


import styles from './PostBody.module.css'

const customComponents: PortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <Image
      className="h-auto w-full"
      width={500}
      height={250}
      alt={`Cover Image for ${value.title}`}
      src={urlForImage(value.asset).url()}
      sizes="100vw"
      priority={value.priority}
    />
    ),
  },
  marks: {
    internalLink: ({ children, value }) => {
      return (
        <Link href={`/posts/${value.slug.current}`}>
          {children}
        </Link>
      );
    }
  }
};


export default function PostBody({ content }) {
  return (
    <div className={`mx-auto max-w-2xl ${styles.portableText}`}>
      <PortableText value={content} components={customComponents} />
    </div>
  )
}
