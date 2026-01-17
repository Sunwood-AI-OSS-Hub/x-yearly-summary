<script lang="ts">
	import type { Tweet } from '$lib/data/types';

	interface Props {
		tweet: Tweet;
		userName: string;
		screenName: string;
	}

	let { tweet, userName, screenName }: Props = $props();

	const tweetUrl = `https://twitter.com/${screenName}/status/${tweet.id_str}`;

	// テキスト内の改行を<br>に変換
	const formattedText = tweet.full_text.replace(/\n/g, '<br>');

	// URLをリンクに変換（簡易実装）
	const textWithLinks = tweet.entities?.urls
		? tweet.entities.urls.reduce((text, url) => {
				return text.replace(url.url, `<a href="${url.expanded_url}" target="_blank" rel="noopener">${url.display_url}</a>`);
			}, formattedText)
		: formattedText;
</script>

<div class="tweet-card-wrapper">
	<blockquote class="twitter-tweet" data-theme="dark">
		<p lang="ja" dir="ltr">
			{@html textWithLinks}
		</p>
		&mdash; {userName} (@{screenName})
		<a href={tweetUrl}>{tweet.date_str}</a>
	</blockquote>
</div>

<style>
	.tweet-card-wrapper {
		margin-bottom: 20px;
	}

	:global(.twitter-tweet) {
		display: block !important;
		margin: 0 auto !important;
	}
</style>
