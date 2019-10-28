
import sinon from 'sinon/pkg/sinon-esm.js';
import { html, fixture, expect, assert } from '@open-wc/testing';

import '../src/bs-alert.js';

describe('bs-alert', () => {

    it('bs-alert with default state is accessible', async () => {

        // given
        const alertTemplate = html`
            <bs-alert primary>
                <p>This is an alert message</p>
            </bs-alert>
        `;

        // when
        const bsAlert = (await fixture(alertTemplate));

        // then
        assert.isAccessible(bsAlert);
    });

    it('bs-alert with default aria role is accessible', async () => {

        // given
        const alertTemplate = html`
            <bs-alert primary>
                <p>This is an alert message</p>
            </bs-alert>
        `;

        // when
        const bsAlert = (await fixture(alertTemplate));

        // then
        expect(bsAlert).to.have.attribute('role', 'alert');
    });

    it('bs-alert with not valid aria role is not accessible', async () => {

        // given
        const alertTemplate = html`
            <bs-alert primary role="something-not-valid">
                <p>This is an alert message</p>
            </bs-alert>
        `;

        // when
        const bsAlert = (await fixture(alertTemplate));

        // then
        assert.isNotAccessible(bsAlert);
    });

    it('bs-alert with message is visible', async () => {

        // given
        const alertTemplate = html`
            <bs-alert primary>
                <p>This is an alert message</p>
            </bs-alert>
        `;

        // when
        const bsAlert = (await fixture(alertTemplate));

        // then
        expect(bsAlert.visible).to.equal(true);
    });

    it('bs-alert with message is not visible', async () => {

        // given
        const alertTemplate = html`
            <bs-alert primary>
                <p>This is an alert message</p>
            </bs-alert>
        `;

        const bsAlert = (await fixture(alertTemplate));

        // when
        bsAlert.removeAttribute('visible');

        // then
        expect(bsAlert.visible).to.equal(false);
    });
});
