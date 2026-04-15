// @ts-check
// astro.config.mjs

import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import preact from "@astrojs/preact"; //検索

export default defineConfig({
integrations: [preact({ compat: true })], //検索
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  
    // 開発ツールバーを無効化
  devToolbar: {
    enabled: false,
  },
  
});