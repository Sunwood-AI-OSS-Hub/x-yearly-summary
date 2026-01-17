import type { PageServerLoad } from './$types';
import { readFileSync } from 'fs';
import { join } from 'path';

export const load: PageServerLoad = () => {
	// JSONファイルを読み込み
	const jsonPath = join(process.cwd(), 'static/data/series.json');
	const jsonContent = readFileSync(jsonPath, 'utf-8');
	const seriesData = JSON.parse(jsonContent);

	return {
		series: seriesData
	};
};
