import { Component, Prop, Element } from '@stencil/core';
import { MDCRipple } from '@material/ripple';

@Component({
  tag: 'mdc-button',
  styleUrl: 'mdc-button.scss',
  shadow: true
})
export class MyComponent {

  @Element() el: HTMLElement;

  @Prop() first: string;
  @Prop() last: string;

  componentDidLoad() {
    var btn = this.el.shadowRoot.querySelector('.mdc-button');
    new MDCRipple(btn);
  }

  render() {
    return (
      <button class="mdc-button">
        <slot />
      </button>
    );
  }
}