<script lang="ts">
	import type { Tweet } from '$lib/data/types';

	interface Props {
		tweet: Tweet;
		userName: string;
		screenName: string;
	}

	let { tweet, userName, screenName }: Props = $props();

	const tweetUrl = `https://twitter.com/${screenName}/status/${tweet.id_str}`;
	const photoUrl = `https://x.com/${screenName}/status/${tweet.id_str}/photo/1`;
	const profileImageUrl = `https://unavatar.io/twitter/${screenName}`;

	// テキスト内の改行を<br>に変換
	const formattedText = tweet.full_text.replace(/\n/g, '<br>');

	// URLをリンクに変換
	const textWithLinks = tweet.entities?.urls
		? tweet.entities.urls.reduce((text, url) => {
				return text.replace(url.url, `<a href="${url.expanded_url}" target="_blank" rel="noopener" class="tweet-link">${url.display_url}</a>`);
			}, formattedText)
		: formattedText;

	// メディアを取得
	const media = tweet.entities?.media || [];
	const hasMedia = media.length > 0;

	// 統計情報
	const likes = tweet.favorite_count || 0;
	const retweets = tweet.retweet_count || 0;

	// 時間を短縮表示
	const shortTime = tweet.time_str;
	const shortDate = tweet.date_str.replace(',', '').replace(/\s+\d{4}/, '');
</script>

{#if hasMedia}
	<div class="tweet-card">
		<!-- Card Header -->
		<div class="tweet-header">
			<div class="avatar">
				<img
					src={profileImageUrl}
					alt={userName}
					class="avatar-image"
					loading="lazy"
					onerror={(e) => {
						e.currentTarget.style.display = 'none';
						e.currentTarget.nextElementSibling.style.display = 'flex';
					}} />
				<div class="avatar-fallback">
					<span class="avatar-initial">M</span>
				</div>
			</div>
			<div class="tweet-meta">
				<div class="tweet-author">
					<span class="author-name">{userName}</span>
					<i class="verified-badge fa-solid fa-circle-check"></i>
				</div>
				<div class="tweet-handle">@{screenName}</div>
			</div>
			<div class="tweet-time">
				<a href={tweetUrl} target="_blank" rel="noopener" class="time-link">
					{shortDate}
				</a>
			</div>
		</div>

		<!-- Tweet Content -->
		<div class="tweet-content">
			<div class="tweet-text">
				{@html textWithLinks}
			</div>

			<div class="tweet-media">
				{#each media as m, i}
					{#if m.type === 'photo'}
						<a href={m.expanded_url} target="_blank" rel="noopener" class="media-link">
							<img
								src={m.media_url_https}
								alt="Tweet image"
								class="media-image"
								loading="lazy" />
						</a>
					{:else if m.type === 'video' || m.type === 'animated_gif'}
						<a href={m.expanded_url} target="_blank" rel="noopener" class="media-link video-link">
							<div class="video-placeholder">
								<i class="video-icon fa-solid fa-play"></i>
								<img
									src={m.media_url_https}
									alt="Video thumbnail"
									class="media-image video-thumb"
									loading="lazy" />
							</div>
						</a>
					{/if}
				{/each}
			</div>
		</div>

		<!-- Tweet Stats -->
		<div class="tweet-stats">
			<div class="stat-item" class:has-value={retweets > 0}>
				<i class="stat-icon fa-solid fa-rotate"></i>
				<span class="stat-count">{retweets || ''}</span>
			</div>
			<div class="stat-item" class:has-value={likes > 0}>
				<i class="stat-icon fa-solid fa-heart"></i>
				<span class="stat-count">{likes || ''}</span>
			</div>
			<a href={tweetUrl} target="_blank" rel="noopener" class="tweet-link-btn">
				<i class="link-icon fa-solid fa-arrow-up-right-from-square"></i>
				View on X
			</a>
		</div>

		<!-- Decorative Corner -->
		<div class="corner-decoration"></div>
	</div>
{/if}

<style>
	.tweet-card {
		position: relative;
		background: linear-gradient(145deg, rgba(20, 20, 25, 0.9), rgba(10, 10, 15, 0.95));
		border: 1px solid rgba(212, 175, 55, 0.2);
		border-radius: 16px;
		padding: 24px;
		margin-bottom: 24px;
		transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
		overflow: hidden;
		backdrop-filter: blur(10px);
		box-shadow:
			0 4px 20px rgba(0, 0, 0, 0.3),
			inset 0 1px 0 rgba(255, 255, 255, 0.05);
	}

	.tweet-card:hover {
		transform: translateY(-4px);
		border-color: rgba(0, 240, 255, 0.4);
		box-shadow:
			0 12px 40px rgba(0, 0, 0, 0.5),
			0 0 30px rgba(0, 240, 255, 0.1),
			inset 0 1px 0 rgba(255, 255, 255, 0.1);
	}

	/* Decorative Corner */
	.corner-decoration {
		position: absolute;
		top: 0;
		right: 0;
		width: 60px;
		height: 60px;
		background: linear-gradient(135deg, transparent 50%, rgba(212, 175, 55, 0.1) 50%);
		pointer-events: none;
		transition: all 0.3s ease;
	}

	.tweet-card:hover .corner-decoration {
		background: linear-gradient(135deg, transparent 50%, rgba(0, 240, 255, 0.2) 50%);
	}

	/* Header */
	.tweet-header {
		display: flex;
		align-items: flex-start;
		gap: 12px;
		margin-bottom: 16px;
	}

	.avatar {
		width: 48px;
		height: 48px;
		border-radius: 50%;
		overflow: hidden;
		flex-shrink: 0;
		box-shadow: 0 2px 10px rgba(212, 175, 55, 0.3);
		position: relative;
	}

	.avatar-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.avatar-fallback {
		display: none;
		width: 100%;
		height: 100%;
		background: linear-gradient(135deg, #d4af37, #f4cf67);
		align-items: center;
		justify-content: center;
	}

	.avatar-initial {
		font-family: 'Noto Serif JP', serif;
		font-size: 1.4rem;
		font-weight: 700;
		color: #050505;
	}

	.tweet-meta {
		flex: 1;
		min-width: 0;
	}

	.tweet-author {
		display: flex;
		align-items: center;
		gap: 4px;
		margin-bottom: 2px;
	}

	.author-name {
		font-family: 'Noto Serif JP', serif;
		font-size: 1rem;
		font-weight: 600;
		color: #e0e0e0;
	}

	.verified-badge {
		color: #00f0ff;
		font-size: 0.8rem;
		text-shadow: 0 0 10px rgba(0, 240, 255, 0.5);
	}

	.tweet-handle {
		font-size: 0.9rem;
		color: #888;
	}

	.tweet-time {
		flex-shrink: 0;
	}

	.time-link {
		font-size: 0.85rem;
		color: #666;
		text-decoration: none;
		transition: color 0.2s;
	}

	.time-link:hover {
		color: #00f0ff;
	}

	/* Content */
	.tweet-content {
		margin-bottom: 16px;
	}

	.tweet-text {
		font-size: 1rem;
		line-height: 1.7;
		color: #e0e0e0;
		word-wrap: break-word;
		white-space: pre-wrap;
		margin-bottom: 12px;
	}

	.tweet-link {
		color: #00f0ff;
		text-decoration: none;
		border-bottom: 1px dotted rgba(0, 240, 255, 0.5);
		transition: all 0.2s;
	}

	.tweet-link:hover {
		color: #00ffff;
		border-bottom-style: solid;
		text-shadow: 0 0 10px rgba(0, 240, 255, 0.5);
	}

	/* Media */
	.tweet-media {
		display: grid;
		gap: 8px;
		margin-top: 12px;
	}

	.tweet-media:has(.media-link:nth-child(1):nth-last-child(1)) {
		grid-template-columns: 1fr;
	}

	.tweet-media:has(.media-link:nth-child(1):nth-last-child(2)),
	.tweet-media:has(.media-link:nth-child(1):nth-last-child(3)),
	.tweet-media:has(.media-link:nth-child(1):nth-last-child(4)) {
		grid-template-columns: repeat(2, 1fr);
	}

	.media-link {
		display: block;
		border-radius: 12px;
		overflow: hidden;
		position: relative;
		aspect-ratio: 16 / 10;
		background: rgba(0, 0, 0, 0.3);
		border: 1px solid rgba(255, 255, 255, 0.05);
		transition: all 0.3s ease;
	}

	.media-link:hover {
		border-color: rgba(0, 240, 255, 0.4);
		box-shadow: 0 0 20px rgba(0, 240, 255, 0.2);
	}

	.media-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.video-thumb {
		opacity: 0.8;
		filter: saturate(0.7);
	}

	.video-placeholder {
		position: relative;
		width: 100%;
		height: 100%;
	}

	.video-icon {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 2rem;
		color: #fff;
		text-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
		pointer-events: none;
	}

	/* Stats */
	.tweet-stats {
		display: flex;
		align-items: center;
		gap: 20px;
		padding-top: 16px;
		border-top: 1px solid rgba(255, 255, 255, 0.05);
	}

	.stat-item {
		display: flex;
		align-items: center;
		gap: 6px;
		color: #666;
		font-size: 0.9rem;
		transition: all 0.2s;
	}

	.stat-item.has-value {
		color: #888;
	}

	.stat-item:hover {
		color: #d4af37;
	}

	.stat-icon {
		font-size: 0.95rem;
		width: 16px;
		text-align: center;
	}

	.stat-icon.fa-heart {
		color: #ff6b6b;
	}

	.stat-icon.fa-rotate {
		color: #4ecdc4;
	}

	.stat-count {
		font-family: 'Orbitron', sans-serif;
		font-size: 0.95rem;
	}

	.tweet-link-btn {
		margin-left: auto;
		display: flex;
		align-items: center;
		gap: 6px;
		padding: 8px 16px;
		background: rgba(0, 240, 255, 0.1);
		border: 1px solid rgba(0, 240, 255, 0.3);
		border-radius: 20px;
		color: #00f0ff;
		text-decoration: none;
		font-size: 0.85rem;
		font-family: 'Orbitron', sans-serif;
		transition: all 0.3s ease;
	}

	.tweet-link-btn:hover {
		background: rgba(0, 240, 255, 0.2);
		border-color: #00f0ff;
		box-shadow: 0 0 15px rgba(0, 240, 255, 0.3);
	}

	.link-icon {
		font-size: 1rem;
	}

	@media (max-width: 768px) {
		.tweet-card {
			padding: 20px;
		}

		.avatar {
			width: 40px;
			height: 40px;
		}

		.avatar-initial {
			font-size: 1.2rem;
		}

		.author-name {
			font-size: 0.95rem;
		}

		.tweet-text {
			font-size: 0.95rem;
		}
	}
</style>
