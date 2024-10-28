import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "艾默库教程合集",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '艾默库', link: '/艾默库教程合集' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: '脚本问题汇总', link: '/艾默库教程合集 f4fb2bddab154d8db95baf18176bdbc7/脚本问题汇总 12d1fc355aa981c995c7f37bcd00fa42' },
          { text: '金山文档使用步骤', link: '艾默库教程合集 f4fb2bddab154d8db95baf18176bdbc7/金山文档使用步骤 12d1fc355aa981b4bed5e7ea7395b8b5' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
