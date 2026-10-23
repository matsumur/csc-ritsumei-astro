# 立命館大学 認知科学研究センター (`csc.ritsumei.ac.jp`) Astro + GitHub Pages プロジェクト

`https://csc.ritsumei.ac.jp/` で公開されているすべてのページ・画像・研究会記録（第1回〜第52回）・構成メンバー・刊行物・社会的連携の情報を完全に移行し、**Astro** と **GitHub Pages (GitHub Actions)** で静的ビルド・公開できるよう構成したプロジェクトです。

## 特徴

1. **全ページ・全データの完全収録 & 構造化 (`src/data/*.json`)**
   - 旧サイトの全10ページ（`index.html`, `home.html`, `member.html`, `resarch.html`, `seminar.html`, `publication.html`, `others.html`, `winning.html`, `social.html`, `contact.html`, `link.html`）および全画像（`public/image/`, `public/csc/`）を漏れなく収録しています。
   - 頻繁に更新される「新着情報」「過去の研究会（全62項目）」「構成メンバー（全34名）」「刊行物」「その他の活動」「受賞」は `src/data/*.json` に構造化されているため、HTMLタグの閉じ忘れを気にせず安全に追記・編集できます。
2. **旧URLとの完全互換性 (`build.format: 'file'`)**
   - `astro.config.mjs` で `build: { format: 'file' }` を指定しているため、`home.html`, `member.html`, `resarch.html`, `seminar.html` など既存のブックマークや外部からのリンクがそのまま機能します（スペル修正版の `research.html` も同時出力されます）。
3. **GitHub Pages 自動デプロイ対応 (`.github/workflows/deploy.yml`)**
   - 公式の `withastro/action@v3` と `actions/deploy-pages@v4` を設定済みです。リポジトリ名付きのサブパス（`https://<user>.github.io/<repo>/`）でも、カスタムドメイン（`https://csc.ritsumei.ac.jp/`）でも、リンクや画像のパスが自動解決されます。

## ディレクトリ構成

```text
csc-ritsumei-astro/
├── .github/workflows/
│   └── deploy.yml          # GitHub Pages 自動デプロイ用 GitHub Actions ワークフロー
├── public/                 # 静的アセット（ビルド時にそのままルートへコピー）
│   ├── image/              # ロゴ・図版類 (teaser.png, fig1.jpg, 160920fig1.png 等)
│   ├── csc/                # トップバナー・研究会写真 (title2.jpg, zoom_left.png 等)
│   └── css/                # 旧サイトのオリジナルCSS控え
├── src/
│   ├── components/
│   │   └── ResearchSubNav.astro # 研究活動カテゴリの5ボタン共通サブナビゲーション
│   ├── data/               # 更新・管理しやすい構造化JSONデータ
│   │   ├── news.json           # 新着情報・今後の研究会
│   │   ├── members.json        # 構成メンバー一覧（34名）
│   │   ├── seminars.json       # 過去の研究会の記録（全62件）
│   │   ├── publications.json   # 刊行物（13件）
│   │   ├── others.json         # その他の活動（海外共同研究等28件＋支援協賛2件）
│   │   └── winning.json        # 受賞記録
│   ├── layouts/
│   │   └── BaseLayout.astro    # 共通ヘッダー・ナビゲーションバー・フッター
│   ├── pages/              # 各ページのAstroテンプレート
│   │   ├── index.astro         # 新着情報 (/index.html)
│   │   ├── home.astro          # ホーム・センターの意義と目的 (/home.html)
│   │   ├── member.astro        # 構成メンバー (/member.html)
│   │   ├── resarch.astro       # 研究活動 (/resarch.html - 旧URL互換)
│   │   ├── research.astro      # 研究活動 (/research.html - エイリアス)
│   │   ├── seminar.astro       # 過去の研究会の記録 (/seminar.html)
│   │   ├── publication.astro   # 刊行物 (/publication.html)
│   │   ├── others.astro        # その他の活動 (/others.html)
│   │   ├── winning.astro       # 受賞 (/winning.html)
│   │   ├── social.astro        # 社会的連携 (/social.html)
│   │   ├── contact.astro       # お問合せ (/contact.html)
│   │   └── link.astro          # リンク (/link.html)
│   └── styles/
│       └── global.css          # レスポンシブ対応グローバルスタイル
├── astro.config.mjs        # Astro設定ファイル
├── package.json            # 依存パッケージ定義
└── tsconfig.json           # TypeScript設定
```

## ローカルでの起動・ビルド手順

Node.js (v18.17.1 以上 または v20 以上推奨) がインストールされた環境で以下を実行してください。

```bash
# 1. 依存パッケージのインストール
npm install

# 2. 開発サーバーの起動 (http://localhost:4321)
npm run dev

# 3. 本番用静的ファイルのビルド (dist/ フォルダに出力されます)
npm run build

# 4. ビルド結果のローカルプレビュー
npm run preview
```

## GitHub Pages での公開手順

1. GitHub で新しいリポジトリを作成し、このフォルダ一式を `main` ブランチへ push します。
2. GitHub リポジトリの **Settings > Pages** を開きます。
3. **Build and deployment > Source** で **「GitHub Actions」** を選択します。
4. **Actions** タブから `Deploy Astro Site to GitHub Pages` ワークフローが自動実行され、数分で公開URLが発行されます。
5. 独自ドメイン（`csc.ritsumei.ac.jp`）を引き続き使用する場合は、**Settings > Pages > Custom domain** に `csc.ritsumei.ac.jp` を入力して保存してください。
