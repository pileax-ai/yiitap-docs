import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import attr from 'markdown-it-attrs'
import { keywords, name, repo } from '../meta'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: './src',
  rewrites: {
    'en/:rest*': ':rest*'
  },
  cleanUrls: true,
  ignoreDeadLinks: true,
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    search: {
      provider: 'local',
      // options: {
      //   appId: 'LBLWR2QCI3',
      //   apiKey: '4338f265da64e33025f821af827dd22e',
      //   indexName: 'pileax'
      // }
    },
    outline: 'deep',
    socialLinks: [
      { icon: 'github', link: repo },
    ],
    footer: {
      message: 'MIT Licensed.',
      copyright: `Copyright © 2024-present ${name}`
    },
  },

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { name: 'keywords', content: keywords }],
  ],

  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
      md.use(attr)
    }
  },

  optimizeDeps: {
  }
})