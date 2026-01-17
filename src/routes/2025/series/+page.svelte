<script lang="ts">
	import { base } from '$app/paths';

	let { data } = $props();

	const series: any[] = data.series;
</script>

<svelte:head>
	<title>Series Collection | 2025 Archive</title>
</svelte:head>

<div class="container">
	<header>
		<nav class="breadcrumbs">
			<a href="{base}/">Home</a>
			<span>></span>
			<a href="{base}/2025">2025</a>
			<span>></span>
			<span class="current">Series</span>
		</nav>

		<div class="hero-title-group">
			<h1 class="main-title">📚 Series Collection</h1>
			<div class="subtitle">{series.length} curated series</div>
		</div>
	</header>

	<main>
		<div class="series-list">
			{#each series as s}
				<a href="{base}/2025/series/{s.slug}" class="series-card">
					<div class="series-info">
						<div class="series-title">{s.title}</div>
						<div class="series-meta">
							<span class="series-style">{s.style}</span>
							<span class="series-count">{s.tweetCount} tweets</span>
						</div>
					</div>
					<div class="series-arrow">→</div>
				</a>
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
		max-width: 1000px;
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

	.series-list {
		display: flex;
		flex-direction: column;
		gap: 15px;
	}

	.series-card {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: rgba(212, 175, 55, 0.05);
		border: 1px solid rgba(212, 175, 55, 0.2);
		border-radius: 8px;
		padding: 15px 20px;
		text-decoration: none;
		color: inherit;
		transition: all 0.3s ease;
	}

	.series-card:hover {
		background: rgba(212, 175, 55, 0.1);
		transform: translateX(10px);
		box-shadow: 0 5px 20px rgba(212, 175, 55, 0.2);
	}

	.series-info {
		flex: 1;
	}

	.series-title {
		font-size: 1rem;
		color: #e0e0e0;
		margin-bottom: 5px;
	}

	.series-meta {
		display: flex;
		gap: 15px;
		font-size: 0.8rem;
		color: #888;
	}

	.series-style {
		font-family: 'Orbitron', sans-serif;
		padding: 2px 8px;
		background: rgba(212, 175, 55, 0.1);
		border-radius: 4px;
		text-transform: uppercase;
	}

	.series-count {
		color: #d4af37;
	}

	.series-arrow {
		font-size: 1.5rem;
		color: #d4af37;
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
