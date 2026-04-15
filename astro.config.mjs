import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare'; // クラウドフレアでデプロイ 0415
import preact from "@astrojs/preact"; //検索機能

export default defineConfig({
integrations: [preact({ compat: true })], //検索機能
  output: 'server',
  adapter: cloudflare(),// クラウドフレアでデプロイ 0415
  
    // 開発ツールバーを無効化
  devToolbar: {
    enabled: false,
  },
  
});