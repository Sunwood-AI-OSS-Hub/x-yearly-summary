<script lang="ts">
	import { base } from '$app/paths';
	import TweetCard from '$lib/components/TweetCard.svelte';

	let { data } = $props();
	const month = data.month;

	const userName = 'Maki@Sunwood AI Labs.';
	const screenName = 'hAru_mAki_ch';
</script>

<svelte:head>
	<title>{month.monthName} | 2025 Archive</title>
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
			<a href="{base}/2025/log">Logs</a>
			<span>></span>
			<span class="current">{month.monthName}</span>
		</nav>

		<div class="hero-title-group">
			<h1 class="main-title">{month.monthName}</h1>
			<div class="subtitle">{month.tweetCount} tweets</div>
		</div>
	</header>

	<main>
		<div class="tweet-list">
			{#each month.tweets as tweet}
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
			<a href="{base}/2025">Back to 2025</a>
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
		font-size: 3rem;
		color: #e0e0e0;
		margin-bottom: 10px;
	}

	.subtitle {
		font-size: 1.2rem;
		color: #888;
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
			font-size: 2rem;
		}
	}
</style>
