import type { PageServerLoad } from './$types';
import { readFileSync } from 'fs';
import { join } from 'path';

export const load: PageServerLoad = () => {
	// JSONファイルを読み込み
	const jsonPath = join(process.cwd(), 'static/data/tweets-by-month.json');
	const jsonContent = readFileSync(jsonPath, 'utf-8');
	const tweetsByMonthData = JSON.parse(jsonContent);

	return {
		tweetsByMonth: tweetsByMonthData
	};
};
