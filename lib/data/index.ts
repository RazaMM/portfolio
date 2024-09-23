import { GraphQLClient } from 'graphql-request';
import { type DocumentNode } from 'graphql/language';

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIROMENT}`;
const client = new GraphQLClient(endpoint);

export const graphql = async (query: DocumentNode, variables: any, preview: boolean) => {
  return client.request(
    query,
    { ...variables, preview: preview },
    {
      authorization: `Bearer ${preview ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN : process.env.CONTENTFUL_ACCESS_TOKEN}`,
    }
  );
};
