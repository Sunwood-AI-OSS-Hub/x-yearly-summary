<script lang="ts">
	import { base } from '$app/paths';

	let { data } = $props();

	const tweetsByMonth: any[] = data.tweetsByMonth;
</script>

<svelte:head>
	<title>Monthly Logs | 2025 Archive</title>
</svelte:head>

<div class="container">
	<header>
		<nav class="breadcrumbs">
			<a href="{base}/">Home</a>
			<i class="fa-solid fa-chevron-right separator"></i>
			<a href="{base}/2025">2025</a>
			<i class="fa-solid fa-chevron-right separator"></i>
			<span class="current">Monthly Logs</span>
		</nav>

		<div class="hero-title-group">
			<h1 class="main-title"><i class="fa-regular fa-calendar-days"></i> Monthly Logs</h1>
			<div class="subtitle">Full chronological archive by month</div>
		</div>
	</header>

	<main>
		<div class="grid">
			{#each tweetsByMonth as log}
				<a href="{base}/2025/log/{log.monthKey}" class="log-card">
					<div class="log-card-header">
						<div class="log-month">{log.monthName}</div>
					</div>
					<div class="log-card-footer">
						<span class="log-count">{log.tweetCount}</span>
						<span class="log-label">tweets</span>
					</div>
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

	.breadcrumbs .separator {
		color: #888;
		font-size: 0.7rem;
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

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 20px;
	}

	.log-card {
		display: block;
		background: rgba(0, 240, 255, 0.05);
		border: 1px solid rgba(0, 240, 255, 0.2);
		border-radius: 10px;
		padding: 20px;
		text-decoration: none;
		color: inherit;
		transition: all 0.3s ease;
	}

	.log-card:hover {
		background: rgba(0, 240, 255, 0.1);
		transform: translateY(-5px);
		box-shadow: 0 10px 30px rgba(0, 240, 255, 0.2);
	}

	.log-card-header {
		margin-bottom: 15px;
	}

	.log-month {
		font-family: 'Orbitron', sans-serif;
		font-size: 1.2rem;
		color: #e0e0e0;
	}

	.log-card-footer {
		display: flex;
		align-items: baseline;
		gap: 5px;
	}

	.log-count {
		font-family: 'Orbitron', sans-serif;
		font-size: 1.5rem;
		color: #00f0ff;
	}

	.log-label {
		font-size: 0.8rem;
		color: #888;
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
		.grid {
			grid-template-columns: 1fr;
		}

		.main-title {
			font-size: 2rem;
		}
	}
</style>
