import xqueryPlugin from './main.ts';

export default {
    overrides: [
    {
      files: '**/*.xqy',
      options: { parser: 'xquery-parser',   plugins: [xqueryPlugin],
      },

    },

  ],
} as import('prettier').Config
