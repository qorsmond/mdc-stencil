import { Component, Element, Method, Prop, Event, EventEmitter } from '@stencil/core';
import { MDCDialog } from '@material/dialog/index';

@Component({
  tag: 'mdc-dialog',
  styleUrl: 'mdc-dialog.scss'
})
export class DialogComponent {

  @Element() el: HTMLElement;
  private dialog;
  @Event() result: EventEmitter;

  @Prop() headerTitle: string;

  @Method() log() {
    console.log('log');
  }

  @Method() open() {
    this.dialog.open();
  }


  componentDidLoad() {
    const dialogEl = this.el.querySelector('.mdc-dialog');
    this.dialog = new MDCDialog(dialogEl);

    // this.dialog.listen('MDCDialog:accept', () => {
    //   console.log('accepted');
    //   this.result.emit('accepted');
    // })

    // this.dialog.listen('MDCDialog:cancel', () => {
    //   console.log('canceled')
    //   this.result.emit('canceled');
    // })
  }

  render() {
    return (
      <div class="mdc-dialog"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="my-dialog-title"
        aria-describedby="my-dialog-content">
        <div class="mdc-dialog__container">
          <div class="mdc-dialog__surface">
            <h2 class="mdc-dialog__title" id="my-dialog-title">{this.headerTitle}</h2>
            <div class="mdc-dialog__content" id="my-dialog-content">
              <slot />
            </div>
            <footer class="mdc-dialog__actions">
              <button type="button" class="mdc-button mdc-dialog__button" data-mdc-dialog-action="no">
                <span class="mdc-button__label">No</span>
              </button>
              <button type="button" class="mdc-button mdc-dialog__button" data-mdc-dialog-action="yes">
                <span class="mdc-button__label">Yes</span>
              </button>
            </footer>
          </div>
        </div>
        <div class="mdc-dialog__scrim"></div>
      </div>
    );
  }
}
