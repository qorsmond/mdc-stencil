/**
* This is an autogenerated file created by the Stencil compiler.
* It contains typing information for all components that exist in this project.
*/
/* tslint:disable */

import '@stencil/core';




export namespace Components {

  interface MdcButton {
    'first': string;
    'last': string;
  }
  interface MdcButtonAttributes extends StencilHTMLAttributes {
    'first'?: string;
    'last'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'MdcButton': Components.MdcButton;
  }

  interface StencilIntrinsicElements {
    'mdc-button': Components.MdcButtonAttributes;
  }


  interface HTMLMdcButtonElement extends Components.MdcButton, HTMLStencilElement {}
  var HTMLMdcButtonElement: {
    prototype: HTMLMdcButtonElement;
    new (): HTMLMdcButtonElement;
  };

  interface HTMLElementTagNameMap {
    'mdc-button': HTMLMdcButtonElement
  }

  interface ElementTagNameMap {
    'mdc-button': HTMLMdcButtonElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
