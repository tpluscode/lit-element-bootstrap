
import { LitElement, html } from 'lit-element';
import { BsAlertLinkCss } from './bs-alert-link.css.js';

export class BsAlertLink extends LitElement {

    static get properties() {
        return {
            href: String,
            target: String
        };
    }

    static get styles() {
        return [
            BsAlertLinkCss
        ];
    }

    render() {
        return html`
            <a href="${this.href}" .target="${this.target}">
                <slot></slot>
            </a>
        `;
    }

    constructor() {
        super();
        this.href = '';
        this.target = '_self';
    }
};

if(!window.customElements.get("bs-alert-link"))
    window.customElements.define('bs-alert-link', BsAlertLink);
