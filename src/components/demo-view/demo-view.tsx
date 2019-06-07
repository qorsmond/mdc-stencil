import { Component, h } from '@stencil/core';

@Component({
  tag: 'demo-view',
  styleUrl: 'demo-view.scss'
})
export class DemoView {

  render() {
    return (
      <section>
        <header>
          <span class="demo-catalog-logo">
            <img src="https://material-components-web.appspot.com/images/ic_component_24px_white.svg"></img>
          </span>
          <span class="demo-heading">Material Web Components Catalog</span>
        </header>
        <div class="demo-list">
          <div role="list" class="mdc-list mdc-list--two-line">
            <a role="listitem" class="mdc-list-item" href="demos/button.html">
              <span class="demo-catalog-list-icon mdc-list-item__graphic"><img src="https://material-components-web.appspot.com/images/ic_button_24px.svg"></img></span>
              <span class="mdc-list-item__text">
                Button
                  <span class="mdc-list-item__secondary-text">Raised and flat buttons</span>
              </span>
            </a>
            <a role="listitem" class="mdc-list-item" href="fab.html">
              <span class="demo-catalog-list-icon mdc-list-item__graphic"><img src="https://material-components-web.appspot.com/images/ic_button_24px.svg"></img></span>
              <span class="mdc-list-item__text">
                Floating action button
                  <span class="mdc-list-item__secondary-text">The primary action in an application</span>
              </span>
            </a>
            <a role="listitem" class="mdc-list-item" href="checkbox.html">
              <span class="demo-catalog-list-icon mdc-list-item__graphic"><img src="https://material-components-web.appspot.com/images/ic_selection_control_24px.svg"></img></span>
              <span class="mdc-list-item__text">
                Checkbox
                  <span class="mdc-list-item__secondary-text">Multi-selection controls</span>
              </span>
            </a>
            <a role="listitem" class="mdc-list-item" href="drawer.html">
              <span class="demo-catalog-list-icon mdc-list-item__graphic"><img src="https://material-components-web.appspot.com/images/ic_component_24px.svg"></img></span>
              <span class="mdc-list-item__text">
                Drawer
                  <span class="mdc-list-item__secondary-text">Multi-selection controls</span>
              </span>
            </a>
            <a role="listitem" class="mdc-list-item" href="formfield.html">
              <span class="demo-catalog-list-icon mdc-list-item__graphic"><img src="https://material-components-web.appspot.com/images/ic_text_field_24px.svg"></img></span>
              <span class="mdc-list-item__text">
                Form field
                  <span class="mdc-list-item__secondary-text">Layout form fields with labels</span>
              </span>
            </a>
            <a role="listitem" class="mdc-list-item" href="icon.html">
              <span class="demo-catalog-list-icon mdc-list-item__graphic"><img src="https://material-components-web.appspot.com/images/ic_component_24px.svg"></img></span>
              <span class="mdc-list-item__text">
                Icon
                  <span class="mdc-list-item__secondary-text">Material design icons</span>
              </span>
            </a>
            <a role="listitem" class="mdc-list-item" href="icon-button.html">
              <span class="demo-catalog-list-icon mdc-list-item__graphic"><img src="https://material-components-web.appspot.com/images/ic_component_24px.svg"></img></span>
              <span class="mdc-list-item__text">
                Icon Button
                  <span class="mdc-list-item__secondary-text">Toggling icon states</span>
              </span>
            </a>
            <a role="listitem" class="mdc-list-item" href="linear-progress.html">
              <span class="demo-catalog-list-icon mdc-list-item__graphic"><img src="https://material-components-web.appspot.com/images/ic_progress_activity.svg"></img></span>
              <span class="mdc-list-item__text">
                Linear Progress
                  <span class="mdc-list-item__secondary-text">Fills from 0% to 100%, represented by bars</span>
              </span>
            </a>
            <a role="listitem" class="mdc-list-item" href="radio.html">
              <span class="demo-catalog-list-icon mdc-list-item__graphic"><img src="https://material-components-web.appspot.com/images/ic_radio_button_24px.svg"></img></span>
              <span class="mdc-list-item__text">
                Radio buttons
                  <span class="mdc-list-item__secondary-text">Single selection controls</span>
              </span>
            </a>
            <a role="listitem" class="mdc-list-item" href="ripple.html">
              <span class="demo-catalog-list-icon mdc-list-item__graphic"><img src="https://material-components-web.appspot.com/images/ic_ripple_24px.svg"></img></span>
              <span class="mdc-list-item__text">
                Ripple
                  <span class="mdc-list-item__secondary-text">Touch ripple</span>
              </span>
            </a>
            <a role="listitem" class="mdc-list-item" href="slider.html">
              <span class="demo-catalog-list-icon mdc-list-item__graphic"><img src="https://material-components-web.appspot.com/images/slider.svg"></img></span>
              <span class="mdc-list-item__text">
                Slider
                  <span class="mdc-list-item__secondary-text">Range controls</span>
              </span>
            </a>
            <a role="listitem" class="mdc-list-item" href="snackbar.html">
              <span class="demo-catalog-list-icon mdc-list-item__graphic"><img src="https://material-components-web.appspot.com/images/ic_toast_24px.svg"></img></span>
              <span class="mdc-list-item__text">
                Snackbar
                  <span class="mdc-list-item__secondary-text">Transient messages</span>
              </span>
            </a>
            <a role="listitem" class="mdc-list-item" href="switch.html">
              <span class="demo-catalog-list-icon mdc-list-item__graphic"><img src="https://material-components-web.appspot.com/images/ic_switch_24px.svg"></img></span>
              <span class="mdc-list-item__text">
                Switch
                  <span class="mdc-list-item__secondary-text">On off switches</span>
              </span>
            </a>
            <a role="listitem" class="mdc-list-item" href="demos/tabs.html">
              <span class="demo-catalog-list-icon mdc-list-item__graphic"><img src="https://material-components-web.appspot.com/images/ic_tabs_24px.svg"></img></span>
              <span class="mdc-list-item__text">
                Tabs
                  <span class="mdc-list-item__secondary-text">Tabs with support for icon and text labels</span>
              </span>
            </a>
            <a role="listitem" class="mdc-list-item" href="top-app-bar.html">
              <span class="demo-catalog-list-icon mdc-list-item__graphic"><img src="https://material-components-web.appspot.com/images/ic_component_24px.svg"></img></span>
              <span class="mdc-list-item__text">
                Top App Bar
                  <span class="mdc-list-item__secondary-text">Single and multiline text fields</span>
              </span>
            </a>
          </div>
        </div>
      </section>
    );
  }
}
