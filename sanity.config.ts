/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...index]].tsx` route
 */

import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash';
import { media } from 'sanity-plugin-media';
import Logo from 'src/components/studio/Logo';
import {
  apiVersion,
  dataset,
  previewSecretId,
  projectId,
} from 'src/lib/sanity.api';
import { previewDocumentNode } from 'src/plugins/previewPane';
import { productionUrl } from 'src/plugins/productionUrl';
import { settingsPlugin } from 'src/plugins/settings';
import authorType from 'src/schemas/author';
import categoryType from 'src/schemas/category';
import postType from 'src/schemas/post';
import settingsType from 'src/schemas/settings';

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  studio: {
    components: {
      logo: Logo,
    },
  },
  schema: {
    // If you want more content types, you can add them to this array
    types: [postType, categoryType, authorType],
  },
  plugins: [
    deskTool({
      // structure: settingsStructure(settingsType),
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
      defaultDocumentNode: previewDocumentNode({ apiVersion, previewSecretId }),
    }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    settingsPlugin({ type: settingsType.name }),
    // Add the "Open preview" action
    productionUrl({
      apiVersion,
      previewSecretId,
      types: [postType.name, settingsType.name],
    }),
    media(),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
