<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import { tokiwaProjects, type TokiwaProject } from '$lib/data/tokiwaProjects';

	let visible = $state(false);

	onMount(() => {
		setTimeout(() => {
			visible = true;
		}, 100);
	});

	const projects: TokiwaProject[] = tokiwaProjects;
</script>

<svelte:head>
	<title>Tokiwa Valley | Project Showcase</title>
	<meta name="description" content="ニコニコ弾幕マルチエージェントプロンプトとAI人狼村のプロジェクトショーケース" />
</svelte:head>

<Header type="main" />

<nav class="breadcrumbs">
	<a href="{base}/">Home</a>
	<i class="fa-solid fa-chevron-right separator"></i>
	<span class="current">Tokiwa Valley</span>
</nav>

<section class="intro" class:visible={visible}>
	<div class="intro-content">
		<h1 class="page-title">Tokiwa Valley Showcase</h1>
		<p class="page-subtitle">
			和風とサイバーパンクが融合した、AIエージェントプロジェクトコレクション。<br />
			「大阪AI文化万博」向けに作成された、ニコニコ弾幕マルチエージェントプロンプトとAI人狼村の創作活動をご覧ください。
		</p>
	</div>
</section>

<section class="projects" class:visible={visible}>
	<div class="section-header">
		<div class="section-title">Featured Projects</div>
		<div class="section-desc">{projects.length} works for Tokiwa Valley</div>
	</div>

	<div class="insta-grid">
		{#each projects as project}
			<a
				href="{base}/tokiwavalley/{project.slug}"
				class="insta-tile"
				class:has-image={project.thumbnail}
				style="--tile-color: {project.color}">
				{#if project.thumbnail}
					<img src={project.thumbnail} alt={project.title} class="insta-image" loading="lazy" />
				{/if}
				<div class="insta-icon">
					<i class="fa-solid {project.icon}"></i>
				</div>
				<div class="insta-overlay">
					<div class="insta-title">{project.title}</div>
					<div class="insta-description">{project.description}</div>
					<div class="insta-meta">
						<span class="insta-style" style:color={project.color}>{project.style}</span>
						<span class="insta-count">{project.tweetCount} tweets</span>
					</div>
				</div>
			</a>
		{/each}
	</div>
</section>

<style>
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

	.breadcrumbs .separator {
		color: #666;
		font-size: 0.65rem;
	}

	.breadcrumbs .current {
		color: #d4af37;
		font-weight: 500;
	}

	section {
		margin-bottom: 80px;
		opacity: 0;
		transform: translateY(30px);
		transition: opacity 0.8s ease, transform 0.8s ease;
	}

	section.visible {
		opacity: 1;
		transform: translateY(0);
	}

	.intro {
		text-align: center;
		margin-bottom: 60px;
	}

	.intro-content {
		max-width: 800px;
		margin: 0 auto;
	}

	.page-title {
		font-family: 'Noto Serif JP', serif;
		font-size: 3rem;
		color: #d4af37;
		margin-bottom: 20px;
		text-shadow: 0 0 30px rgba(212, 175, 55, 0.3);
		letter-spacing: 0.1rem;
	}

	.page-subtitle {
		font-size: 1.1rem;
		color: #aaa;
		line-height: 1.8;
	}

	.section-header {
		display: flex;
		align-items: center;
		margin-bottom: 40px;
		border-bottom: 1px solid #2b2b2b;
		padding-bottom: 10px;
	}

	.section-title {
		font-family: 'Orbitron', sans-serif;
		font-size: 2.5rem;
		color: #e0e0e0;
		margin-right: 20px;
	}

	.section-desc {
		color: #888;
		font-size: 0.9rem;
	}

	/* Instagram-style Grid - Larger tiles than 2025 page */
	.insta-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 4px;
	}

	.insta-tile {
		position: relative;
		display: block;
		aspect-ratio: 1;
		text-decoration: none;
		color: inherit;
		background: linear-gradient(135deg, rgba(0, 0, 0, 0.3), rgba(20, 20, 25, 0.5));
		border: 1px solid rgba(255, 255, 255, 0.05);
		overflow: hidden;
		transition: transform 0.3s ease;
	}

	.insta-tile:not(.has-image) {
		background: radial-gradient(circle at center, rgba(var(--tile-color-rgb, 0, 240, 255), 0.1), transparent 70%);
	}

	.insta-tile:hover {
		transform: scale(1.02);
		z-index: 1;
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
	}

	.insta-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.insta-icon {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 5rem;
		opacity: 0.3;
		color: var(--tile-color, #00f0ff);
		text-shadow: 0 0 30px var(--tile-color, #00f0ff);
		transition: opacity 0.3s ease, transform 0.3s ease;
	}

	.insta-tile.has-image .insta-icon {
		opacity: 0;
	}

	.insta-tile:not(.has-image):hover .insta-icon {
		opacity: 0.1;
		transform: translate(-50%, -50%) scale(1.2);
	}

	.insta-overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8));
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 20px;
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	.insta-tile:not(.has-image) .insta-overlay {
		opacity: 1;
	}

	.insta-tile:hover .insta-overlay {
		opacity: 1;
	}

	.insta-title {
		font-family: 'Noto Serif JP', serif;
		font-size: 1.1rem;
		font-weight: 500;
		color: #fff;
		text-align: center;
		line-height: 1.4;
		margin-bottom: 8px;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.insta-description {
		font-size: 0.85rem;
		color: #aaa;
		text-align: center;
		line-height: 1.4;
		margin-bottom: 12px;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.insta-meta {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 6px;
		font-size: 0.75rem;
	}

	.insta-style {
		font-family: 'Orbitron', sans-serif;
		text-transform: uppercase;
		letter-spacing: 0.1rem;
		background: rgba(255, 255, 255, 0.15);
		padding: 4px 10px;
		border-radius: 4px;
	}

	.insta-count {
		font-family: 'Orbitron', sans-serif;
		color: #888;
	}

	@media (max-width: 768px) {
		.page-title {
			font-size: 2rem;
		}

		.page-subtitle {
			font-size: 1rem;
		}

		.section-title {
			font-size: 1.8rem;
		}

		.insta-grid {
			grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		}

		.insta-icon {
			font-size: 3rem;
		}

		.insta-title {
			font-size: 0.95rem;
		}

		.insta-description {
			font-size: 0.75rem;
		}
	}
</style>
