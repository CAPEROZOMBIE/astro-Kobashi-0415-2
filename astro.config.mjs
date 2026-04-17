// @ts-check
// astro.config.mjs

import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import react from '@astrojs/react';

// import cloudflare from '@astrojs/cloudflare'; // クラウドフレアでデプロイ 0415
// import preact from "@astrojs/preact"; //検索機能

export default defineConfig({
integrations: [react()], //検索機能
// integrations: [preact()], //検索機能
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),

//   adapter: cloudflare(),// クラウドフレアでデプロイ 0415
  
    // 開発ツールバーを無効化
  devToolbar: {
    enabled: false,
  },
//   prefetch:false, //いらないかなプリフェッチ

// microcmsをwebpの画像に
  image: {
    domains: ["images.microcms-assets.io"], // microCMSのドメイン
  },
  
});