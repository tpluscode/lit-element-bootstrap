
import { LitElement, html } from 'lit-element';
import { BsAlertCss } from './bs-alert.css.js';

export class BsAlert extends LitElement {

    static get properties() {
        return {
            dismissable: { type: Boolean, reflect: true }
        };
    }

    static get styles() {
        return [
            BsAlertCss
        ];
    }

    render() {
        return html`
            <slot name="heading"></slot>
            <slot></slot>
            <slot name="dismiss"></slot>
        `;
    }

    constructor() {
        super();
        this.dismissable = false;
    }

    firstUpdated() {
        super.firstUpdated();
        this._addAriaRole();
        this.addEventListener('close.button.click', () => this.dismiss());
        this.addEventListener('transitionend', () => this._afterElementTransition());
    }

    _addAriaRole() {
        this.setAttribute('role', 'alert');
    }

    dismiss() {

        console.log(this.dismissable);

        if(this.dismissable) {

            this._fireCloseEvent();

            // the change in opacity triggers a css transition
            // done in javascript to avoid the need of an extra
            // element attribute.
            this.style.opacity = '0';
        }
    }

    _afterElementTransition() {
        this._fireClosedEvent();
        this.remove();
    }

    _fireClosedEvent() {

        const alertClosedEvent = new CustomEvent('closed.bs.alert', {
            bubbles: true,
            composed: true
        });

        this.dispatchEvent(alertClosedEvent);
    }

    _fireCloseEvent() {

        const alertCloseEvent = new CustomEvent('close.bs.alert', {
            bubbles: true,
            composed: true
        });

        this.dispatchEvent(alertCloseEvent);
    }
};

if (!window.customElements.get("bs-alert"))
    window.customElements.define('bs-alert', BsAlert);
