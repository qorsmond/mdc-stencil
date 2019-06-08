import { Component, Prop, h, Element } from '@stencil/core';
import { MDCTab } from '@material/tab';

@Component({
  tag: 'mdc-tab',
  styleUrl: 'mdc-tab.scss'
})
export class Tab {

  @Element() el: HTMLElement;

  /**
   * The tab id
   */
  @Prop() id: string;

  /**
   * The label
   */
  @Prop() label: string;

  /**
   * The icon
   */
  @Prop() icon: string;

 
  /**
  * Set a href, this will convert the tab to use an anchor tag
  */
  @Prop() href: string;

  /**
   * Visually activates the indicator
   */
  @Prop() selected: boolean = false;

  componentDidLoad() {
    let tab = new MDCTab(this.el.querySelector('.mdc-tab'));
    if (this.selected)
      tab.activate();

    if (this.id)
      tab.id = this.id;
  }

  render() {
    const Tag = this.href ? 'a' : 'button';

    return <Tag class="mdc-tab" role="tab" aria-selected={this.selected} tabindex="-1" href={this.href}>
      <span class="mdc-tab__content">
        <slot></slot>
        {this.icon ? <span class="mdc-tab__icon material-icons" aria-hidden="true">{this.icon}</span> : ''}
        {this.label ? <span class="mdc-tab__text-label">{this.label}</span> : ''}
      </span>
      <mdc-tab-indicator isActive={this.selected}></mdc-tab-indicator>
      <span class="mdc-tab__ripple"></span>
    </Tag>;
  }
}
