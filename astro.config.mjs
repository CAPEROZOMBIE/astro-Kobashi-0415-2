// @ts-check
// astro.config.mjs

import { defineConfig } from 'astro/config';
// import node from '@astrojs/node';

import cloudflare from '@astrojs/cloudflare'; // クラウドフレアでデプロイ 0415
import preact from "@astrojs/preact"; //検索機能

export default defineConfig({
integrations: [preact({ compat: true })], //検索機能
  output: 'server',
//   adapter: node({
//     mode: 'standalone'
//   }),

  adapter: cloudflare(),// クラウドフレアでデプロイ 0415
  
    // 開発ツールバーを無効化
  devToolbar: {
    enabled: false,
  },
  
});