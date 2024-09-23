import { getClient } from '@/lib/contentful';

export const getExperiences = async (preview: boolean = false) => {
  const client = getClient(preview);

  const data = await client.getEntries({
    content_type: 'experience',
  });

  return data.items.map((item) => ({ ...item.fields }));
};
