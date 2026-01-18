import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// GitHub Pagesのサブディレクトリ対応
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/x-yearly-summary' : ''
		},
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: false,
			trailingSlash: 'always'
		}),
		prerender: {
			handleHttpError: ({ status, message }) => {
				// 404エラーを無視
				if (status === 404) {
					return;
				}
				// その他のエラーはコンソールに出力
				console.warn(`Prerender error: ${status} - ${message}`);
			}
		}
	}
};

export default config;
