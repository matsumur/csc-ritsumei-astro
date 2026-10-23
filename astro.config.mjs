import { defineConfig } from 'astro/config';

// GitHub Pages (サブディレクトリ運用・カスタムドメイン csc.ritsumei.ac.jp の両方に対応)
// build.format: 'file' により、旧サイトと完全互換の .html URL (home.html, member.html, resarch.html 等) を出力します。
export default defineConfig({
  ...(process.env.SITE_URL ? { site: process.env.SITE_URL } : {}),
  ...(process.env.BASE_PATH ? { base: process.env.BASE_PATH } : {}),
  trailingSlash: 'ignore',
  build: {
    format: 'file',
  },
});
