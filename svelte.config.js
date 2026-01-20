import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// デバッグモードで詳細ログを出力
		// log: {
		// 	handlers: true
	// },
		// GitHub Pagesのサブディレクトリ対応
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/x-yearly-summary' : ''
		},
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true,
			trailingSlash: 'ignore'
		}),
		prerender: {
			handleHttpError: ({ status, message }) => {
				// エラーをコンソールに出力（404も含む）
				console.warn(`Prerender error: ${status} - ${message}`);
			}
		}
	}
};

export default config;
