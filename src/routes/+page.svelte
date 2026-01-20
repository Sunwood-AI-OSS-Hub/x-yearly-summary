<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import { yearsData } from '$lib/data/yearsData';
	import { onMount } from 'svelte';
	import type { YearData } from '$lib/data/yearsData';
	import { base } from '$app/paths';

	let sortedYears = $state<YearData[]>([]);
	let visible = $state(false);

	onMount(() => {
		// 年を降順でソート（新しい年が上に来るように）
		sortedYears = [...yearsData].sort((a, b) => b.year - a.year);

		// フェードインアニメーション
		setTimeout(() => {
			visible = true;
		}, 100);
	});

	function getYearLink(link: string) {
		return `${base}${link}`;
	}
</script>

<Header type="main" />

<p class="intro">
	和風とサイバーパンクが融合した、プロジェクトアーカイブコレクション。<br />
	年別に整理された創作活動の軌跡をご覧ください。
</p>

<!-- Tokiwa Valley Showcase -->
<section class="showcase-section" class:visible={visible}>
	<h2 class="section-title">Featured Showcase</h2>
	<div class="showcase-grid">
		<a class="showcase-card" href="{base}/tokiwavalley">
			<div class="showcase-icon"><i class="fa-solid fa-mountain"></i></div>
			<h3>Tokiwa Valley</h3>
			<p>
				ニコニコ弾幕マルチエージェントプロンプトとAI人狼村の<br />
				プロジェクトショーケース
			</p>
			<div class="showcase-tags">
				<span class="tag">AI Agents</span>
				<span class="tag">Multi-Agent</span>
				<span class="tag">Werewolf</span>
			</div>
		</a>
	</div>
</section>

<section class="years-section">
	<h2 class="section-title">年別アーカイブ</h2>
	<div class="year-grid" class:visible={visible}>
		{#each sortedYears as yearData (yearData.year)}
			<a class="year-card" href={getYearLink(yearData.link)}>
				<h3>{yearData.year}</h3>
				<p>{yearData.description}</p>
				<div class="stats">
					<div class="stat-item">
						<span class="stat-label">投稿数</span>
						<span class="stat-value">{yearData.stats.posts}</span>
					</div>
					<div class="stat-item">
						<span class="stat-label">いいね数</span>
						<span class="stat-value">{yearData.stats.likes}</span>
					</div>
					<div class="stat-item">
						<span class="stat-label">リポスト数</span>
						<span class="stat-value">{yearData.stats.retweets}</span>
					</div>
				</div>
			</a>
		{/each}
	</div>
</section>

<style>
	.intro {
		text-align: center;
		font-size: 1.1rem;
		color: #aaa;
		max-width: 800px;
		margin: 0 auto 60px;
		line-height: 1.8;
	}

	/* Showcase Section */
	.showcase-section {
		margin-bottom: 100px;
		opacity: 0;
		transform: translateY(30px);
		transition: opacity 0.8s ease, transform 0.8s ease;
	}

	.showcase-section.visible {
		opacity: 1;
		transform: translateY(0);
	}

	.showcase-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 40px;
		max-width: 600px;
		margin: 0 auto;
	}

	.showcase-card {
		background: linear-gradient(145deg, rgba(20, 20, 25, 0.8), rgba(10, 10, 15, 0.9));
		border: 2px solid rgba(0, 240, 255, 0.3);
		border-radius: 20px;
		padding: 40px;
		text-decoration: none;
		color: inherit;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
		position: relative;
		overflow: hidden;
		backdrop-filter: blur(10px);
	}

	.showcase-card::before {
		content: '';
		position: absolute;
		top: -50%;
		left: -50%;
		width: 200%;
		height: 200%;
		background: radial-gradient(circle, rgba(0, 240, 255, 0.1), transparent 70%);
		opacity: 0;
		transition: opacity 0.6s ease;
	}

	.showcase-card:hover {
		transform: translateY(-10px) scale(1.02);
		border-color: #00f0ff;
		box-shadow:
			0 20px 60px rgba(0, 0, 0, 0.8),
			0 0 40px rgba(0, 240, 255, 0.3),
			inset 0 1px 0 rgba(255, 255, 255, 0.1);
	}

	.showcase-card:hover::before {
		opacity: 1;
	}

	.showcase-icon {
		font-size: 3.5rem;
		margin-bottom: 20px;
		filter: drop-shadow(0 0 20px rgba(0, 240, 255, 0.5));
	}

	.showcase-card h3 {
		font-size: 2rem;
		color: #00f0ff;
		margin-bottom: 15px;
		font-family: 'Noto Serif JP', serif;
		text-shadow: 0 0 20px rgba(0, 240, 255, 0.3);
	}

	.showcase-card p {
		font-size: 0.95rem;
		color: #aaa;
		margin-bottom: 20px;
		line-height: 1.6;
	}

	.showcase-tags {
		display: flex;
		gap: 8px;
		flex-wrap: wrap;
		justify-content: center;
		margin-top: auto;
	}

	.showcase-tags .tag {
		font-family: 'Orbitron', sans-serif;
		font-size: 0.7rem;
		padding: 6px 12px;
		background: rgba(0, 240, 255, 0.1);
		border: 1px solid rgba(0, 240, 255, 0.3);
		border-radius: 15px;
		color: #00f0ff;
		letter-spacing: 0.05rem;
	}

	.years-section {
		margin-bottom: 100px;
	}

	.section-title {
		font-size: 2.5rem;
		text-align: center;
		margin-bottom: 60px;
		color: #d4af37;
		position: relative;
		padding-bottom: 20px;
	}

	.section-title::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 100px;
		height: 3px;
		background: linear-gradient(90deg, transparent, #d4af37, transparent);
	}

	.year-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		gap: 40px;
		opacity: 0;
		transform: translateY(30px);
		transition: opacity 0.8s ease, transform 0.8s ease;
	}

	.year-grid.visible {
		opacity: 1;
		transform: translateY(0);
	}

	.year-card {
		background: rgba(20, 20, 25, 0.6);
		border: 2px solid rgba(212, 175, 55, 0.3);
		backdrop-filter: blur(10px);
		padding: 40px;
		text-decoration: none;
		color: inherit;
		display: block;
		transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
		position: relative;
		overflow: hidden;
	}

	.year-card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 3px;
		background: linear-gradient(90deg, transparent, #d4af37, transparent);
		transform: translateX(-100%);
		transition: transform 0.6s ease;
	}

	.year-card:hover {
		transform: translateY(-10px);
		box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7);
		border-color: #00f0ff;
	}

	.year-card:hover::before {
		transform: translateX(100%);
	}

	.year-card h3 {
		font-size: 3rem;
		color: #d4af37;
		margin-bottom: 15px;
		font-family: 'Orbitron', sans-serif;
	}

	.year-card p {
		font-size: 1rem;
		color: #aaa;
		margin-bottom: 30px;
	}

	.stats {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 20px;
	}

	.stat-item {
		text-align: center;
		padding: 15px;
		background: rgba(0, 0, 0, 0.3);
		border: 1px solid #2b2b2b;
	}

	.stat-label {
		display: block;
		font-size: 0.8rem;
		color: #666;
		margin-bottom: 5px;
		font-family: 'Orbitron', sans-serif;
	}

	.stat-value {
		display: block;
		font-size: 1.5rem;
		color: #00f0ff;
		font-weight: 700;
	}

	@media (max-width: 768px) {
		.year-grid {
			grid-template-columns: 1fr;
		}

		.stats {
			grid-template-columns: 1fr;
		}
	}
</style>
