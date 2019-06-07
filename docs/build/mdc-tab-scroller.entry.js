import { r as registerInstance, h, c as getElement } from './mdc-f50c9b3a.js';
import './chunk-b1fa5354.js';
import './chunk-de6f2dd5.js';
import { M as MDCTabScroller } from './chunk-d68ea23d.js';

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
//# sourceMappingURL=index.js.map

class TabScroller {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentDidLoad() {
        new MDCTabScroller(this.el.querySelector('.mdc-tab-scroller'));
    }
    render() {
        return h("div", { class: "mdc-tab-scroller" }, h("div", { class: "mdc-tab-scroller__scroll-area" }, h("div", { class: "mdc-tab-scroller__scroll-content" }, h("slot", null))));
    }
    get el() { return getElement(this); }
    static get style() { return "/**\n * \@license\n * Copyright 2018 Google Inc.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n.mdc-tab-scroller {\n  overflow-y: hidden;\n}\n\n.mdc-tab-scroller__test {\n  position: absolute;\n  top: -9999px;\n  width: 100px;\n  height: 100px;\n  overflow-x: scroll;\n}\n\n.mdc-tab-scroller__scroll-area {\n  -webkit-overflow-scrolling: touch;\n  display: -ms-flexbox;\n  display: flex;\n  overflow-x: hidden;\n}\n\n.mdc-tab-scroller__scroll-area::-webkit-scrollbar,\n.mdc-tab-scroller__test::-webkit-scrollbar {\n  display: none;\n}\n\n.mdc-tab-scroller__scroll-area--scroll {\n  overflow-x: scroll;\n}\n\n.mdc-tab-scroller__scroll-content {\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 1 0 auto;\n  flex: 1 0 auto;\n  -webkit-transform: none;\n  transform: none;\n  will-change: transform;\n}\n\n.mdc-tab-scroller--align-start .mdc-tab-scroller__scroll-content {\n  -ms-flex-pack: start;\n  justify-content: flex-start;\n}\n\n.mdc-tab-scroller--align-end .mdc-tab-scroller__scroll-content {\n  -ms-flex-pack: end;\n  justify-content: flex-end;\n}\n\n.mdc-tab-scroller--align-center .mdc-tab-scroller__scroll-content {\n  -ms-flex-pack: center;\n  justify-content: center;\n}\n\n.mdc-tab-scroller--animating .mdc-tab-scroller__scroll-area {\n  -webkit-overflow-scrolling: auto;\n}\n\n.mdc-tab-scroller--animating .mdc-tab-scroller__scroll-content {\n  -webkit-transition: 250ms -webkit-transform cubic-bezier(0.4, 0, 0.2, 1);\n  transition: 250ms -webkit-transform cubic-bezier(0.4, 0, 0.2, 1);\n  transition: 250ms transform cubic-bezier(0.4, 0, 0.2, 1);\n  transition: 250ms transform cubic-bezier(0.4, 0, 0.2, 1), 250ms -webkit-transform cubic-bezier(0.4, 0, 0.2, 1);\n}\n\nmdc-tab-scroller {\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n}\n\n.mdc-tab-scroller {\n  -ms-flex: 1;\n  flex: 1;\n}"; }
}

export { TabScroller as mdc_tab_scroller };
