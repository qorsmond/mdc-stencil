import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';


export const config: Config = {
  namespace: 'mycomponent',
  plugins: [
    sass({
      includePaths: ["node_modules"]
    })
  ],
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
