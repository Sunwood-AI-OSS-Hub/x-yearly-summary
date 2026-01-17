import type { PageServerLoad } from './$types';
import { readFileSync } from 'fs';
import { join } from 'path';

export const load: PageServerLoad = () => {
	// JSONファイルを読み込み
	const jsonPath = join(process.cwd(), 'static/data/index.json');
	const jsonContent = readFileSync(jsonPath, 'utf-8');
	const indexData = JSON.parse(jsonContent);

	return {
		tweetsByMonth: indexData.tweetsByMonth,
		series: indexData.series,
		totalTweets: indexData.totalTweets,
		totalSeries: indexData.totalSeries
	};
};
