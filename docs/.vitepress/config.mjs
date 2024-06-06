import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Hardware Lab NITC",
  description: "An official hardware lab wesbsite",
  head: [['link', { rel: 'icon', href: '/img/favicon.ico' }]],
  themeConfig: {
    outline: { level: 'deep' },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Verilog Guide', link: '/Verilog/'},
      { text: 'MIPS Guide', link: '/MIPS/' }
    ],

    search: {
			provider: 'local',
		},

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Verilog', link: '/markdown-examples' },
          { text: 'MIPS', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
			copyright: `Copyright © ${new Date().getFullYear()} National Institute of Technology Calicut`,
		},

  }
})