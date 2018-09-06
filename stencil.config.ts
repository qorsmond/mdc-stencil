import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';


export const config: Config = {
  namespace: 'mdc',
  plugins: [
    sass({
      includePaths: ["node_modules"]
    })
  ],
  globalStyle: 'src/global/variables.scss',
  outputTargets: [
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ]
};
