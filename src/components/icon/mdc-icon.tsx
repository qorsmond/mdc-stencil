import { Component,  h } from '@stencil/core';

@Component({
  tag: 'mdc-icon',
  styleUrl: 'mdc-icon.scss'
})
export class Icon {


  render() {
    return <i class="material-icons"><slot></slot></i>;
  }
}
