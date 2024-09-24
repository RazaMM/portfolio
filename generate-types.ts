import 'dotenv/config';
import { exec } from 'node:child_process';

exec(
  `cf-content-types-generator -X -r -s ${process.env.CONTENTFUL_SPACE_ID} -t ${process.env.CONTENTFUL_MANAGEMENT_TOKEN} -e ${process.env.CONTENTFUL_ENVIRONMENT} -o types/contentful`,
  (err, stdout, stderr) => {
    console.log(stdout);
    console.error(stderr);
  }
);
