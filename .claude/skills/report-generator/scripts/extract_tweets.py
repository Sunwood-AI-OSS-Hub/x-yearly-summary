#!/usr/bin/env python3
"""
Twitter Archive から特定キーワード関連のツイートを抽出するスクリプト

使用方法:
    python3 scripts/extract_tweets.py "<キーワード>" <プロジェクト名>
"""
import json
import re
import sys
from pathlib import Path

# パス設定
ARCHIVE_DIR = Path("/prj/x-yearly-summary/twitter-archive/raw/twitter-2026-01-02-6b1dc95fdd94290f9647655262ead4d269c8bab92289bd687e0490c25bacce7c")
TWEETS_JS = ARCHIVE_DIR / "data" / "tweets.js"
DOCS_DIR = Path("/prj/x-yearly-summary/docs")

def is_keyword_related(text, keywords):
    """キーワード関連のテキストか判定"""
    text_lower = text.lower()
    for keyword in keywords:
        if re.search(keyword, text, re.IGNORECASE):
            return True
    return False

def extract_tweet_summary(tweet_data):
    """ツイートデータの要約を抽出"""
    tweet = tweet_data.get("tweet", {})
    return {
        "id": tweet.get("id_str", ""),
        "created_at": tweet.get("created_at", ""),
        "text": tweet.get("full_text", ""),
        "url": f"https://x.com/hAru_mAki_ch/status/{tweet.get('id_str', '')}",
        "favorite_count": tweet.get("favorite_count", "0"),
        "retweet_count": tweet.get("retweet_count", "0"),
        "has_media": "extended_entities" in tweet and "media" in tweet.get("extended_entities", {})
    }

def main():
    if len(sys.argv) < 3:
        print("Usage: python3 scripts/extract_tweets.py \"<keyword>\" <project_name>")
        sys.exit(1)

    keyword = sys.argv[1]
    project_name = sys.argv[2]

    # キーワードを複数パターンに対応
    keywords = [keyword, keyword.lower(), keyword.upper()]

    print(f"Searching for: {keyword}")
    print(f"Project: {project_name}")

    # tweets.js を読み込む
    print(f"Reading: {TWEETS_JS}")

    with open(TWEETS_JS, "r", encoding="utf-8") as f:
        content = f.read()

    # JavaScript の変数代入部分を削除して JSON に変換
    match = re.search(r'window\.YTD\.tweets\.part\d+\s*=\s*(\[.*\])\s*;?', content, re.DOTALL)
    if not match:
        print("Failed to parse tweets.js")
        sys.exit(1)

    json_str = match.group(1)
    tweets = json.loads(json_str)

    print(f"Total tweets: {len(tweets)}")

    # キーワード関連のツイートを抽出
    related_tweets = []
    for tweet_data in tweets:
        tweet = tweet_data.get("tweet", {})
        full_text = tweet.get("full_text", "")

        if not is_keyword_related(full_text, keywords):
            continue

        related_tweets.append(extract_tweet_summary(tweet_data))

    print(f"Found {len(related_tweets)} related tweets")

    # Markdown を生成
    md_lines = [
        f"# {keyword} 関連ツイート",
        "",
        f"**合計**: {len(related_tweets)} 件のツイート",
        "",
    ]

    for tweet in related_tweets:
        md_lines.append(f"## [{tweet['id']}]({tweet['url']})")
        md_lines.append(f"**日時**: {tweet['created_at']}")
        md_lines.append(f"**いいね**: {tweet['favorite_count']} | **リツイート**: {tweet['retweet_count']}")
        md_lines.append("")
        md_lines.append(f"**本文**:")
        md_lines.append(f"> {tweet['text']}")
        md_lines.append("")
        md_lines.append("---")
        md_lines.append("")

    # ファイルに書き込み
    DOCS_DIR.mkdir(parents=True, exist_ok=True)
    output_file = DOCS_DIR / f"{project_name}-tweets.md"
    with open(output_file, "w", encoding="utf-8") as f:
        f.write("\n".join(md_lines))

    print(f"Output: {output_file}")

if __name__ == "__main__":
    main()
