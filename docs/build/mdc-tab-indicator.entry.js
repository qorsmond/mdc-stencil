import { r as registerInstance, h, c as getElement } from './mdc-f50c9b3a.js';
import './chunk-b1fa5354.js';
import { M as MDCTabIndicator } from './chunk-18455057.js';

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

class TabIndicator {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
        * Visually activates the indicator
        */
        this.isActive = false;
    }
    componentDidLoad() {
        new MDCTabIndicator(this.el.querySelector('.mdc-tab-indicator'));
    }
    render() {
        return h("span", { class: this.isActive ? 'mdc-tab-indicator mdc-tab-indicator--active' : 'mdc-tab-indicator' }, h("span", { class: "mdc-tab-indicator__content mdc-tab-indicator__content--underline" }));
    }
    get el() { return getElement(this); }
    static get style() { return "/**\n * \@license\n * Copyright 2018 Google Inc.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n/**\n * \@license\n * Copyright 2018 Google Inc.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n.mdc-tab-indicator {\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 1;\n}\n.mdc-tab-indicator .mdc-tab-indicator__content--underline {\n  border-color: #6200ee;\n  /* \@alternate */\n  border-color: var(--mdc-theme-primary, #6200ee);\n}\n.mdc-tab-indicator .mdc-tab-indicator__content--underline {\n  border-top-width: 2px;\n}\n.mdc-tab-indicator .mdc-tab-indicator__content--icon {\n  color: #018786;\n  /* \@alternate */\n  color: var(--mdc-theme-secondary, #018786);\n}\n.mdc-tab-indicator .mdc-tab-indicator__content--icon {\n  height: 34px;\n  font-size: 34px;\n}\n\n.mdc-tab-indicator__content {\n  -webkit-transform-origin: left;\n  transform-origin: left;\n  opacity: 0;\n}\n\n.mdc-tab-indicator__content--underline {\n  -ms-flex-item-align: end;\n  align-self: flex-end;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  width: 100%;\n  border-top-style: solid;\n}\n\n.mdc-tab-indicator__content--icon {\n  -ms-flex-item-align: center;\n  align-self: center;\n  margin: 0 auto;\n}\n\n.mdc-tab-indicator--active .mdc-tab-indicator__content {\n  opacity: 1;\n}\n\n.mdc-tab-indicator .mdc-tab-indicator__content {\n  -webkit-transition: 250ms -webkit-transform cubic-bezier(0.4, 0, 0.2, 1);\n  transition: 250ms -webkit-transform cubic-bezier(0.4, 0, 0.2, 1);\n  transition: 250ms transform cubic-bezier(0.4, 0, 0.2, 1);\n  transition: 250ms transform cubic-bezier(0.4, 0, 0.2, 1), 250ms -webkit-transform cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mdc-tab-indicator--no-transition .mdc-tab-indicator__content {\n  -webkit-transition: none;\n  transition: none;\n}\n\n.mdc-tab-indicator--fade .mdc-tab-indicator__content {\n  -webkit-transition: 150ms opacity linear;\n  transition: 150ms opacity linear;\n}\n\n.mdc-tab-indicator--active.mdc-tab-indicator--fade .mdc-tab-indicator__content {\n  -webkit-transition-delay: 100ms;\n  transition-delay: 100ms;\n}"; }
}

export { TabIndicator as mdc_tab_indicator };
