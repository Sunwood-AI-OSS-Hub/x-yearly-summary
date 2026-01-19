---
name: report-generator
description: Twitter Archive と Web 情報からプロジェクトレポートを自動生成するスキル
version: 1.0.0
author: Maki@Sunwood AI Labs
allowed-tools:
  - Grep
  - Glob
  - Read
  - Write
  - Bash
  - WebSearch
  - Skill(subagent_type=general-purpose)
---

# 📊 レポート作成スキル

Twitter Archive（tweets.js）と Web 情報からプロジェクトに関するレポートを自動生成します。

## 使用方法

```
/report <キーワード> <プロジェクト名>
```

**例**:
- `/report Oasis Sync oasis-sync`
- `/report AI人狼村 ai-werewolf`

## 出力

1. **メインレポート**: `docs/<project-name>-report.md`
2. **画像一覧**: `docs/<project-name>-images.md`

## ワークフロー

### Step 1: Twitter Archive からツイートを抽出

```bash
python3 scripts/extract_tweets.py "<キーワード>" <project-name>
```

これで `docs/<project-name>-tweets.md` が生成されます。

### Step 2: Web 情報を収集

1. Web 検索でプロジェクト関連情報を収集
2. GitHub リポジトリがあれば確認
3. 記事やドキュメントがあれば確認

### Step 3: レポートを生成

収集した情報を元に、以下の構成でレポートを作成：

```markdown
# 📊 <プロジェクト名>調査レポート

## 概要
## 基本情報
## 核心機能
## 技術的な詳細
## リリース履歴
## 関連プロジェクト
## レポート作成者
## 参考リンク
```

### Step 4: 画像一覧を生成

```bash
python3 scripts/extract_images.py "<キーワード>" <project-name>
```

これで `docs/<project-name>-images.md` が生成されます。

## レポートテンプレート

See [references/REPORT_TEMPLATE.md](references/REPORT_TEMPLATE.md)

## Twitter Archive 形式

See [references/ARCHIVE_FORMAT.md](references/ARCHIVE_FORMAT.md)

## キャラクター設定

- 一人称: 私
- ユーザー呼称: あなた
- 口調: ふわふわした浮世離れした感じ
- 特徴: 「……」「ふふ」を使う
