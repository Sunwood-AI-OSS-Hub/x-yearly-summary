# X 年間まとめ | X Yearly Summary

X（旧Twitter）の年間投稿をまとめたWebサイトです。

## 🌐 公開URL

GitHub Pagesで公開されています：`https://Sunwood-ai-labs.github.io/x-yearly-summary/`

## 📁 プロジェクト構造

```
x-yearly-summary/
├── index.html          # トップページ
├── style.css           # 共通スタイル
├── script.js           # 年別カード生成スクリプト
├── 2024/              # 2024年のまとめ
│   ├── index.html
│   └── style-2024.css
└── README.md
```

## ✨ 機能

- 年別のまとめページを表示
- レスポンシブデザイン対応
- 来年以降も簡単に追加可能な構造

## 🔧 新しい年の追加方法

### 1. 新しい年のフォルダを作成

```bash
mkdir 2025
```

### 2. HTMLとCSSファイルを作成

`2024/` フォルダの内容をコピーして、年を更新してください。

### 3. script.jsに年データを追加

`script.js` の `yearsData` 配列に新しい年のデータを追加：

```javascript
{
    year: 2025,
    description: '2025年のX投稿まとめ',
    stats: {
        posts: '準備中',
        likes: '準備中',
        retweets: '準備中'
    },
    link: './2025/index.html'
}
```

### 4. 変更をコミット＆プッシュ

```bash
git add .
git commit -m "Add 2025 summary"
git push origin main
```

GitHub Actionsが自動的にデプロイします。

## 🚀 ローカル開発

このプロジェクトは静的HTMLなので、ブラウザでindex.htmlを直接開くだけで動作します。

または、簡易的なローカルサーバーを起動：

```bash
# Pythonを使う場合
python -m http.server 8000

# Node.jsを使う場合
npx serve
```

## 📝 ライセンス

MIT License

## 👤 作成者

Sunwood AI Labs
