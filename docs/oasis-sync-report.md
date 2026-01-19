# 📊 Oasis Sync 調査レポート

## 概要

**Oasis Sync** は、Maki さん（@hAru_mAki_ch / Sunwood AI Labs）が開発した**GitHub Actions × Google Gemini AI によるブログ記事のマルチプラットフォーム自動配信ツール**です。

---

## 基本情報

| 項目 | 内容 |
|------|------|
| **開発者** | Maki（Sunwood AI Labs） |
| **GitHub** | [Sunwood-ai-labs/oasis-sync](https://github.com/Sunwood-ai-labs/oasis-sync) |
| **ライセンス** | MIT |
| **最新版** | v0.6.0（2025年10月21日リリース） |
| **関連プロジェクト** | [OASIS](https://github.com/Sunwood-ai-labs/OASIS) - Python パッケージ版 |

---

## 核心機能

### 1. 対応プラットフォーム

- **Zenn** - 技術記事プラットフォーム
- **Qiita** - 技術ブログサービス
- **WordPress** - CMS
- **Note** - コンテンツプラットフォーム

### 2. 主要なワークフロー

```
GitHub Issue Forms → Gemini AI → 各プラットフォームへ自動投稿
```

- **oasis-sync.yml** - メインの記事同期ワークフロー
- **oasis-zenn-sync.yml** - Zenn 専用同期
- **oasis-qiita-sync.yml** - Qiita 専用同期

---

## リリース履歴（2025年）

| バージョン | 日付 | 主な変更点 |
|-----------|------|-----------|
| **v0.6.0** | 10月21日 | 最新版 |
| **v0.5.0** | 10月18日 | 記事とサムネイルの同時登録、slug 指定機能 |
| **v0.3.7** | 10月15日 | Qiita ID 検証処理の一時無効化 |
| **v0.3.2** | 10月15日 | アーキテクチャ刷新、リリースノート生成の強化 |
| **v0.2.4** | 10月14日 | Qiita 記事IDの一意性向上 |
| **v0.2.0** | 10月14日 | WordPress 連携 |
| **v0.1.0** | 10月12日 | 初回リリース |

---

## 技術スタック

- **GitHub Actions** - ワークフロー自動化
- **Google Gemini AI** - コンテンツ処理・カテゴリ提案
- **Python** - スクリプト言語
- **GitHub Issue Forms** - 記事入力フォーム

---

## 使い方の流れ（推定）

1. **GitHub Issue** から記事を入力（Issue Forms 使用）
2. **Gemini AI** がカテゴリ・タグを自動提案
3. **GitHub Actions** が各プラットフォームへ自動投稿
4. **サムネイル画像** も自動生成・アップロード（v0.5.0以降）

---

## 特徴的な機能

### v0.5.0 で追加された機能

- GitHub Issue Forms からの記事とサムネイル同時登録
- Front Matter での slug 指定
- README の拡張（機能リスト、ワークフローマップ）

### AI 連携

- Gemini AI による自動カテゴリ・タグ提案
- AI によるリリースノート自動生成
- LLM モデルの選択が可能（デフォルト: gemini-1.5-pro-latest）

---

## 関連プロジェクト

Sunwood AI Labs によるその他のプロジェクト：

- **[OASIS](https://github.com/Sunwood-ai-labs/OASIS)** - Markdown から各プラットフォームへ投稿する Python パッケージ
- **[gemini-actions-lab](https://github.com/Sunwood-ai-labsII/gemini-actions-lab)** - GitHub Issues と Pull Requests の AI 自動化
- **[SourceSage](https://github.com/Sunwood-ai-labs/SourceSage)** - リポジトリ解析ツール

---

## 調査方法

本レポートは以下の方法で調査を行いました：

1. **Web 検索** - "Oasis Sync" "Sunwood AI Labs" などのキーワードで検索
2. **agent-browser** - X（Twitter）のプロフィールや投稿内容を確認
3. **GitHub リポジトリ** - oasis-sync の README やアーキテクチャを確認
4. **リリースノート** - Zenn や Qiita の各バージョンのリリースノートを確認

---

## レポート作成者

無重 星来 - Agent AI Assistant

調査日: 2026年1月19日

---

### 📚 参考リンク

- [Oasis Sync v0.1.0 リリース記事](https://zenn.dev/sunwood_ai_labs/articles/2025-10-12-oasis-sync-v0-1-0-release)
- [v0.2.0 リリースノート](https://zenn.dev/sunwood_ai_labs/articles/20251014-oasis-sync-0-2-0-release)
- [v0.3.2 リリースノート](https://zenn.dev/sunwood_ai_labs/articles/20251015-oasis-sync-0-3-2-release)
- [v0.5.0 リリースノート](https://qiita.com/Maki-HamarukiLab/items/42cbb3e47f9c9352a1f7)
- [OASIS Python パッケージ](https://github.com/Sunwood-ai-labs/OASIS)
