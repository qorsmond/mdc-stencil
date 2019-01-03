import { Component, Element, Prop } from '@stencil/core';
import { MDCTextField } from '@material/textfield/index';
import { MDCLineRipple } from '@material/line-ripple/index';

@Component({
  tag: 'mdc-textfield',
  styleUrl: 'mdc-textfield.scss',
  shadow: false
})
export class TextfieldComponent {

  @Element() el: HTMLElement;


  @Prop() id: string;
  @Prop() label: string;
  @Prop() value: string;
  @Prop() type: string = 'text';
  @Prop() maxWidth: string;


  componentDidLoad() {
    var txtField = this.el.querySelector('.mdc-text-field');
    var lineRipple = this.el.querySelector('.mdc-line-ripple');
    new MDCTextField(txtField);
    new MDCLineRipple(lineRipple);
  }

  render() {
    const styling = {
      'max-width': this.maxWidth
    };
    return (
      <div class="mdc-text-field" style={styling}>
        <input type={this.type} id={this.id} class="mdc-text-field__input" step="any" value={this.value} />
        <label class="mdc-floating-label" htmlFor={this.id}>{this.label}</label>
        <div class="mdc-line-ripple"></div>
      </div>
    );
  }
}
