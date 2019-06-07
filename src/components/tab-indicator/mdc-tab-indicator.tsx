import { Component, Prop, h, Element } from '@stencil/core';
import { MDCTabIndicator } from '@material/tab-indicator';

@Component({
  tag: 'mdc-tab-indicator',
  styleUrl: 'mdc-tab-indicator.scss'
})
export class TabIndicator {

  @Element() el: HTMLElement;

  /**
  * Visually activates the indicator
  */
  @Prop() isActive: boolean = false;


  componentDidLoad() {
    new MDCTabIndicator(this.el.querySelector('.mdc-tab-indicator'));
  }

  render() {
    return <span class={this.isActive ? 'mdc-tab-indicator mdc-tab-indicator--active' : 'mdc-tab-indicator'}>
      <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
    </span>;
  }
}
