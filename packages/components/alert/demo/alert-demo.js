
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss } from '@lit-element-bootstrap/content/bs-content-reboot.css.js';
import { DefaultThemeCss } from '@lit-element-bootstrap/theme/default-theme-css.js';

import '../src/bs-alert.js';
import '../src/bs-alert-hr.js';
import '../src/bs-alert-link.js';
import '../src/bs-alert-dismiss.js';

export class AlertDemo extends LitElement {

    static get properties() {
        return {};
    }

    static get styles() {
        return [
            BsContentRebootCss,
            DefaultThemeCss,
            css`
                .container {
                    padding-left: 15px;
                    padding-right: 15px;
                }
            `
        ];
    }

    render() {
        return html`

            <div class="container">

                <h1>Alert Demo</h1>

                <bs-alert primary>
                    <div>A simple primary alert—check it out!</div>
                </bs-alert>

                <bs-alert secondary>
                    <div>A simple primary alert—check it out!</div>
                </bs-alert>

                <bs-alert success>
                    <div>A simple primary alert—check it out!</div>
                </bs-alert>

                <bs-alert danger>
                    <div>A simple primary alert—check it out!</div>
                </bs-alert>

                <bs-alert warning>
                    <div>A simple primary alert—check it out!</div>
                </bs-alert>

                <bs-alert info>
                    <div>A simple primary alert—check it out!</div>
                </bs-alert>

                <bs-alert light>
                    <div>A simple primary alert—check it out!</div>
                </bs-alert>

                <bs-alert dark>
                    <div>A simple primary alert—check it out!</div>
                </bs-alert>

                <bs-alert primary>
                    <div>A simple primary alert with <bs-alert-link primary>an example link</bs-alert-link>. Give it a click if you like.</div>
                </bs-alert>

                <bs-alert secondary>
                    <div>A simple primary alert with <bs-alert-link secondary>an example link</bs-alert-link>. Give it a click if you like.</div>
                </bs-alert>

                <bs-alert success>
                    <div>A simple primary alert with <bs-alert-link success>an example link</bs-alert-link>. Give it a click if you like.</div>
                </bs-alert>

                <bs-alert danger>
                    <div>A simple primary alert with <bs-alert-link danger>an example link</bs-alert-link>. Give it a click if you like.</div>
                </bs-alert>

                <bs-alert warning>
                    <div>A simple primary alert with <bs-alert-link warning>an example link</bs-alert-link>. Give it a click if you like.</div>
                </bs-alert>

                <bs-alert info>
                    <div>A simple primary alert with <bs-alert-link info>an example link</bs-alert-link>. Give it a click if you like.</div>
                </bs-alert>

                <bs-alert light>
                    <div>A simple primary alert with <bs-alert-link light>an example link</bs-alert-link>. Give it a click if you like.</div>
                </bs-alert>

                <bs-alert dark>
                    <div>A simple primary alert with <bs-alert-link dark>an example link</bs-alert-link>. Give it a click if you like.</div>
                </bs-alert>

                <bs-alert success>
                    <h4 slot="heading">Well done!</h4>
                    <div>
                        Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
                        <bs-alert-hr success></bs-alert-hr>
                        <p>Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                    </div>
                </bs-alert>

                <bs-alert warning dismissable>
                    <div>
                        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                    </div>
                    <bs-alert-dismiss slot="dismiss"></bs-alert-dismiss>
                </bs-alert>

            </div>
        `;
    }

    constructor() {
        super();
    }
};

window.customElements.define('alert-demo', AlertDemo);
