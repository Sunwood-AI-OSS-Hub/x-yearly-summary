import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const seriesData = JSON.parse(
	fs.readFileSync(path.join(__dirname, '../static/data/series.json'), 'utf-8')
);

// Tokiwa Valley プロジェクトのキーワード
const projectKeywords = {
	niconico: ['ニコニコ弾幕マルチエージェントプロンプト', '弾幕', 'barrage'],
	discussion: ['エージェントたちの優雅な議論', '投コメ'],
	werewolf: ['AI人狼村', '人狼', 'Werewolf', 'werewolf'],
	pseudo: ['疑似マルチエージェント', 'なんJ']
};

interface Media {
	type: string;
	url: string;
	media_url_https?: string;
}

interface Tweet {
	full_text: string;
	extended_entities?: {
		media?: Media[];
	};
	entities?: {
		media?: Media[];
	};
}

interface Series {
	title: string;
	slug: string;
	tweets?: Tweet[];
}

function findThumbnailUrl(series: Series): string | null {
	if (!series.tweets || series.tweets.length === 0) return null;

	// 最初のツイートの画像を探す
	for (const tweet of series.tweets) {
		const media = tweet.extended_entities?.media || tweet.entities?.media;
		if (media && media.length > 0) {
			const firstMedia = media[0];
			return firstMedia.media_url_https || firstMedia.url || null;
		}
	}

	return null;
}

function findSeriesByKeywords(keywords: string[]): Series | null {
	for (const series of seriesData) {
		const title = series.title || '';
		const slug = series.slug || '';

		for (const keyword of keywords) {
			if (title.includes(keyword) || slug.includes(keyword)) {
				return series;
			}
		}
	}
	return null;
}

// 各プロジェクトのシリーズを探して画像を取得
const projects = {
	niconico: findSeriesByKeywords(projectKeywords.niconico),
	discussion: findSeriesByKeywords(projectKeywords.discussion),
	werewolf: findSeriesByKeywords([...projectKeywords.werewolf, ...projectKeywords.pseudo]),
	pseudo: findSeriesByKeywords(projectKeywords.pseudo)
};

const results: Record<string, any> = {};

for (const [key, series] of Object.entries(projects)) {
	if (series) {
		const thumbnail = findThumbnailUrl(series);
		results[key] = {
			title: series.title,
			slug: series.slug,
			thumbnail: thumbnail || null,
			tweetCount: series.tweets?.length || 0
		};
	}
}

console.log(JSON.stringify(results, null, 2));
