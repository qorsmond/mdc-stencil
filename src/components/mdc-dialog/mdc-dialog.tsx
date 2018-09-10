import { Component, Element, Method, Prop, Event, EventEmitter } from '@stencil/core';
import { MDCDialog } from '@material/dialog';

@Component({
  tag: 'mdc-dialog',
  styleUrl: 'mdc-dialog.scss',
  shadow: false
})
export class DialogComponent {

  @Element() el: HTMLElement;

  @Prop() headerTitle: string;

  @Method() show() {
    this.dialog.show();
  }

  @Event() result: EventEmitter;


  private dialog;

  componentDidLoad() {
    const dialogEl = this.el.querySelector('#mdc-dialog-aside');
    this.dialog = new MDCDialog(dialogEl);

    this.dialog.listen('MDCDialog:accept', () => {
      console.log('accepted');
      this.result.emit('accepted');
    })

    this.dialog.listen('MDCDialog:cancel', () => {
      console.log('canceled')
      this.result.emit('canceled');
    })
  }

  render() {
    return (
      <aside id="mdc-dialog-aside"
        class="mdc-dialog"
        role="alertdialog"
        aria-labelledby="my-mdc-dialog-label"
        aria-describedby="my-mdc-dialog-description">
        <div class="mdc-dialog__surface">
          <header class="mdc-dialog__header">
            <h2 id="my-mdc-dialog-label" class="mdc-dialog__header__title">
              {this.headerTitle}
            </h2>
          </header>
          <section id="my-mdc-dialog-description" class="mdc-dialog__body">
            <slot />
          </section>
          <footer class="mdc-dialog__footer">
            <button type="button" class="mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--cancel">Decline</button>
            <button type="button" class="mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--accept">Accept</button>
          </footer>
        </div>
        <div class="mdc-dialog__backdrop"></div>
      </aside>
    );
  }
}
