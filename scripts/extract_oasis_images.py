#!/usr/bin/env python3
"""
Twitter Archive から OASIS/Oasis Sync 関連の画像を抽出するスクリプト
"""
import json
import re
from pathlib import Path
from urllib.parse import urlparse

# パス設定
ARCHIVE_DIR = Path("/prj/x-yearly-summary/twitter-archive/raw/twitter-2026-01-02-6b1dc95fdd94290f9647655262ead4d269c8bab92289bd687e0490c25bacce7c")
TWEETS_JS = ARCHIVE_DIR / "data" / "tweets.js"
MEDIA_DIR = ARCHIVE_DIR / "data" / "tweets_media"
OUTPUT_FILE = Path("/prj/x-yearly-summary/docs/oasis-sync-images.md")

# OASIS 関連キーワード
OASIS_KEYWORDS = ["OASIS", "oasis", "Oasis", "Oasis-Sync", "oasis-sync"]

def extract_media_info(tweet_data):
    """ツイートデータからメディア情報を抽出"""
    tweet = tweet_data.get("tweet", {})
    tweet_id = tweet.get("id_str", "")
    created_at = tweet.get("created_at", "")
    full_text = tweet.get("full_text", "")
    extended_entities = tweet.get("extended_entities", {})
    media = extended_entities.get("media", [])

    if not media:
        return None

    media_list = []
    for m in media:
        media_url = m.get("media_url_https", "")
        expanded_url = m.get("expanded_url", "")
        media_type = m.get("type", "unknown")

        media_list.append({
            "type": media_type,
            "media_url": media_url,
            "expanded_url": expanded_url,
        })

    return {
        "tweet_id": tweet_id,
        "created_at": created_at,
        "full_text": full_text,
        "media": media_list,
        "tweet_url": f"https://x.com/hAru_mAki_ch/status/{tweet_id}"
    }

def is_oasis_related(text):
    """OASIS 関連のテキストか判定"""
    text_lower = text.lower()
    return any(keyword.lower() in text_lower for keyword in OASIS_KEYWORDS)

def main():
    # tweets.js を読み込む
    print(f"Reading: {TWEETS_JS}")

    with open(TWEETS_JS, "r", encoding="utf-8") as f:
        content = f.read()

    # JavaScript の変数代入部分を削除して JSON に変換
    # window.YTD.tweets.part0 = [ ... ]
    match = re.search(r'window\.YTD\.tweets\.part\d+\s*=\s*(\[.*\])\s*;?', content, re.DOTALL)
    if not match:
        print("Failed to parse tweets.js")
        return

    json_str = match.group(1)
    tweets = json.loads(json_str)

    print(f"Total tweets: {len(tweets)}")

    # OASIS 関連の画像を抽出
    oasis_images = []
    for tweet_data in tweets:
        tweet = tweet_data.get("tweet", {})
        full_text = tweet.get("full_text", "")

        if not is_oasis_related(full_text):
            continue

        media_info = extract_media_info(tweet_data)
        if media_info and media_info["media"]:
            oasis_images.append(media_info)

    print(f"Found {len(oasis_images)} OASIS-related tweets with media")

    # Markdown を生成
    md_lines = [
        "# OASIS/Oasis Sync 関連画像",
        "",
        f"**合計**: {len(oasis_images)} 件のツイート",
        "",
    ]

    for i, img_data in enumerate(oasis_images, 1):
        md_lines.append(f"## {i}. [{img_data['tweet_id']}]({img_data['tweet_url']})")
        md_lines.append(f"**日時**: {img_data['created_at']}")
        md_lines.append("")
        md_lines.append(f"**本文**:")
        md_lines.append(f"> {img_data['full_text']}")
        md_lines.append("")

        for media in img_data['media']:
            md_lines.append(f"**タイプ**: {media['type']}")
            md_lines.append(f"**画像 URL**: {media['media_url']}")
            md_lines.append(f"**X (Twitter) URL**: {media['expanded_url']}")
            md_lines.append("")
            md_lines.append(f"![{media['type']}]({media['media_url']})")
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
