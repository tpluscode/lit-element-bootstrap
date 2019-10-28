
import { LitElement, html } from 'lit-element';
import { BsAlertHrCss } from './bs-alert-hr.css.js';

export class BsAlertHr extends LitElement {

    static get styles() {
        return [
            BsAlertHrCss
        ];
    }

    render() {
        return html`
            <hr />
        `;
    }
};

if(!window.customElements.get("bs-alert-hr"))
    window.customElements.define('bs-alert-hr', BsAlertHr);
