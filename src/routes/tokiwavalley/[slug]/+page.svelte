<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import type { TokiwaProject, TokiwaProjectImage } from '$lib/data/tokiwaProjects';

	let { data } = $props();
	const project: TokiwaProject = data.project;
	const relatedProjects = data.relatedProjects;

	let visible = $state(false);
	let currentImageIndex = $state(0);

	onMount(() => {
		setTimeout(() => {
			visible = true;
		}, 100);
	});

	const currentImage = () => project.images?.[currentImageIndex] ?? null;
	const hasImages = () => project.images && project.images.length > 0;
	const totalImages = () => project.images?.length ?? 0;

	function nextImage() {
		if (hasImages()) {
			currentImageIndex = (currentImageIndex + 1) % totalImages();
		}
	}

	function prevImage() {
		if (hasImages()) {
			currentImageIndex = (currentImageIndex - 1 + totalImages()) % totalImages();
		}
	}
</script>

<svelte:head>
	<title>{project.title} | Tokiwa Valley</title>
	<meta name="description" content={project.description} />
	{#if project.slug === 'niconico-barrage' || project.slug === 'clawd-agent3'}
		<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
	{/if}
</svelte:head>

<Header type="main" />

<nav class="breadcrumbs">
	<a href="{base}/">Home</a>
	<i class="fa-solid fa-chevron-right separator"></i>
	<a href="{base}/tokiwavalley">Tokiwa Valley</a>
	<i class="fa-solid fa-chevron-right separator"></i>
	<span class="current">{project.title}</span>
</nav>

<!-- Hero Section -->
<section class="hero" class:visible={visible}>
	<div class="hero-background">
		{#if project.thumbnail}
			<img src={project.thumbnail} alt={project.title} class="hero-image" />
		{:else}
			<div class="hero-placeholder" style="background: radial-gradient(circle at center, {project.color}33, transparent 70%);">
				<i class="fa-solid {project.icon}"></i>
			</div>
		{/if}
		<div class="hero-overlay"></div>
	</div>

	<div class="hero-content">
		<div class="project-badge" style="color: {project.color}; border-color: {project.color};">
			{project.style}
		</div>
		<h1 class="project-title">{project.title}</h1>
		<p class="project-subtitle">{project.subtitle}</p>
		<p class="project-description">{project.longDescription || project.description}</p>

		<div class="project-meta">
			{#if project.version}
				<div class="meta-item">
					<i class="fa-solid fa-tag"></i>
					<span>{project.version}</span>
				</div>
			{/if}
			{#if project.github}
				<a href={project.github} target="_blank" rel="noopener" class="meta-item meta-link">
					<i class="fa-brands fa-github"></i>
					<span>GitHub</span>
				</a>
			{/if}
			{#if project.license}
				<div class="meta-item">
					<i class="fa-solid fa-balance-scale"></i>
					<span>{project.license}</span>
				</div>
			{/if}
		</div>

		<div class="project-stats">
			{#if project.tweetCount > 0}
				<div class="stat">
					<div class="stat-value">{project.tweetCount}</div>
					<div class="stat-label">Tweets</div>
				</div>
			{/if}
			{#if project.likes}
				<div class="stat">
					<div class="stat-value">{project.likes}</div>
					<div class="stat-label">Likes</div>
				</div>
			{/if}
		</div>
	</div>
</section>

<!-- Image Gallery -->
{#if hasImages()}
	<section class="gallery" class:visible={visible}>
		<div class="section-header">
			<h2 class="section-title">Gallery</h2>
			<div class="section-desc">{totalImages()} images</div>
		</div>

		<div class="gallery-main">
			<div class="gallery-image-container">
				{#if currentImage()?.type === 'video'}
					<img src={currentImage()?.url} alt={currentImage()?.description} class="gallery-image video-thumb" />
					<i class="fa-solid fa-play video-icon"></i>
				{:else}
					<img src={currentImage()?.url} alt={currentImage()?.description} class="gallery-image" />
				{/if}
				{#if currentImage()?.description}
					<div class="image-caption">{currentImage()?.description}</div>
				{/if}
			</div>

			{#if totalImages() > 1}
				<button class="gallery-nav prev" onclick={prevImage} aria-label="Previous image">
					<i class="fa-solid fa-chevron-left"></i>
				</button>
				<button class="gallery-nav next" onclick={nextImage} aria-label="Next image">
					<i class="fa-solid fa-chevron-right"></i>
				</button>
			{/if}

			<div class="gallery-thumbnails">
				{#each project.images as image, idx}
					<button
						class="thumbnail"
						class:active={idx === currentImageIndex}
						onclick={() => currentImageIndex = idx}>
						<img src={image.url} alt="" loading="lazy" />
						{#if image.type === 'video'}
							<i class="fa-solid fa-play thumbnail-video-icon"></i>
						{/if}
					</button>
				{/each}
			</div>
		</div>
	</section>
{/if}

<!-- Features -->
{#if project.features && project.features.length > 0}
	<section class="features" class:visible={visible}>
		<div class="section-header">
			<h2 class="section-title">Features</h2>
			<div class="section-desc">{project.features.length} key features</div>
		</div>

		<div class="features-grid">
			{#each project.features as feature}
				<div class="feature-card" style="--feature-color: {project.color};">
					<div class="feature-icon" style="color: {project.color};">
						<i class="fa-solid {feature.icon}"></i>
					</div>
					<h3 class="feature-title">{feature.title}</h3>
					<p class="feature-description">{feature.description}</p>
				</div>
			{/each}
		</div>
	</section>
{/if}

<!-- Tech Stack -->
{#if project.techStack && project.techStack.length > 0}
	<section class="tech-stack" class:visible={visible}>
		<div class="section-header">
			<h2 class="section-title">Tech Stack</h2>
			<div class="section-desc">{project.techStack.length} technologies</div>
		</div>

		<div class="tech-list">
			{#each project.techStack as tech}
				<div class="tech-item">
					<span class="tech-name">{tech.name}</span>
					{#if tech.description}
						<span class="tech-desc">{tech.description}</span>
					{/if}
				</div>
			{/each}
		</div>
	</section>
{/if}

<!-- Links -->
{#if project.links && project.links.length > 0}
	<section class="links-section" class:visible={visible}>
		<div class="section-header">
			<h2 class="section-title">Links</h2>
			<div class="section-desc">{project.links.length} resources</div>
		</div>

		<div class="links-grid">
			{#each project.links as link}
				<a href={link.url} target="_blank" rel="noopener" class="link-card">
					<div class="link-icon">
						{#if link.icon}
							<i class="fa-brands {link.icon}"></i>
						{:else}
							<i class="fa-solid fa-external-link-alt"></i>
						{/if}
					</div>
					<div class="link-content">
						<div class="link-label">{link.label}</div>
					</div>
					<i class="fa-solid fa-arrow-right link-arrow"></i>
				</a>
			{/each}
		</div>
	</section>
{/if}

<!-- Twitter Embed (niconico-barrage only) -->
{#if project.slug === 'niconico-barrage'}
	<section class="twitter-embed" class:visible={visible}>
		<div class="section-header">
			<h2 class="section-title">Demo Video</h2>
			<div class="section-desc">実際の弾幕が見れる動画</div>
		</div>

		<div class="twitter-embed-container">
			{@html `<blockquote class="twitter-tweet" data-media-max-width="560" data-theme="dark"><p lang="ja" dir="ltr">DeepSeek-V3.2ファミリー爆誕🔥 徹底解説編❸<br>～ニコニコ弾幕マルチエージェント議論動画～<br><br>🎬 動画の概要<br>オープンソースAIの世界に現れた強力な挑戦者「DeepSeek-V3.2」を徹底解説します。… <a href="https://t.co/KqSGk3lkeX">https://t.co/KqSGk3lkeX</a> <a href="https://t.co/U5z98RH68c">pic.twitter.com/U5z98RH68c</a></p>&mdash; Maki@Sunwood AI Labs. (@hAru_mAki_ch) <a href="https://twitter.com/hAru_mAki_ch/status/1995538446241464536?ref_src=twsrc%5Etfw">December 1, 2025</a></blockquote>`}
		</div>
	</section>
{/if}

<!-- Twitter Embed (clawd-agent3 only) -->
{#if project.slug === 'clawd-agent3'}
	<section class="twitter-embed" class:visible={visible}>
		<div class="section-header">
			<h2 class="section-title">Demo Video</h2>
			<div class="section-desc">Remotionで動画制作</div>
		</div>

		<div class="twitter-embed-container">
			{@html `<blockquote class="twitter-tweet" data-media-max-width="560"><p lang="ja" dir="ltr">自分専用AI「clawd bot」を3人に分身させたdocker一式のOSS「Clawd Agent3」改造中❽<br><br>Clawd AgentにRemotionのSkillsを搭載して動画を作成してもらえたぞ！！！🔥🔥🔥<br><br>つまりスマホからのエージェントに簡易的な動画制作を発注できるやん！！！ <a href="https://t.co/7Bj9KbfWmB">https://t.co/7Bj9KbfWmB</a> <a href="https://t.co/ofevauDx0X">pic.twitter.com/ofevauDx0X</a></p>&mdash; Maki@Sunwood AI Labs. (@hAru_mAki_ch) <a href="https://twitter.com/hAru_mAki_ch/status/2014684282988724560?ref_src=twsrc%5Etfw">January 23, 2026</a></blockquote>`}
		</div>
	</section>
{/if}

<!-- Related Projects -->
{#if relatedProjects.length > 0}
	<section class="related" class:visible={visible}>
		<div class="section-header">
			<h2 class="section-title">Related Projects</h2>
			<div class="section-desc">More from Tokiwa Valley</div>
		</div>

		<div class="related-grid">
			{#each relatedProjects as related}
				<a href="{base}/tokiwavalley/{related.slug}" class="related-card">
					{#if related.thumbnail}
						<img src={related.thumbnail} alt={related.title} class="related-image" />
					{:else}
						<div class="related-placeholder" style="background: {related.color};">
							<i class="fa-solid {related.icon}"></i>
						</div>
					{/if}
					<div class="related-content">
						<h3 class="related-title">{related.title}</h3>
						<p class="related-description">{related.description}</p>
					</div>
				</a>
			{/each}
		</div>
	</section>
{/if}

<style>
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

	.breadcrumbs .separator {
		color: #666;
		font-size: 0.65rem;
	}

	.breadcrumbs .current {
		color: #d4af37;
		font-weight: 500;
	}

	/* Hero Section */
	.hero {
		position: relative;
		margin-bottom: 80px;
		opacity: 0;
		transform: translateY(30px);
		transition: opacity 0.8s ease, transform 0.8s ease;
	}

	.hero.visible {
		opacity: 1;
		transform: translateY(0);
	}

	.hero-background {
		position: relative;
		width: 100%;
		height: 500px;
		overflow: hidden;
		border-radius: 20px;
	}

	.hero-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.hero-placeholder {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.hero-placeholder i {
		font-size: 8rem;
		opacity: 0.3;
	}

	.hero-overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(to bottom, rgba(5, 5, 5, 0.3), rgba(5, 5, 5, 0.9));
	}

	.hero-content {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 40px;
	}

	.project-badge {
		display: inline-block;
		padding: 8px 20px;
		font-family: 'Orbitron', sans-serif;
		font-size: 0.85rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.15rem;
		background: rgba(0, 0, 0, 0.5);
		border: 2px solid;
		border-radius: 20px;
		margin-bottom: 20px;
		backdrop-filter: blur(10px);
	}

	.project-title {
		font-family: 'Noto Serif JP', serif;
		font-size: 3.5rem;
		color: #fff;
		margin-bottom: 10px;
		text-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
		line-height: 1.2;
	}

	.project-subtitle {
		font-size: 1.3rem;
		color: #00f0ff;
		margin-bottom: 20px;
		font-family: 'Orbitron', sans-serif;
		letter-spacing: 0.1rem;
	}

	.project-description {
		font-size: 1.1rem;
		color: #ccc;
		line-height: 1.8;
		max-width: 800px;
		margin-bottom: 30px;
	}

	.project-meta {
		display: flex;
		align-items: center;
		gap: 20px;
		flex-wrap: wrap;
		margin-bottom: 30px;
	}

	.meta-item {
		display: flex;
		align-items: center;
		gap: 8px;
		color: #aaa;
		font-size: 0.9rem;
		font-family: 'Orbitron', sans-serif;
	}

	.meta-link {
		color: #00f0ff;
		text-decoration: none;
		transition: color 0.2s;
	}

	.meta-link:hover {
		color: #00ffff;
		text-shadow: 0 0 10px rgba(0, 240, 255, 0.5);
	}

	.project-stats {
		display: flex;
		gap: 30px;
	}

	.stat {
		text-align: center;
	}

	.stat-value {
		font-family: 'Orbitron', sans-serif;
		font-size: 2.5rem;
		color: #d4af37;
		font-weight: 700;
	}

	.stat-label {
		font-size: 0.85rem;
		color: #888;
		text-transform: uppercase;
		letter-spacing: 0.1rem;
	}

	/* Section Header */
	.section-header {
		display: flex;
		align-items: center;
		margin-bottom: 40px;
		border-bottom: 1px solid #2b2b2b;
		padding-bottom: 10px;
	}

	.section-title {
		font-family: 'Orbitron', sans-serif;
		font-size: 2rem;
		color: #e0e0e0;
		margin-right: 20px;
	}

	.section-desc {
		color: #888;
		font-size: 0.9rem;
	}

	/* Gallery */
	.gallery {
		margin-bottom: 80px;
		opacity: 0;
		transform: translateY(30px);
		transition: opacity 0.8s ease, transform 0.8s ease;
	}

	.gallery.visible {
		opacity: 1;
		transform: translateY(0);
	}

	.gallery-main {
		position: relative;
		background: rgba(0, 0, 0, 0.3);
		border-radius: 16px;
		overflow: hidden;
		border: 1px solid rgba(255, 255, 255, 0.05);
	}

	.gallery-image-container {
		position: relative;
		width: 100%;
		aspect-ratio: 16 / 10;
	}

	.gallery-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.video-thumb {
		opacity: 0.9;
	}

	.video-icon {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 4rem;
		color: #fff;
		text-shadow: 0 2px 20px rgba(0, 0, 0, 0.8);
		pointer-events: none;
	}

	.image-caption {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 20px;
		background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
		color: #fff;
		font-size: 0.95rem;
	}

	.gallery-nav {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		width: 50px;
		height: 50px;
		background: rgba(0, 0, 0, 0.7);
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 50%;
		color: #fff;
		font-size: 1.2rem;
		cursor: pointer;
		transition: all 0.3s;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.gallery-nav:hover {
		background: rgba(0, 240, 255, 0.2);
		border-color: #00f0ff;
	}

	.gallery-nav.prev {
		left: 20px;
	}

	.gallery-nav.next {
		right: 20px;
	}

	.gallery-thumbnails {
		display: flex;
		gap: 8px;
		padding: 16px;
		overflow-x: auto;
	}

	.thumbnail {
		position: relative;
		width: 80px;
		height: 60px;
		border-radius: 8px;
		overflow: hidden;
		border: 2px solid transparent;
		cursor: pointer;
		transition: all 0.2s;
		flex-shrink: 0;
	}

	.thumbnail img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	thumbnail.active {
		border-color: #00f0ff;
		box-shadow: 0 0 10px rgba(0, 240, 255, 0.5);
	}

	.thumbnail-video-icon {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 0.8rem;
		color: #fff;
		text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
	}

	/* Features */
	.features {
		margin-bottom: 80px;
		opacity: 0;
		transform: translateY(30px);
		transition: opacity 0.8s ease, transform 0.8s ease;
	}

	.features.visible {
		opacity: 1;
		transform: translateY(0);
	}

	.features-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 24px;
	}

	.feature-card {
		background: rgba(20, 20, 25, 0.6);
		border: 1px solid rgba(255, 255, 255, 0.05);
		border-radius: 16px;
		padding: 30px;
		transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
		position: relative;
		overflow: hidden;
		backdrop-filter: blur(10px);
	}

	.feature-card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 3px;
		background: var(--feature-color, #00f0ff);
		transform: scaleX(0);
		transform-origin: left;
		transition: transform 0.6s ease;
	}

	.feature-card:hover {
		transform: translateY(-5px);
		border-color: var(--feature-color, #00f0ff);
		box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
	}

	.feature-card:hover::before {
		transform: scaleX(1);
	}

	.feature-icon {
		font-size: 2rem;
		margin-bottom: 20px;
	}

	.feature-title {
		font-family: 'Noto Serif JP', serif;
		font-size: 1.3rem;
		color: #fff;
		margin-bottom: 12px;
	}

	.feature-description {
		color: #aaa;
		line-height: 1.7;
		font-size: 0.95rem;
	}

	/* Tech Stack */
	.tech-stack {
		margin-bottom: 80px;
		opacity: 0;
		transform: translateY(30px);
		transition: opacity 0.8s ease, transform 0.8s ease;
	}

	.tech-stack.visible {
		opacity: 1;
		transform: translateY(0);
	}

	.tech-list {
		display: flex;
		flex-wrap: wrap;
		gap: 16px;
	}

	.tech-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
		padding: 20px 30px;
		background: rgba(0, 240, 255, 0.05);
		border: 1px solid rgba(0, 240, 255, 0.2);
		border-radius: 12px;
		transition: all 0.3s;
	}

	.tech-item:hover {
		background: rgba(0, 240, 255, 0.1);
		transform: translateY(-3px);
		box-shadow: 0 5px 20px rgba(0, 240, 255, 0.2);
	}

	.tech-name {
		font-family: 'Orbitron', sans-serif;
		font-size: 1rem;
		color: #00f0ff;
		font-weight: 600;
	}

	.tech-desc {
		font-size: 0.8rem;
		color: #888;
	}

	/* Links Section */
	.links-section {
		margin-bottom: 80px;
		opacity: 0;
		transform: translateY(30px);
		transition: opacity 0.8s ease, transform 0.8s ease;
	}

	.links-section.visible {
		opacity: 1;
		transform: translateY(0);
	}

	.links-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		gap: 20px;
	}

	.link-card {
		display: flex;
		align-items: center;
		gap: 16px;
		padding: 24px;
		background: rgba(212, 175, 55, 0.05);
		border: 1px solid rgba(212, 175, 55, 0.2);
		border-radius: 12px;
		text-decoration: none;
		color: inherit;
		transition: all 0.3s;
	}

	.link-card:hover {
		background: rgba(212, 175, 55, 0.1);
		transform: translateX(10px);
		box-shadow: 0 5px 20px rgba(212, 175, 55, 0.2);
	}

	.link-icon {
		font-size: 1.5rem;
		color: #d4af37;
	}

	.link-content {
		flex: 1;
	}

	.link-label {
		font-size: 1rem;
		color: #e0e0e0;
		font-weight: 500;
	}

	.link-arrow {
		color: #d4af37;
		transition: transform 0.2s;
	}

	.link-card:hover .link-arrow {
		transform: translateX(5px);
	}

	/* Related Projects */
	.related {
		margin-bottom: 80px;
		opacity: 0;
		transform: translateY(30px);
		transition: opacity 0.8s ease, transform 0.8s ease;
	}

	.related.visible {
		opacity: 1;
		transform: translateY(0);
	}

	.related-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 24px;
	}

	.related-card {
		display: block;
		background: rgba(20, 20, 25, 0.6);
		border: 1px solid rgba(255, 255, 255, 0.05);
		border-radius: 16px;
		overflow: hidden;
		text-decoration: none;
		color: inherit;
		transition: all 0.3s;
	}

	.related-card:hover {
		transform: translateY(-5px);
		border-color: rgba(0, 240, 255, 0.3);
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
	}

	.related-image {
		width: 100%;
		height: 200px;
		object-fit: cover;
	}

	.related-placeholder {
		width: 100%;
		height: 200px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.related-placeholder i {
		font-size: 3rem;
		color: rgba(255, 255, 255, 0.3);
	}

	.related-content {
		padding: 20px;
	}

	.related-title {
		font-family: 'Noto Serif JP', serif;
		font-size: 1.1rem;
		color: #fff;
		margin-bottom: 8px;
	}

	.related-description {
		font-size: 0.9rem;
		color: #aaa;
		line-height: 1.5;
	}

	/* Section transition delays */
	section:nth-child(2) { transition-delay: 0.1s; }
	section:nth-child(3) { transition-delay: 0.2s; }
	section:nth-child(4) { transition-delay: 0.3s; }
	section:nth-child(5) { transition-delay: 0.4s; }
	section:nth-child(6) { transition-delay: 0.5s; }

	/* Mobile Responsive */
	@media (max-width: 768px) {
		.hero-background {
			height: 400px;
		}

		.project-title {
			font-size: 2rem;
		}

		.project-subtitle {
			font-size: 1rem;
		}

		.project-description {
			font-size: 1rem;
		}

		.project-stats {
			gap: 20px;
		}

		.stat-value {
			font-size: 2rem;
		}

		.section-title {
			font-size: 1.5rem;
		}

		.features-grid {
			grid-template-columns: 1fr;
		}

		.gallery-nav {
			width: 40px;
			height: 40px;
			font-size: 1rem;
		}

		.gallery-nav.prev {
			left: 10px;
		}

		.gallery-nav.next {
			right: 10px;
		}

		.related-grid {
			grid-template-columns: 1fr;
		}
	}

	/* Twitter Embed */
	.twitter-embed {
		margin-bottom: 80px;
		opacity: 0;
		transform: translateY(30px);
		transition: opacity 0.8s ease, transform 0.8s ease;
	}

	.twitter-embed.visible {
		opacity: 1;
		transform: translateY(0);
	}

	.twitter-embed-container {
		background: rgba(0, 0, 0, 0.3);
		border: 1px solid rgba(212, 175, 55, 0.2);
		border-radius: 16px;
		padding: 30px;
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 400px;
		backdrop-filter: blur(10px);
	}

	.twitter-embed-container :global(.twitter-tweet) {
		margin: 0 auto !important;
	}

	.twitter-embed-container :global(iframe) {
		max-width: 100% !important;
	}
</style>
