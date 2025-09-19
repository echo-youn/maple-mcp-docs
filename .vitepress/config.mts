import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  title: "Maplestory MCP Docs",
  base: '/',
  cleanUrls: true,
  appearance: 'dark',
  head: [
      ['script', {
        async: true,
        type: 'text/javascript',
        src: 'https://openapi.nexon.com/js/analytics.js?app_id=237485',
      }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/echo-youn/maple-mcp-docs' }
    ]
  }
})
