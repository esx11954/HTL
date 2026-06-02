import { defineConfig } from 'vitepress'
import taskLists from 'markdown-it-task-lists'

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(taskLists, { enabled: true })
    },
  },
  title: 'LPIC試験対策',
  description: 'LPIC-1 101試験 事前学習資料',
  lang: 'ja',
  base: '/HTL/',
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
            { text: '第1章：システムアーキテクチャ', link: '/lpic101/chapter1' },
            { text: '第2章：インストールとパッケージ管理', link: '/lpic101/chapter2' },
            { text: '第3章：GNUとUNIXコマンド', link: '/lpic101/chapter3' },
            { text: '第4章：ファイルとプロセスの管理', link: '/lpic101/chapter4' },
            { text: '第5章：デバイスとLinuxファイルシステム', link: '/lpic101/chapter5' },
          ],
        },
        {
          text: 'LPIC-1 102編',
          items: [
            { text: '第7章：シェルとシェルスクリプト', link: '/lpic101/chapter7' },
            { text: '第8章：ユーザーインターフェースとデスクトップ', link: '/lpic101/chapter8' },
            { text: '第9章：管理タスク', link: '/lpic101/chapter9' },
            { text: '第10章：必須システムサービス', link: '/lpic101/chapter10' },
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
