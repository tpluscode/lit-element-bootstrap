
import sinon from 'sinon/pkg/sinon-esm.js';
import { html, fixture, expect, assert } from '@open-wc/testing';

import '../src/bs-alert.js';

describe('bs-alert', () => {

    it('bs-alert is accessible', async () => {

        // given
        const alertTemplate = html`
            <bs-alert>
                <p>This is an alert message</p>
            </bs-alert>
        `;

        // when
        const bsAlert = (await fixture(alertTemplate));

        // then
        assert.isAccessible(bsAlert);
    });

    it('bs-alert has correct aria role', async () => {

        // given
        const alertTemplate = html`
            <bs-alert>
                <p>This is an alert message</p>
            </bs-alert>
        `;

        // when
        const bsAlert = (await fixture(alertTemplate));

        // then
        expect(bsAlert).to.have.attribute('role', 'alert');
    });

    it('bs-alert is not dismissable', async () => {

        // given
        const alertTemplate = html`
            <bs-alert>
                <p>This is an alert message</p>
            </bs-alert>
        `;

        // when
        const bsAlert = (await fixture(alertTemplate));

        // then
        expect(bsAlert.dismissable).to.equal(false);
    });

    it('bs-alert is dismissable', async () => {

        // given
        const alertTemplate = html`
            <bs-alert dismissable>
                <p>This is an alert message</p>
            </bs-alert>
        `;

        // when
        const bsAlert = (await fixture(alertTemplate));

        // then
        expect(bsAlert.dismissable).to.equal(true);
    });

    it('bs-alert dismiss events are fired', async () => {

        // given
        const alertTemplate = html`
            <bs-alert dismissable>
                <p>This is an alert message</p>
            </bs-alert>
        `;

        const bsAlert = (await fixture(alertTemplate));

        const closeBsAlertSpy = sinon.spy();
        const closedBsAlertSpy = sinon.spy();

        bsAlert.addEventListener('close.bs.alert', closeBsAlertSpy);
        bsAlert.addEventListener('closed.bs.alert', closedBsAlertSpy);

        // when
        bsAlert.dismiss();

        // then
        expect(closeBsAlertSpy.callCount).to.equal(1);
        expect(closedBsAlertSpy.callCount).to.equal(1);
    });
});
