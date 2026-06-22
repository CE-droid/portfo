import fs from 'fs';
import path from 'path';

export const POSTS_PATH = path.join(process.cwd(), 'posts');
export const CASE_STUDIES_PATH = path.join(process.cwd(), 'case-studies');

// postFilePaths is the list of mdx files inside the POSTS_PATH directory
export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));

// Exclude these case studies when building the site (removed by request)
const EXCLUDED_CASE_STUDIES = new Set([
  'flurrish.mdx',
  'fakestore.mdx',
  'hopin-technologies.mdx',
  'hellotax.mdx',
]);

// caseStudiesFilePaths is the list of mdx files inside the CASE_STUDIES_PATH directory
export const caseStudiesFilePaths = fs
  .readdirSync(CASE_STUDIES_PATH)
  .filter((p) => /\.mdx?$/.test(p))
  .filter((p) => !EXCLUDED_CASE_STUDIES.has(p));
