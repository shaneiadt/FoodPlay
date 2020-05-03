import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import serve from 'rollup-plugin-serve';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';
import typescriptCompiler from 'typescript';
import sveltePreprocessor from 'svelte-preprocess';

import rollup_start_dev from './rollup_start_dev';

const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/index.ts',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'public/build/bundle.js'
	},
	plugins: [
		svelte({
			// enable run-time checks when not in production
			dev: !production,
			extensions: ['.svelte'],
			preprocess: sveltePreprocessor({ postcss: true }),
			emitCss: true
		}),
		postcss({
			extract: true,
			minimize: true,
			use: [
				['sass', {
					includePaths: [
						'./node_modules'
					]
				}]
			]
		}),
		typescript({
			typescript: typescriptCompiler,
			clean: true
		}),
		resolve({
			browser: true,
			dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/')
		}),
		commonjs({ include: 'node_modules/**' }),

		!production && rollup_start_dev,

		!production && serve({
			contentBase: './public',
			open: false
		}),

		// Watch the `public` directory and refresh the
		// browser on changes when not in production
		!production && livereload('public'),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser({ sourcemap: !production ? true : false })
	],
	watch: {
		clearScreen: false
	}
};

// function serve() {
// 	let started = false;

// 	return {
// 		writeBundle() {
// 			if (!started) {
// 				started = true;

// 				require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
// 					stdio: ['ignore', 'inherit', 'inherit'],
// 					shell: true
// 				});
// 			}
// 		}
// 	};
// }
