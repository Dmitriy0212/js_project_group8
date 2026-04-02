import { defineConfig } from 'vite';
import { glob } from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import SortCss from 'postcss-sort-media-queries';

export default defineConfig(({ command }) => {
  return {
    // 🔥 ВАЖНО для GitHub Pages
    base: command === 'serve' ? '/' : '/js_project_group8/',

    define: {
      global: {},
    },

    root: 'src',

    build: {
      sourcemap: true,

      rollupOptions: {
        input: glob.sync('./src/*.html'),

        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },

          entryFileNames: '[name].js',

          assetFileNames: 'assets/[name]-[hash][extname]',
        },
      },

      outDir: '../dist',
      emptyOutDir: true,
    },

    plugins: [
      injectHTML(),
      FullReload(['./src/**/*.html']),
      SortCss({
        sort: 'mobile-first',
      }),
    ],
  };
});
