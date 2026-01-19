import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { readFileSync } from 'fs';
import { join } from 'path';

export const load: PageServerLoad = ({ params }) => {
	const slug = params.slug;

	// JSONファイルを読み込み
	const jsonPath = join(process.cwd(), 'static/data/series.json');
	const jsonContent = readFileSync(jsonPath, 'utf-8');
	const seriesData = JSON.parse(jsonContent);

	// 該当するシリーズを検索
	const seriesDataItem = seriesData.find((s: any) => s.slug === slug);

	if (!seriesDataItem) {
		throw error(404, `Series ${slug} not found`);
	}

	return {
		series: seriesDataItem
	};
};
