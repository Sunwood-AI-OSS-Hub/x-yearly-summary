<script lang="ts">
	import { base } from '$app/paths';
	import TweetCard from '$lib/components/TweetCard.svelte';

	let { data } = $props();
	const month = data.month;

	const userName = 'Maki@Sunwood AI Labs.';
	const screenName = 'hAru_mAki_ch';

	// ページネーション設定
	const INCREMENT = 20;
	let visibleCount = $state(INCREMENT);

	const tweets = month.tweets;
	const totalTweets = tweets.length;
	const visibleTweets = () => tweets.slice(0, visibleCount);
	const hasMore = () => visibleCount < totalTweets;
	const showingCount = () => Math.min(visibleCount, totalTweets);

	function loadMore() {
		visibleCount += INCREMENT;
		// スクロール位置を調整（少し下にスクロール）
		setTimeout(() => {
			window.scrollBy({ top: 100, behavior: 'smooth' });
		}, 100);
	}
</script>

<svelte:head>
	<title>{month.monthName} | 2025 Archive</title>
</svelte:head>

<div class="container">
	<header>
		<nav class="breadcrumbs">
			<a href="{base}/">Home</a>
			<i class="fa-solid fa-chevron-right separator"></i>
			<a href="{base}/2025">2025</a>
			<i class="fa-solid fa-chevron-right separator"></i>
			<a href="{base}/2025/log">Logs</a>
			<i class="fa-solid fa-chevron-right separator"></i>
			<span class="current">{month.monthName}</span>
		</nav>

		<div class="hero-title-group">
			<h1 class="main-title">{month.monthName}</h1>
			<div class="subtitle">
				{showingCount()} / {totalTweets} tweets with media
			</div>
		</div>
	</header>

	<main>
		<div class="tweet-list">
			{#each visibleTweets() as tweet (tweet.id_str)}
				<TweetCard
					{tweet}
					userName={userName}
					screenName={screenName} />
			{/each}
		</div>

		{#if hasMore()}
			<div class="load-more-container">
				<button
					class="load-more-btn"
					onclick={loadMore}>
					<i class="fa-solid fa-chevron-down"></i>
					<span>Load More ({showingCount()} / {totalTweets})</span>
					<i class="fa-solid fa-chevron-down"></i>
				</button>
			</div>
		{/if}
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
		padding: 40px 20px 80px;
		max-width: 700px;
		margin: 0 auto;
		position: relative;
		z-index: 1;
	}

	/* Breadcrumbs */
	.breadcrumbs {
		display: flex;
		align-items: center;
		gap: 8px;
		flex-wrap: wrap;
		margin-bottom: 40px;
		font-size: 0.85rem;
		font-family: 'Orbitron', sans-serif;
		padding: 12px 20px;
		background: rgba(0, 0, 0, 0.3);
		border: 1px solid rgba(212, 175, 55, 0.15);
		border-radius: 8px;
		backdrop-filter: blur(10px);
	}

	.breadcrumbs a {
		color: #00f0ff;
		text-decoration: none;
		transition: all 0.2s;
		padding: 2px 6px;
		border-radius: 4px;
	}

	.breadcrumbs a:hover {
		background: rgba(0, 240, 255, 0.1);
		text-shadow: 0 0 10px rgba(0, 240, 255, 0.5);
	}

	.breadcrumbs span {
		color: #666;
		font-size: 0.8rem;
	}

	.breadcrumbs .separator {
		color: #666;
		font-size: 0.65rem;
	}

	.breadcrumbs .current {
		color: #d4af37;
		font-weight: 500;
	}

	/* Hero */
	.hero-title-group {
		text-align: center;
		margin-bottom: 60px;
		position: relative;
	}

	.hero-title-group::before {
		content: '';
		position: absolute;
		top: -20px;
		left: 50%;
		transform: translateX(-50%);
		width: 100px;
		height: 3px;
		background: linear-gradient(90deg, transparent, #d4af37, transparent);
	}

	.main-title {
		font-family: 'Orbitron', sans-serif;
		font-size: 3.5rem;
		font-weight: 700;
		color: #e0e0e0;
		margin-bottom: 15px;
		text-shadow: 0 0 30px rgba(212, 175, 55, 0.3);
		letter-spacing: 0.1rem;
	}

	.subtitle {
		font-family: 'Zen Kaku Gothic New', sans-serif;
		font-size: 1.1rem;
		color: #888;
		padding: 8px 20px;
		background: rgba(0, 240, 255, 0.05);
		border: 1px solid rgba(0, 240, 255, 0.15);
		border-radius: 20px;
		display: inline-block;
	}

	/* Tweet List */
	.tweet-list {
		display: flex;
		flex-direction: column;
	}

	/* Load More Button */
	.load-more-container {
		display: flex;
		justify-content: center;
		margin: 60px 0 40px;
	}

	.load-more-btn {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 16px 32px;
		background: linear-gradient(145deg, rgba(212, 175, 55, 0.1), rgba(212, 175, 55, 0.05));
		border: 2px solid rgba(212, 175, 55, 0.4);
		border-radius: 30px;
		color: #d4af37;
		font-family: 'Orbitron', sans-serif;
		font-size: 1rem;
		font-weight: 600;
		letter-spacing: 0.1rem;
		cursor: pointer;
		transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
		backdrop-filter: blur(10px);
		box-shadow:
			0 4px 20px rgba(212, 175, 55, 0.2),
			inset 0 1px 0 rgba(255, 255, 255, 0.1);
		position: relative;
		overflow: hidden;
	}

	.load-more-btn::before {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
		transition: left 0.5s ease;
	}

	.load-more-btn:hover {
		background: linear-gradient(145deg, rgba(212, 175, 55, 0.2), rgba(212, 175, 55, 0.1));
		border-color: #d4af37;
		box-shadow:
			0 8px 30px rgba(212, 175, 55, 0.4),
			0 0 30px rgba(212, 175, 55, 0.2),
			inset 0 1px 0 rgba(255, 255, 255, 0.2);
		transform: translateY(-2px);
	}

	.load-more-btn:hover::before {
		left: 100%;
	}

	.load-more-btn:active {
		transform: translateY(0);
	}

	.load-more-btn i {
		font-size: 0.9rem;
		transition: transform 0.3s ease;
	}

	.load-more-btn:hover i:first-child {
		transform: translateY(-2px);
	}

	.load-more-btn:hover i:last-child {
		transform: translateY(2px);
	}

	/* Footer */
	.footer-links {
		display: flex;
		justify-content: center;
		gap: 30px;
		margin-bottom: 20px;
		flex-wrap: wrap;
	}

	.footer-links a {
		color: #e0e0e0;
		text-decoration: none;
		transition: all 0.3s ease;
		font-family: 'Noto Serif JP', serif;
		font-size: 1rem;
		padding: 8px 16px;
		border: 1px solid transparent;
		border-radius: 6px;
	}

	.footer-links a:hover {
		color: #00f0ff;
		border-color: rgba(0, 240, 255, 0.3);
		background: rgba(0, 240, 255, 0.05);
	}

	.copyright {
		text-align: center;
		color: #666;
		font-size: 0.85rem;
		font-family: 'Orbitron', sans-serif;
		letter-spacing: 0.05rem;
	}

	@media (max-width: 768px) {
		.container {
			padding: 20px 16px 60px;
		}

		.main-title {
			font-size: 2.2rem;
		}

		.subtitle {
			font-size: 1rem;
		}

		.breadcrumbs {
			font-size: 0.8rem;
			padding: 10px 16px;
		}

		.load-more-btn {
			padding: 14px 24px;
			font-size: 0.9rem;
		}
	}
</style>
