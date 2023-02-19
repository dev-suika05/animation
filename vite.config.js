import { defineConfig } from 'vite';
import { resolve } from 'path';

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');

export default defineConfig({
	base: './',
	root,
	build: {
		outDir,
		rollupOptions: {
			input: {
				textdobule: resolve(root, 'textdobule', 'index.html'),
				titleclippath: resolve(root, 'titleclippath', 'index.html'),
				textglitch01: resolve(root, 'textglitch01', 'index.html'),
			},
			output: {
				entryFileNames: `assets/js/script.js`,
				assetFileNames: `assets/css/style.[ext]`,
			}
		},
	},
	server: {
		port: 8080
	}
})