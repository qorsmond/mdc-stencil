import { Component, Prop, h, Element } from '@stencil/core';
import { MDCRipple } from '@material/ripple';
import { CssClassMap } from '../../utils/utils';

@Component({
  tag: 'mdc-button',
  styleUrl: 'mdc-button.scss'
})
export class Button {

  @Element() el: HTMLElement;

  /**
   * Styles a contained button that is elevated above the surface.
   */
  @Prop() raised = false;

  /**
   * Styles a contained button that is flush with the surface.
   */
  @Prop() unelevated = false;

  /**
   * Styles an outlined button that is flush with the surface.
   */
  @Prop() outlined = false;

  /**
   * Makes the button text and container slightly smaller.
   */
  @Prop() dense = false;

  /**
   * Disabled buttons cannot be interacted with and have no visual interaction effect.
   */
  @Prop() disabled = false;

  /**
   * Indicates if the icon is a trailingIcon.
   */
  @Prop() trailingIcon = false;

  /**
  * Indicates the element containing the button's icon.
  */
  @Prop() icon = '';

  /**
  *  Indicates the element containing the button's text label.
  */
  @Prop() label = '';

  componentDidLoad() {
    new MDCRipple(this.el.querySelector('.mdc-button'));
  }

  private getCssClassMap(): CssClassMap {
    return {
      ['mdc-button']: true,
      ['mdc-button--raised']: this.raised,
      ['mdc-button--unelevated']: this.unelevated,
      ['mdc-button--outlined']: this.outlined,
      ['mdc-button--dense']: this.dense
    };
  }

  render() {
    const classMap = this.getCssClassMap();

    const mdcButtonIcon = () => {
      return this.icon ? <i class="material-icons mdc-button__icon" aria-hidden="true">{this.icon}</i> : null;
    };

    return <button class={classMap} disabled={this.disabled} aria-label={this.label}>
      {this.icon && !this.trailingIcon ? mdcButtonIcon() : ''}
      <span class="mdc-button__label">{this.label}</span>
      {this.icon && this.trailingIcon ? mdcButtonIcon() : ''}
      <slot></slot>
    </button>;

  }
}
