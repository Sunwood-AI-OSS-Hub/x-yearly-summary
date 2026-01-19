/**
 * SvelteKit Server Hooks
 * .html拡張子付きリンクをリダイレクト処理
 */

import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const url = event.url;

	// .html拡張子付きリンクをリダイレクト
	// 例: /2025/log/2025-01.html -> /2025/log/2025-01
	if (url.pathname.endsWith('.html')) {
		const newPathname = url.pathname.replace(/\.html$/, '');

		// 301永久リダイレクト
		return new Response(null, {
			status: 301,
			headers: {
				Location: newPathname
			}
		});
	}

	// 通常のリクエスト処理
	return resolve(event);
};
