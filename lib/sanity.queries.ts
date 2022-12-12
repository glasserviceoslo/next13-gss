import { groq } from 'next-sanity';

const postFields = groq`
  _id,
  title,
  date,
  excerpt,
  mainImage,
  "slug": slug.current,
  "author": author->{name, picture},
`;

export const settingsQuery = groq`*[_type == "settings"][0]`;

export const indexQuery = groq`
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`;

export const postAndMoreStoriesQuery = groq`
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${postFields}
  }
}`;

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`;

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`;

export interface Author {
  name?: string;
  picture?: any;
}

export interface Post {
  _id: string;
  title?: string;
  mainImage?: any;
  date?: string;
  author?: Author;
  slug?: string;
  body?: any;
  categories?: any;
  seoTitle?: string;
  description?: string;
  keywords?: string[];
  keyphrase?: string;
}

export interface Settings {
  title?: string;
  description?: any[];
  ogImage?: {
    title?: string;
  };
}
