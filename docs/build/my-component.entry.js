import { r as registerInstance, h } from './mdc-f50c9b3a.js';

class MyComponent {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return h("div", null, "Hello, World! I'm ", this.first);
    }
    static get style() { return ""; }
}

export { MyComponent as my_component };
