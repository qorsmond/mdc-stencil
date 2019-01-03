import { Component, Element } from '@stencil/core';
import { MDCSelect } from '@material/select/index';

@Component({
  tag: 'mdc-select',
  styleUrl: 'mdc-select.scss',
  shadow: false
})
export class SelectComponent {

  @Element() el: HTMLElement;

  componentDidLoad() {
    const select = new MDCSelect(document.querySelector('.mdc-select'));
    select.listen('change', () => {
      alert(`Selected option at index ${select.selectedIndex} with value "${select.value}"`);
    });
  }

  render() {
    return (
      <div id="mdcSelect" class="mdc-select mdc-select--box">
      <select class="mdc-select__native-control" id="select-preselected">
        <option value="" disabled selected></option>
        <option value="fruit-roll-ups">
          Fruit Roll Ups
        </option>
        <option value="cotton-candy">
          Candy (cotton)
        </option>
        <option value="vegetables" disabled>
          Vegetables
        </option>
        <option value="noodles">
          Noodles
        </option>
      </select>
      <label class="mdc-floating-label mdc-floating-label--float-above" htmlFor="select-preselected">Food Group</label>
      <div class="mdc-line-ripple"></div>
    </div>
    );
  }
}
