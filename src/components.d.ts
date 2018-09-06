/**
* This is an autogenerated file created by the Stencil compiler.
* It contains typing information for all components that exist in this project.
*/
/* tslint:disable */

import '@stencil/core';




export namespace Components {

  interface MdcButton {}
  interface MdcButtonAttributes extends StencilHTMLAttributes {}

  interface MdcDialog {
    'headerTitle': string;
    'show': () => void;
  }
  interface MdcDialogAttributes extends StencilHTMLAttributes {
    'headerTitle'?: string;
    'onResult'?: (event: CustomEvent) => void;
  }
}

declare global {
  interface StencilElementInterfaces {
    'MdcButton': Components.MdcButton;
    'MdcDialog': Components.MdcDialog;
  }

  interface StencilIntrinsicElements {
    'mdc-button': Components.MdcButtonAttributes;
    'mdc-dialog': Components.MdcDialogAttributes;
  }


  interface HTMLMdcButtonElement extends Components.MdcButton, HTMLStencilElement {}
  var HTMLMdcButtonElement: {
    prototype: HTMLMdcButtonElement;
    new (): HTMLMdcButtonElement;
  };

  interface HTMLMdcDialogElement extends Components.MdcDialog, HTMLStencilElement {}
  var HTMLMdcDialogElement: {
    prototype: HTMLMdcDialogElement;
    new (): HTMLMdcDialogElement;
  };

  interface HTMLElementTagNameMap {
    'mdc-button': HTMLMdcButtonElement
    'mdc-dialog': HTMLMdcDialogElement
  }

  interface ElementTagNameMap {
    'mdc-button': HTMLMdcButtonElement;
    'mdc-dialog': HTMLMdcDialogElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
