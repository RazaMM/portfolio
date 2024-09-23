const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}`;

export const graphql = async (query: string, variables: object = {}, preview: boolean = false) => {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${preview ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN : process.env.CONTENTFUL_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({ query, variables: { ...variables, preview: preview } }),
  });

  const data = await response.json();

  if (Array.isArray(data.errors)) {
    const errorText = data.errors.reduce((acc: string, error: any) => {
      const locations = error.locations?.reduce((acc: string, location: any) => {
        return `${acc}\tline ${location.line} column ${location.column}\n`;
      }, '');

      return `${acc}\n${error.message}\n${locations}`;
    }, '');

    throw new Error(errorText);
  }

  return data;
};

export const parseRichText = (text: string) => {};
