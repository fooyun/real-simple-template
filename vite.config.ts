import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    tsconfigPaths(), 
    dts({
      include: ['src'],
      rollupTypes: true,
    })
  ],
  build: {
    outDir: 'dist',
    lib: {
      entry: 'src/engine.ts',
      name: 'SimpleTemplate',
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => `index.${format}.js`,
    },
  },
});
