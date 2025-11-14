import { defineConfig } from 'tsup';
// import { baseConfig } from '../../tsup.config.base';

// export default defineConfig({
//   ...baseConfig,
//   entry: ['src/index.ts'],
//   external: [/node_modules/],
//   target: "es2022",
//   tsconfig: "./tsconfig.json"
// });

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: {
    resolve: true  // Add this - resolves imports for .d.ts generation
  },
  splitting: false,
  sourcemap: true,
  clean: true,
  outDir: 'dist',
});