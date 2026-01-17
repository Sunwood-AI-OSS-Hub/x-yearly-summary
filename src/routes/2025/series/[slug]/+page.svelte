<script lang="ts">
	import { base } from '$app/paths';
	import TweetCard from '$lib/components/TweetCard.svelte';

	let { data } = $props();
	const series = data.series;

	const userName = 'Maki@Sunwood AI Labs.';
	const screenName = 'hAru_mAki_ch';

	// スタイルバッジの色
	const styleColors: Record<string, string> = {
		circle: '#00f0ff',
		solid_circle: '#d4af37',
		keycap: '#ff6b6b',
		standard: '#4ecdc4',
		vol: '#a8e6cf'
	};
</script>

<svelte:head>
	<title>{series.title} | Series | 2025 Archive</title>
	<script
		async
		src="https://platform.twitter.com/widgets.js"
		charset="utf-8"></script>
</svelte:head>

<div class="container">
	<header>
		<nav class="breadcrumbs">
			<a href="{base}/">Home</a>
			<span>></span>
			<a href="{base}/2025">2025</a>
			<span>></span>
			<a href="{base}/2025/series">Series</a>
			<span>></span>
			<span class="current">{series.title}</span>
		</nav>

		<div class="hero-title-group">
			<h1 class="main-title">{series.title}</h1>
			<div class="meta">
				<span class="badge" style="color: {styleColors[series.style]}">{series.style}</span>
				<span class="tweet-count">{series.tweetCount} tweets</span>
			</div>
			<div class="date-range">
				{series.firstTweetDate} - {series.lastTweetDate}
			</div>
		</div>
	</header>

	<main>
		<div class="tweet-list">
			{#each series.tweets as tweet}
				<TweetCard
					{tweet}
					userName={userName}
					screenName={screenName} />
			{/each}
		</div>
	</main>

	<footer>
		<div class="footer-links">
			<a href="https://x.com/hAru_mAki_ch" target="_blank" rel="noopener">X</a>
			<a href="{base}/2025/series">Back to Series</a>
		</div>
		<div class="copyright">&copy; 2025 Maki@Sunwood AI Labs.</div>
	</footer>
</div>

<style>
	.container {
		min-height: 100vh;
		padding: 40px 20px;
		max-width: 800px;
		margin: 0 auto;
	}

	.breadcrumbs {
		display: flex;
		align-items: center;
		gap: 10px;
		flex-wrap: wrap;
		margin-bottom: 30px;
		font-size: 0.9rem;
	}

	.breadcrumbs a {
		color: #00f0ff;
		text-decoration: none;
	}

	.breadcrumbs a:hover {
		text-decoration: underline;
	}

	.breadcrumbs span {
		color: #888;
	}

	.breadcrumbs .current {
		color: #e0e0e0;
	}

	.hero-title-group {
		text-align: center;
		margin-bottom: 60px;
	}

	.main-title {
		font-family: 'Orbitron', sans-serif;
		font-size: 2.5rem;
		color: #e0e0e0;
		margin-bottom: 20px;
		line-height: 1.3;
	}

	.meta {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 20px;
		margin-bottom: 15px;
		flex-wrap: wrap;
	}

	.badge {
		font-family: 'Orbitron', sans-serif;
		font-size: 0.8rem;
		padding: 5px 15px;
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid currentColor;
		border-radius: 20px;
		text-transform: uppercase;
		letter-spacing: 1px;
	}

	.tweet-count {
		color: #888;
		font-size: 0.9rem;
	}

	.date-range {
		color: #888;
		font-size: 0.9rem;
	}

	.tweet-list {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.footer-links {
		display: flex;
		justify-content: center;
		gap: 30px;
		margin-bottom: 20px;
	}

	.footer-links a {
		color: #e0e0e0;
		text-decoration: none;
		transition: color 0.3s ease;
	}

	.footer-links a:hover {
		color: #00f0ff;
	}

	.copyright {
		text-align: center;
		color: #888;
		font-size: 0.9rem;
	}

	@media (max-width: 768px) {
		.main-title {
			font-size: 1.8rem;
		}
	}
</style>
