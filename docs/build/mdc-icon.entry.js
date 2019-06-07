import { r as registerInstance, h } from './mdc-f50c9b3a.js';

class Icon {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return h("i", { class: "material-icons" }, h("slot", null));
    }
    static get style() { return ""; }
}

export { Icon as mdc_icon };
