#!/usr/bin/env python3
"""
Twitter Archive から VSCode マスコット関連のツイートを抽出するスクリプト
"""
import json
import re
from pathlib import Path
from datetime import datetime

# パス設定
ARCHIVE_DIR = Path("/prj/x-yearly-summary/twitter-archive/raw/twitter-2026-01-02-6b1dc95fdd94290f9647655262ead4d269c8bab92289bd687e0490c25bacce7c")
TWEETS_JS = ARCHIVE_DIR / "data" / "tweets.js"
OUTPUT_FILE = Path("/prj/x-yearly-summary/docs/vscode-mascot-tweets.md")

# VSCode マスコット関連キーワード
VSCODE_MASCOT_KEYWORDS = [
    "vscode mascot",
    "vscode-mascot",
    "VSCode Mascot",
    "マスコット拡張",
    "mascot extension",
    "vscode-mascot リリース",
    "vscode-mascot 公開",
]

def extract_tweet_info(tweet_data):
    """ツイートデータから情報を抽出"""
    tweet = tweet_data.get("tweet", {})
    tweet_id = tweet.get("id_str", "")
    created_at = tweet.get("created_at", "")
    full_text = tweet.get("full_text", "")
    favorite_count = tweet.get("favorite_count", 0)
    retweet_count = tweet.get("retweet_count", 0)
    reply_count = tweet.get("reply_count", 0)
    quote_count = tweet.get("quote_count", 0)

    return {
        "tweet_id": tweet_id,
        "created_at": created_at,
        "full_text": full_text,
        "favorite_count": favorite_count,
        "retweet_count": retweet_count,
        "reply_count": reply_count,
        "quote_count": quote_count,
        "tweet_url": f"https://x.com/hAru_mAki_ch/status/{tweet_id}"
    }

def is_vscode_mascot_related(text):
    """VSCode マスコット関連のテキストか判定"""
    text_lower = text.lower()
    return any(keyword.lower() in text_lower for keyword in VSCODE_MASCOT_KEYWORDS)

def main():
    # tweets.js を読み込む
    print(f"Reading: {TWEETS_JS}")

    with open(TWEETS_JS, "r", encoding="utf-8") as f:
        content = f.read()

    # JavaScript の変数代入部分を削除して JSON に変換
    match = re.search(r'window\.YTD\.tweets\.part\d+\s*=\s*(\[.*\])\s*;?', content, re.DOTALL)
    if not match:
        print("Failed to parse tweets.js")
        return

    json_str = match.group(1)
    tweets = json.loads(json_str)

    print(f"Total tweets: {len(tweets)}")

    # VSCode マスコット関連のツイートを抽出
    vscode_tweets = []
    for tweet_data in tweets:
        tweet = tweet_data.get("tweet", {})
        full_text = tweet.get("full_text", "")

        if is_vscode_mascot_related(full_text):
            tweet_info = extract_tweet_info(tweet_data)
            vscode_tweets.append(tweet_info)

    print(f"Found {len(vscode_tweets)} VSCode mascot-related tweets")

    # 日付でソート
    vscode_tweets.sort(key=lambda x: x["created_at"], reverse=True)

    # Markdown を生成
    md_lines = [
        "# VSCode マスコット関連ツイート",
        "",
        f"**合計**: {len(vscode_tweets)} 件のツイート",
        "",
        "## キーワード",
        "",
        ", ".join(f"`{kw}`" for kw in VSCODE_MASCOT_KEYWORDS),
        "",
    ]

    for i, tweet in enumerate(vscode_tweets, 1):
        md_lines.append(f"## {i}. [{tweet['tweet_id']}]({tweet['tweet_url']})")
        md_lines.append(f"**日時**: {tweet['created_at']}")
        md_lines.append("")
        md_lines.append(f"**本文**:")
        md_lines.append(f"> {tweet['full_text']}")
        md_lines.append("")
        md_lines.append(f"**エンゲージメント**: 🤷 {tweet['favorite_count']} | 🔄 {tweet['retweet_count']} | 💬 {tweet['reply_count']} | 🔁 {tweet['quote_count']}")
        md_lines.append("")
        md_lines.append("---")
        md_lines.append("")

    # ファイルに書き込み
    OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write("\n".join(md_lines))

    print(f"Output: {OUTPUT_FILE}")

if __name__ == "__main__":
    main()
