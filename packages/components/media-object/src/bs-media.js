
import { LitElement, html } from 'lit-element';
import { BsMediaCss } from './bs-media.css.js';
import { BsContentRebootCss } from '@lit-element-bootstrap/content/bs-content-reboot.css.js';

export class BsMedia extends LitElement {

    static get styles() {
        return [
            BsContentRebootCss,
            BsMediaCss
        ];
    }

    render() {
        return html`
            <slot></slot>
        `;
    }
};

if(!window.customElements.get('bs-media'))
    window.customElements.define('bs-media', BsMedia);

