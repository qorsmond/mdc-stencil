import { Component, h, Element } from '@stencil/core';
import {MDCTabScroller} from '@material/tab-scroller';

@Component({
  tag: 'mdc-tab-scroller',
  styleUrl: 'mdc-tab-scroller.scss'
})
export class TabScroller {

  @Element() el: HTMLElement;

  componentDidLoad() {
    new MDCTabScroller(this.el.querySelector('.mdc-tab-scroller'));
  }

  render() {
    return <div class="mdc-tab-scroller">
      <div class="mdc-tab-scroller__scroll-area">
        <div class="mdc-tab-scroller__scroll-content"><slot></slot></div>
      </div>
    </div>;
  }
}
