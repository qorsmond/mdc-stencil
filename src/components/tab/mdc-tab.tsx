import { Component, Prop, h, Element } from '@stencil/core';
import {MDCTab} from '@material/tab';

@Component({
  tag: 'mdc-tab',
  styleUrl: 'mdc-tab.scss'
})
export class Tab {

  @Element() el: HTMLElement;

  /**
   * The label
   */
  @Prop() label: string;

  /**
   * The icon
   */
  @Prop() icon: string;

    /**
   * Visually activates the indicator
   */
  @Prop() selected: boolean = false;

  componentDidLoad() {
   let tab = new MDCTab(this.el.querySelector('.mdc-tab'));   
   if(this.selected){
     tab.activate();
   }
  }

  render() {
    return <button class="mdc-tab" role="tab" aria-selected="false" tabindex="-1">
      <span class="mdc-tab__content">
        <slot></slot>
        {this.icon ? <span class="mdc-tab__icon material-icons" aria-hidden="true">{this.icon}</span> : ''}
        {this.label ? <span class="mdc-tab__text-label">{this.label}</span> : ''}
      </span>
      <mdc-tab-indicator isActive={this.selected}></mdc-tab-indicator>
      <span class="mdc-tab__ripple"></span>
    </button>;
  }
}
