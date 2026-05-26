import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'LPIC試験対策',
  description: 'LPIC-1 101試験 事前学習資料',
  lang: 'ja',
  themeConfig: {
    nav: [
      { text: 'ホーム', link: '/' },
      { text: 'LPIC-1 101', link: '/lpic101/chapter1' },
    ],
    sidebar: {
      '/lpic101/': [
        {
          text: 'LPIC-1 101編',
          items: [
            { text: '第1回：システムアーキテクチャ', link: '/lpic101/chapter1' },
          ],
        },
      ],
    },
    socialLinks: [],
    footer: {
      message: 'LPIC試験対策サイト',
    },
    outline: {
      label: '目次',
      level: [2, 3],
    },
    docFooter: {
      prev: '前のページ',
      next: '次のページ',
    },
    darkModeSwitchLabel: 'テーマ',
    sidebarMenuLabel: 'メニュー',
    returnToTopLabel: 'トップへ',
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '検索',
                buttonAriaLabel: '検索',
              },
              modal: {
                noResultsText: '結果が見つかりません',
                resetButtonTitle: 'リセット',
                footer: {
                  selectText: '選択',
                  navigateText: '移動',
                  closeText: '閉じる',
                },
              },
            },
          },
        },
      },
    },
  },
})
