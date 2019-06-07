import { p as patchBrowser, g as globals, b as bootstrapLazy } from './mdc-f50c9b3a.js';

patchBrowser().then(resourcesUrl => {
  globals();
  return bootstrapLazy([["mdc-tab",[[4,"mdc-tab",{"label":[1],"icon":[1],"selected":[4]}]]],["mdc-tab-bar",[[4,"mdc-tab-bar",{"bottomBorder":[4,"bottom-border"]}]]],["demo-view",[[0,"demo-view"]]],["mdc-button",[[4,"mdc-button",{"raised":[4],"unelevated":[4],"outlined":[4],"dense":[4],"disabled":[4],"trailingIcon":[4,"trailing-icon"],"icon":[1],"label":[1]}]]],["mdc-icon",[[4,"mdc-icon"]]],["my-component",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["mdc-tab-indicator",[[0,"mdc-tab-indicator",{"isActive":[4,"is-active"]}]]],["mdc-tab-scroller",[[4,"mdc-tab-scroller"]]]], { resourcesUrl });
});
