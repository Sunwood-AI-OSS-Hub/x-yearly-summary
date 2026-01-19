# Twitter Archive 形式

## tweets.js の構造

```javascript
window.YTD.tweets.part0 = [
  {
    "tweet": {
      "edit_info": { ... },
      "retweeted": false,
      "source": "<a href=\"...\">Twitter Web App</a>",
      "entities": {
        "hashtags": [ ... ],
        "symbols": [ ... ],
        "user_mentions": [ ... ],
        "urls": [ ... ]
      },
      "display_text_range": [ ... ],
      "favorite_count": "0",
      "id_str": "ツイートID",
      "truncated": false,
      "retweet_count": "0",
      "id": ツイートID,
      "possibly_sensitive": false,
      "created_at": "Fri Jan 02 13:35:03 +0000 2026",
      "favorited": false,
      "full_text": "ツイート本文",
      "lang": "ja",
      "extended_entities": {
        "media": [
          {
            "expanded_url": "https://x.com/.../status/.../photo/1",
            "indices": [ ... ],
            "url": "https://t.co/...",
            "media_url_https": "https://pbs.twimg.com/media/...",
            "type": "photo"  // or "video"
          }
        ]
      }
    }
  }
]
```

## パース方法

```python
import json
import re

# tweets.js を読み込む
with open("data/tweets.js", "r", encoding="utf-8") as f:
    content = f.read()

# JavaScript の変数代入部分を削除して JSON に変換
match = re.search(r'window\.YTD\.tweets\.part\d+\s*=\s*(\[.*\])\s*;?', content, re.DOTALL)
if match:
    json_str = match.group(1)
    tweets = json.loads(json_str)
```

## 主なフィールド

| フィールド | 説明 |
|----------|------|
| `tweet.id_str` | ツイートID（文字列） |
| `tweet.created_at` | 作成日時 |
| `tweet.full_text` | ツイート本文 |
| `tweet.entities.urls` | URL 情報 |
| `tweet.extended_entities.media` | 画像・動画情報 |
| `tweet.favorite_count` | いいね数 |
| `tweet.retweet_count` | リツイート数 |
