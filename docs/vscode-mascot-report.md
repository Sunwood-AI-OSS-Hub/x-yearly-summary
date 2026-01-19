# 📊 VSCode Mascot 拡張機能調査レポート

## 概要

**VSCode Mascot** は、Visual Studio Code のタイトルバーに可愛いマスコットキャラクターを表示する拡張機能です。コードを書きながら、タイトルバーでアニメーションするペットと一緒に過ごすことで、より楽しい開発体験を提供します。

---

## 基本情報

| 項目 | 内容 |
|------|------|
| **拡張機能名** | VSCode Mascot |
| **開発者** | Maki (Sunwood AI Labs) |
| **パブリッシャー** | Maki-SunwoodAILabs |
| **ライセンス** | MIT |
| **最新バージョン** | v1.2.1-alpha (2026年1月10日) |
| **配布プラットフォーム** | Open VSX Registry |

---

## 核心機能

### 🐾 主な機能

1. **タイトルバーにマスコットを表示**
   - VS Code のタイトルバーに可愛いアニメーションキャラクターが表示されます
   - ペットが歩き回ったり、時々ジャンプしたりメッセージを表示したりします

2. **複数のキャラクターから選択可能**
   - Akita (秋田犬)
   - Totoro (トトロ)
   - Fox (キツネ)
   - Pikachu (ピカチュウ)
   - Dinosaur (恐竜)
   - Clippy
   - その他多数！

3. **簡単な操作**
   - コマンドパレットから有効/無効を切り替え可能
   - キャラクターの変更もコマンド一つ

---

## 技術的な詳細

### 使用方法

1. **有効化**: `Ctrl+Shift+P` / `Cmd+Shift+P` でコマンドパレットを開き、`Mascot: Toggle Pet` を入力
2. **キャラクター変更**: `Mascot: Switch Pet` を入力して別のキャラクターを選択
3. **無効化**: 再度 `Mascot: Toggle Pet` を実行

### 技術仕様

| 項目 | 詳細 |
|------|------|
| **開発言語** | TypeScript (66.6%), JavaScript (33.4%) |
| **動作原理** | VS Code のコアファイルを変更してマスコットを注入 |
| **注意点** | 初回使用時にファイル変更の許可を求められる場合があります |
| **再起動** | 有効化/無効化やキャラクター変更後に VS Code の再起動が必要です |

### アンインストール方法

1. `Mascot: Toggle Pet` コマンドを実行して無効化（コード注入をクリーンアップ）
2. 拡張機能をアンインストール

---

## リリース履歴

| バージョン | 日付 | 内容 |
|-----------|------|------|
| v1.2.1-alpha | 2026年1月10日 | 最新リリース |
| v1.2.0 | - | - |
| v1.1.0 | - | - |
| v1.0.0 | - | 初回リリース |
| v0.0.1 | - | - |

---

## GitHub リポジトリ情報

- **リポジトリ**: [Sunwood-ai-labs/vscode-mascot](https://github.com/Sunwood-ai-labs/vscode-mascot)
- **Stars**: 1
- **Forks**: 0
- **Watchers**: 0
- **Commits**: 37
- **ブランチ**: master
- **ライセンス**: MIT

### プロジェクト構成

```
vscode-mascot/
├── .claude/          # Claude Code 設定
├── .github/workflows/ # GitHub Actions
├── assets/           # アセット（ヘッダー画像など）
├── resources/        # リソース（ペット画像）
├── src/              # ソースコード
├── CHANGELOG.md      # 変更履歴
├── LICENSE           # MIT ライセンス
├── README.md         # README
├── package.json      # パッケージ設定
└── tsconfig.json     # TypeScript 設定
```

---

## 配布プラットフォーム

### Open VSX Registry

- **URL**: [https://open-vsx.org/extension/Maki-SunwoodAILabs/vscode-mascot](https://open-vsx.org/extension/Maki-SunwoodAILabs/vscode-mascot)
- **ダウンロード数**: 約35回（調査時点）

### Visual Studio Marketplace

- **URL**: [https://marketplace.visualstudio.com/items?itemName=Maki-SunwoodAILabs.vscode-mascot](https://marketplace.visualstudio.com/items?itemName=Maki-SunwoodAILabs.vscode-mascot)
- **デプロイ日**: 2026年1月7日

---

## 関連プロジェクト

### vscode-background-cover

この拡張機能は、**vscode-background-cover** の「Little Pet」機能のみを抽出して作成されました。

### ZERO_GRAVITY

このリポジトリは **GA-Workspace** で作成されました。
- **リポジトリ**: [Sunwood-ai-labs/ZERO_GRAVITY](https://github.com/Sunwood-ai-labs/ZERO_GRAVITY)
- **Powered by**: ZERO_GRAVITY 🌸

---

## VSCode Mascot に関する @hAru_mAki_ch の投稿レポート

### 概要

@hAru_mAki_ch (Maki@Sunwood AI Labs.) は、**2026年1月7日から8日**にかけて、VSCode でマスコットキャラクターを表示する拡張機能「VSCode Mascot」の開発過程を複数回の投稿で共有しています。

このプラグインは、既存のリポジトリを改造して作成され、GitHub にアップロードされた後、VSCode Marketplace にデプロイされました。また、**nano banana pro** を使用したドット絵 GIF の作成を組み合わせ、自作キャラクターをプラグインに統合する試みも行われています。

投稿は主に開発の進捗報告で、ビデオ付きのものが多く、キャラクターの可愛さを強調しています。全体として、**5つの主要投稿（スレッドを含む）** が関連しており、時系列で開発の流れを追うことができます。エンゲージメントは初投稿が最も高く、**Likes 25件** を記録しています。

### 時系列まとめ

| 日時 (GMT / JST) | 投稿ID | 内容要約 | ビデオ説明 | エンゲージメント |
|------------------|--------|----------|------------|------------------|
| 2026-01-07 10:42 / 19:42 | [2008851767224844468](https://x.com/hAru_mAki_ch/status/2008851767224844468) | とあるリポジトリを改造してVSCodeでマスコットキャラクターを表示するプラグインを完成。「めっちゃ可愛いぞ！！！」 | VSCodeダークテーマ画面で、上部にピクセルアート風のキツネキャラクターがアニメーションで表示 | 🤷 25 | 🔄 1 | 💬 0 | 🔁 1 | 🔖 6 | 👁️ 5634 |
| 2026-01-07 12:43 / 21:43 | [2008882304652124276](https://x.com/hAru_mAki_ch/status/2008882304652124276) | プラグイン開発の第1弾、GitHubにリポジトリをアップロード | VSCodeのREADME.md編集画面や拡張の説明ページを表示 | 🤷 1 | 🔄 0 | 💬 1 | 🔁 1 | 🔖 0 | 👁️ 2319 |
| 2026-01-07 13:39 / 22:39 | [2008896189165604973](https://x.com/hAru_mAki_ch/status/2008896189165604973) | プラグイン開発の第2弾、VSCode Marketplaceにデプロイ成功 | Marketplaceの拡張インストール画面や詳細ページ | 🤷 8 | 🔄 0 | 💬 1 | 🔁 1 | 🔖 1 | 👁️ 2993 |
| 2026-01-08 12:23 / 21:23 | [2009239547604009125](https://x.com/hAru_mAki_ch/status/2009239547604009125) | nano banana pro でドット絵GIF作成の進捗（第6弾）。自作キャラ2体を完成 | ドット絵のキツネキャラクターのアニメーション。ジャンプや回転などの動き | 🤷 2 | 🔄 0 | 💬 0 | 🔁 1 | 🔖 0 | 👁️ 3137 |
| 2026-01-08 12:34 / 21:34 | [2009242338615517223](https://x.com/hAru_mAki_ch/status/2009242338615517223) | ドット絵GIF作成の第7弾。自作GIFキャラをVSCodeマスコットに組み込み成功 | VSCodeで自作ドット絵キャラクター（キツネなど）が上部にアニメーション表示 | 🤷 4 | 🔄 0 | 💬 0 | 🔁 1 | 🔖 2 | 👁️ 3307 |

### 分析と考察

- **開発の流れ**: 初投稿で基本機能の完成を報告した後、すぐに GitHub 公開と Marketplace デプロイを達成。翌日には自作ドット絵を統合し、カスタマイズ性を高めています。**nano banana pro** を使用したドット絵作成は、プラグインの拡張として位置づけられています。

- **特徴**: すべての投稿で**「可愛い」** をキーワードに強調。ビデオから、キャラクターはピクセルアート風でアニメーション付き、VSCode のタイトルバー上部に表示されるようです。背景透過 GIF 対応で、カスタムキャラクターの追加が可能。

- **エンゲージメントの傾向**: 初投稿が最も人気（Likes 25件）。以降の投稿は開発者向けの詳細が増え、Views は安定していますが、Likes は減少。全体として、技術共有コミュニティでの関心が高いようです。

### Twitter での言及

各投稿のリンク:
1. **初投稿（完成報告）**: [status/2008851767224844468](https://x.com/hAru_mAki_ch/status/2008851767224844468)
2. **GitHub公開**: [status/2008882304652124276](https://x.com/hAru_mAki_ch/status/2008882304652124276)
3. **Marketplaceデプロイ**: [status/2008896189165604973](https://x.com/hAru_mAki_ch/status/2008896189165604973)
4. **ドット絵GIF作成（第6弾）**: [status/2009239547604009125](https://x.com/hAru_mAki_ch/status/2009239547604009125)
5. **自作キャラ組み込み（第7弾）**: [status/2009242338615517223](https://x.com/hAru_mAki_ch/status/2009242338615517223)

---

## 特徴的なデザイン

### ヘッダー画像

![Header](https://raw.githubusercontent.com/Sunwood-ai-labs/vscode-mascot/master/assets/header.png)

### マスコットアニメーション

秋田犬が可愛くアニメーションする GIF が README で紹介されています：

![Akita Mascot](https://raw.githubusercontent.com/Sunwood-ai-labs/vscode-mascot/master/resources/pet/dog/akita_idle_8fps.gif)

---

## レポート作成者

**無重 星来（むじゅう せいら）**
- Agent ZERO プロジェクトアシスタント
- Claude Code Skills 開発・管理

---

## 参考リンク

### 公式リンク
- [Open VSX - VSCode Mascot](https://open-vsx.org/extension/Maki-SunwoodAILabs/vscode-mascot)
- [GitHub - Sunwood-ai-labs/vscode-mascot](https://github.com/Sunwood-ai-labs/vscode-mascot)
- [Maki-SunwoodAILabs - Open VSX Namespace](https://open-vsx.org/namespace/Maki-SunwoodAILabs)

### 関連リポジトリ
- [Sunwood-ai-labs/ZERO_GRAVITY](https://github.com/Sunwood-ai-labs/ZERO_GRAVITY)

### SNS
- [Twitter 公開ツイート](https://x.com/hAru_mAki_ch/status/2008896191199867185)
- [Twitter 紹介ツイート](https://x.com/hAru_mAki_ch/status/2008882306518491157)

---

## まとめ

**VSCode Mascot** は、VS Code のタイトルバーに可愛いアニメーションキャラクターを表示する楽しい拡張機能です。

- 複数のキャラクター（秋田犬、トトロ、ピカチュウなど）から選べる
- コマンドパレットから簡単に操作可能
- TypeScript で開発されており、MIT ライセンスで公開
- Open VSX Registry でダウンロード可能

コードを書く時間をより楽しくしてくれる、癒しの拡張機能です。

---

**レポート作成日**: 2026年1月19日
**データソース**: GitHub, Open VSX, Web検索, Twitter
