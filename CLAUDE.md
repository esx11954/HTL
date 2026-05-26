# HTL プロジェクト

## 概要

LPIC-1 試験対策用の VitePress 静的サイト。
研修資料（Markdown）をWebサイトとして公開し、学習者が事前学習に使う。

- **ローカル開発**: `npm run dev` → `http://localhost:5173/HTL/`
- **本番URL**: https://esx11954.github.io/HTL/
- **リポジトリ**: https://github.com/esx11954/HTL

## 技術スタック

- **VitePress** 1.x（静的サイトジェネレーター）
- **markdown-it-task-lists**（チェックボックスのレンダリング）
- **GitHub Actions + GitHub Pages**（自動デプロイ）

## ディレクトリ構成

```
HTL/
├── docs/
│   ├── .vitepress/
│   │   ├── config.mts          # サイト設定（base: '/HTL/'）
│   │   └── theme/
│   │       ├── index.ts        # カスタムテーマ
│   │       ├── Layout.vue      # チェックボックス制御コンポーネント
│   │       └── custom.css      # カスタムスタイル
│   ├── index.md                # ホームページ
│   └── lpic101/
│       ├── chapter1.md         # 第1回：システムアーキテクチャ
│       └── images/             # 章内で使う画像（20枚）
├── HTLfiles/                   # 元資料の保管場所
│   ├── img/                    # 元画像
│   └── LPIC1_101_第1回_事前学習資料_v3.md
└── .github/workflows/
    └── deploy.yml              # GitHub Pages 自動デプロイ
```

## 主な実装ポイント

### GitHub Pages へのデプロイ
`config.mts` に `base: '/HTL/'` が必要。これがないと CSS・JS のパスがずれて表示が崩れる。

### インタラクティブチェックボックス
- `markdown-it-task-lists` プラグインで `- [ ]` を `<input type="checkbox">` にレンダリング
- `Layout.vue` でページ読み込み時にチェックボックスの `disabled` を解除
- チェック状態を `localStorage` に保存（キー: `checkbox_{path}_{index}`）
- ページ遷移時も `watch(() => route.path, ...)` で再初期化

### 画像の扱い
元資料の画像参照は `images/XX_name.png` 形式。
`docs/lpic101/images/` に配置すれば Markdown からそのまま参照できる。

## 作業履歴

| 日付 | 内容 |
|------|------|
| 2026-05-26 | VitePress セットアップ、ローカルホスティング確認 |
| 2026-05-26 | GitHub リポジトリ（HTL）作成、初回 push |
| 2026-05-26 | GitHub Actions ワークフロー追加、GitHub Pages デプロイ |
| 2026-05-26 | `base: '/HTL/'` 追加（CSS 崩れ修正） |
| 2026-05-26 | 画像20枚追加、プレースホルダーを実画像に置換 |
| 2026-05-26 | インタラクティブチェックボックス実装（localStorage 永続化） |

## コンテンツ追加の手順

新しい資料（例: 第2回）を追加する場合：

1. `HTLfiles/` に元資料を配置
2. `docs/lpic101/chapter2.md` を作成（画像は `docs/lpic101/images/` へ）
3. `docs/.vitepress/config.mts` のサイドバーにエントリを追加
4. コミット → push → GitHub Actions が自動デプロイ
