import { Component, Element, Prop } from '@stencil/core';
import { MDCRipple } from '@material/ripple';

@Component({
  tag: 'mdc-button',
  styleUrl: 'mdc-button.scss',
  shadow: true
})
export class ButtonComponent {

  @Element() el: HTMLElement;

  @Prop() raised = false;
  @Prop() unelevated = false;
  @Prop() outlined = false;
  @Prop() dense = false;
  @Prop() disabled = false;
  @Prop() icon = false;
  @Prop() label: string;
  @Prop() href: string;

  componentDidLoad() {
    var btn = this.el.shadowRoot.querySelector('.mdc-button');
    new MDCRipple(btn);
  }



  render() {

    const icon = () => {
      return this.icon ? <span class="material-icons mdc-button__icon">${this.icon}</span> : null;
    };

    let classBuilder = ['mdc-button'];
    if (this.raised) classBuilder.push('mdc-button--raised');
    if (this.unelevated) classBuilder.push('mdc-button--unelevated');
    if (this.outlined) classBuilder.push('mdc-button--outlined');
    if (this.dense) classBuilder.push('mdc-button--dense');

    let classNames = classBuilder.join(' ');

    // Dont know why this is not working
    // const classNames = [
    //   'mdc-button',
    //   ...this.raised && ['mdc-button--raised'],
    //   ...this.unelevated && ['mdc-button--unelevated'],
    //   ...this.outlined && ['mdc-button--outlined'],
    //   ...this.dense && ['mdc-button--dense']
    // ].join(' ');


    if (this.href) {
      return (
        <a class={classNames} href={this.href}>
          {icon()}
          {this.label || ''}
          <slot />
        </a>
      );
    } else {
      return (
        <button class={classNames} disabled={this.disabled}>
          {icon()}
          {this.label || ''}
          <slot />
        </button>
      );
    }

  }
}
