import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { getProjectBySlug, tokiwaProjects } from '$lib/data/tokiwaProjects';

export const prerender = true;

export const load: PageServerLoad = ({ params }) => {
	const slug = params.slug;
	const project = getProjectBySlug(slug);

	if (!project) {
		throw error(404, `Project "${slug}" not found`);
	}

	// 関連プロジェクトを取得（現在のプロジェクトを除く）
	const relatedProjects = tokiwaProjects
		.filter((p) => p.slug !== slug)
		.slice(0, 3);

	return {
		project,
		relatedProjects
	};
};
