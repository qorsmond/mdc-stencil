import { Component, h, Element, Prop } from '@stencil/core';
import { MDCTabBar } from '@material/tab-bar';

@Component({
  tag: 'mdc-tab-bar',
  styleUrl: 'mdc-tab-bar.scss'
})
export class TabBar {

  @Element() el: HTMLElement;

  /**
   * Should a bottom border be displayed
   */
  @Prop() bottomBorder = false;

  componentDidLoad() {
    this.el.classList.add('mdc-tab-bar');
    this.el.setAttribute('role', 'tablist');

    new MDCTabBar(this.el);
  }

  render() {
    return [
      <mdc-tab-scroller><slot></slot></mdc-tab-scroller>,
      this.bottomBorder ? <div class="bottom-border"></div> : ''
    ];
  }
}
