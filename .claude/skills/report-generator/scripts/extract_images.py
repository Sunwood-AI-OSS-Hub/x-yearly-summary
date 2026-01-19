#!/usr/bin/env python3
"""
Twitter Archive から特定キーワード関連の画像を抽出するスクリプト

使用方法:
    python3 scripts/extract_images.py "<キーワード>" <プロジェクト名>
"""
import json
import re
import sys
from pathlib import Path

# パス設定
ARCHIVE_DIR = Path("/prj/x-yearly-summary/twitter-archive/raw/twitter-2026-01-02-6b1dc95fdd94290f9647655262ead4d269c8bab92289bd687e0490c25bacce7c")
TWEETS_JS = ARCHIVE_DIR / "data" / "tweets.js"
DOCS_DIR = Path("/prj/x-yearly-summary/docs")

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

def is_keyword_related(text, keywords):
    """キーワード関連のテキストか判定"""
    text_lower = text.lower()
    for keyword in keywords:
        if re.search(keyword, text, re.IGNORECASE):
            return True
    return False

def main():
    if len(sys.argv) < 3:
        print("Usage: python3 scripts/extract_images.py \"<keyword>\" <project_name>")
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

    # キーワード関連の画像を抽出
    related_images = []
    for tweet_data in tweets:
        tweet = tweet_data.get("tweet", {})
        full_text = tweet.get("full_text", "")

        if not is_keyword_related(full_text, keywords):
            continue

        media_info = extract_media_info(tweet_data)
        if media_info and media_info["media"]:
            related_images.append(media_info)

    print(f"Found {len(related_images)} tweets with media")

    # Markdown を生成
    md_lines = [
        f"# {keyword} 関連画像",
        "",
        f"**合計**: {len(related_images)} 件のツイート",
        "",
    ]

    for i, img_data in enumerate(related_images, 1):
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
    DOCS_DIR.mkdir(parents=True, exist_ok=True)
    output_file = DOCS_DIR / f"{project_name}-images.md"
    with open(output_file, "w", encoding="utf-8") as f:
        f.write("\n".join(md_lines))

    print(f"Output: {output_file}")

if __name__ == "__main__":
    main()
