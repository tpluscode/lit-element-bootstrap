
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

        if(this.dismissable) {
            this._fireCloseEvent();
            this.style.opacity = '0';
        }
    }

    _afterElementTransition() {

        this._fireClosedEvent();
        this.remove();
    }

    _fireCloseEvent() {

        const alertCloseEvent = new CustomEvent('close.bs.alert', {
            bubbles: true,
            composed: true
        });

        this.dispatchEvent(alertCloseEvent);
    }

    _fireClosedEvent() {

        const alertClosedEvent = new CustomEvent('closed.bs.alert', {
            bubbles: true,
            composed: true
        });

        this.dispatchEvent(alertClosedEvent);
    }
};

if (!window.customElements.get("bs-alert"))
    window.customElements.define('bs-alert', BsAlert);
