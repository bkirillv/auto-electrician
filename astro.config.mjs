import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const repository = process.env.GITHUB_REPOSITORY?.split('/');
const owner = repository?.[0];
const repo = repository?.[1];
const customSite = process.env.SITE_URL?.replace(/\/$/, '') || undefined;
const isUserSite = Boolean(owner && repo === `${owner}.github.io`);
const site = customSite ?? (owner ? `https://${owner}.github.io` : 'http://localhost:4321');
const base = process.env.BASE_PATH || (repo && !isUserSite && !customSite ? `/${repo}` : '/');

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: {
    format: 'directory'
  }
});
