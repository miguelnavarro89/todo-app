await Bun.build({
  entrypoints: ['./src/index.html'],
  outdir: './public',
  target: 'browser',
  format: 'esm',
  sourcemap: 'linked',
  minify: process.env.ENV === 'production',
});