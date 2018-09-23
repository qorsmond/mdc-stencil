import { Component, Element, Prop } from '@stencil/core';
import { MDCRipple } from '@material/ripple';

@Component({
  tag: 'mdc-button',
  styleUrl: 'mdc-button.scss',
  shadow: true
})
export class ButtonComponent {

  @Element() el: HTMLElement;

  @Prop() href: string;

  componentDidLoad() {
    var btn = this.el.shadowRoot.querySelector('.mdc-button');
    new MDCRipple(btn);
  }

  render() {

    if (this.href) {
      return (
        <a class="mdc-button" href={this.href} >
          <slot />
        </a>
      );
    } else {
      return (
        <button class="mdc-button" >
          <slot />
        </button>
      );
    }

  }
}
