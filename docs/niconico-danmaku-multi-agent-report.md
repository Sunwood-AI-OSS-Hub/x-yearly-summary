# 📊 ニコニコ弾幕マルチエージェント調査レポート

## 概要

**ニコニコ弾幕マルチエージェント** は、Maki さん（@hAru_mAki_ch / Sunwood AI Labs）が開発した**複数のAIエージェントがニコニコ風の弾幕コメントを出し合うマルチエージェントシステム**です。

---

## 基本情報

| 項目 | 内容 |
|------|------|
| **開発者** | Maki（Sunwood AI Labs） |
| **Twitter** | [@hAru_mAki_ch](https://x.com/hAru_mAki_ch) |
| **関連アプリ** | 「投コメがったい」- Github Pages で公開 |
| **最新版** | ニコニコ弾幕マルチエージェントプロンプト V3.0 |
| **最大エージェント数** | 約500エージェント |
| **開発環境** | Gemini AI Studio |

---

## 核心機能

### 1. システム概要

```
複数のAIエージェント（各個別のペルソナ） × ニコニコ風弾幕形式 = カオスな議論空間
```

### 2. 主要な特徴

- **8人のマルチエージェント** - それぞれが独立したコメントを出し合う
- **約800件のコメント生成** - 短時間で大量の弾幕を生成可能
- **ニコニコ風弾幕表示** - 横流れるコメント形式
- **カオスな議論** - 複数視点からの同時発言による活発な議論

### 3. 対応AIモデル

- **Gemini 3.0** - メインの推論エンジン
- **DeepSeek-V3.2** - 高性能な議論生成
- **Gemini AI Studio** - 開発・実行環境

---

## 開発履歴（2025年10月）

| 日付 | 内容 |
|------|------|
| **10月26日** | 「ニコニコ弾幕マルチエージェントプロンプト V3.0」用アプリ「投コメがったい」をリリース |
| **10月28日** | 8人のマルチエージェントシステムを実装。約800件の弾幕コメントを生成 |
| **10月28日** | 5分間の動画で総弾幕数794件を生成 |
| **10月28日** | Gemini AI Studio でマルチエージェントシステムアプリを開発中 |

---

## 技術スタック

- **Gemini AI Studio** - マルチエージェントの開発環境
- **Gemini 3.0** - メインのLLMモデル
- **DeepSeek-V3.2** - 補助的なLLMモデル
- **GitHub Pages** - アプリの公開プラットフォーム
- **プロンプトエンジニアリング** - エージェントのペルソナ設計

---

## 使い方の流れ（推定）

1. **Gemini AI Studio** でマルチエージェントシステムを構築
2. **各エージェント** に異なるペルソナ・視点を設定
3. **議論のテーマ** を入力
4. **各エージェント** が同時にコメントを生成
5. **弾幕形式** でコメントを表示・結合

---

## 特徴的な機能

### V3.0 の機能

- **500エージェントまで対応** - 大規模なマルチエージェント議論が可能
- **弾幕結合アプリ** - Gemini AI Studio で開発されたコメント結合ツール
- **「投コメがったい」アプリ** - Github Pages で無料公開

### 生成される弾幕の特徴

- **カオスな議論空間** - 複数の視点が同時に交錯
- **ニコニコ風の雰囲気** - 横流れるコメント形式
- **多様な意見** - 各エージェントの独立したペルソナからの発言

---

## 関連プロジェクト

Sunwood AI Labs によるその他のマルチエージェント関連プロジェクト：

- **[ZERO GRAVITY](https://github.com/Sunwood-ai-labs/ZERO_GRAVITY)** - Google Antigravityのマルチエージェントシステム
- **[gemini-actions-lab](https://github.com/Sunwood-ai-labsII/gemini-actions-lab)** - GitHub Actions × Gemini AI の自動化ツール
- **[Oasis Sync](https://github.com/Sunwood-ai-labs/oasis-sync)** - ブログ記事のマルチプラットフォーム自動配信

---

## 調査方法

本レポートは以下の方法で調査を行いました：

1. **Twitter アーカイブ解析** - maki さんの Twitter データから関連ツイートを抽出
2. **Web 検索** - 「ニコニコ弾幕マルチエージェント」「投コメがったい」などのキーワードで検索
3. **GitHub リポジトリ調査** - Sunwood AI Labs の関連プロジェクトを確認
4. **note.com 記事** - Sunwood AI Labs の技術記事を確認

---

## レポート作成者

無重 星来 - Agent AI Assistant

調査日: 2026年1月19日

---

### 📚 参考リンク

- [Sunwood AI Labs - GitHub](https://github.com/Sunwood-ai-labs)
- [Maki@Sunwood AI Labs. (@hAru_mAki_ch) / X](https://x.com/hAru_mAki_ch)
- [Gemini AI Studio](https://aistudio.google.com/)
- [ZERO GRAVITY v0.1.0-alpha リリース](https://github.com/Sunwood-ai-labs/ZERO_GRAVITY/releases/tag/v0.1.0-alpha)

---

### 🔍 関連ツイート

- 2025-10-26: 「投コメがったい」リリース
- 2025-10-28: 8人のマルチエージェントで約800件の弾幕を生成
- 2025-10-28: 5分で794弾幕を生成
- 2025-10-28: Gemini AI Studio で開発中
