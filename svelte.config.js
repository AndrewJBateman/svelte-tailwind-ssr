// import { resolve } from 'path';
// import { vitePreprocess } from '@sveltejs/kit/vite';
import preprocess from 'svelte-preprocess';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'],
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: true
	}),

	kit: {
		// adapter: adapter({ out: 'build' }),
		alias: {
			$lib: './src/lib/',
			$components: './src/components/'
		}
	}
};

export default config;
