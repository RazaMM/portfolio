import * as contentful from 'contentful';

const Contentful = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID ?? '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? '',
  environment: process.env.CONTENTFUL_ENVIRONMENT ?? 'master',
});

const ContentfulPreview = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID ?? '',
  accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN ?? '',
  environment: process.env.CONTENTFUL_ENVIRONMENT ?? 'master',
  host: 'preview.contentful.com',
});

export const getClient = (preview: boolean = false) => {
  return preview ? ContentfulPreview : Contentful;
};
