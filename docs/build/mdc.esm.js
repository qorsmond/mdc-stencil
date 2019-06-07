import { p as patchBrowser, g as globals, b as bootstrapLazy } from './mdc-f50c9b3a.js';

patchBrowser().then(resourcesUrl => {
  globals();
  return bootstrapLazy([["demo-view",[[0,"demo-view"]]],["mdc-button",[[4,"mdc-button",{"raised":[4],"unelevated":[4],"outlined":[4],"dense":[4],"disabled":[4],"trailingIcon":[4,"trailing-icon"],"icon":[1],"label":[1]}]]],["mdc-icon",[[4,"mdc-icon"]]],["my-component",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], { resourcesUrl });
});
