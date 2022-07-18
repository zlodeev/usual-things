'use strict';

const esbuild = require('esbuild');

esbuild
  .build({
    entryPoints: ['./src/index.js'],
    bundle: true,
    outdir: 'dist',
  })
  .then(console.log);
