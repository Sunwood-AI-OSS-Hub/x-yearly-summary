import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { readFileSync } from 'fs';
import { join } from 'path';

export const load: PageServerLoad = ({ params }) => {
	const monthKey = params.month;

	// 月キーが正しい形式かチェック（YYYY-MM）
	if (!/^\d{4}-\d{2}$/.test(monthKey)) {
		throw error(400, 'Invalid month format');
	}

	// JSONファイルを読み込み
	const jsonPath = join(process.cwd(), 'static/data/tweets-by-month.json');
	const jsonContent = readFileSync(jsonPath, 'utf-8');
	const tweetsByMonthData = JSON.parse(jsonContent);

	// 該当する月のデータを検索
	const monthData = tweetsByMonthData.find((m: any) => m.monthKey === monthKey);

	if (!monthData) {
		throw error(404, `Month ${monthKey} not found`);
	}

	return {
		month: monthData
	};
};
