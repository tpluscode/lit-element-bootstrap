
import sinon from 'sinon/pkg/sinon-esm.js';
import { html, fixture, expect, assert, oneEvent } from '@open-wc/testing';

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
        const bsAlert = await fixture(alertTemplate);

        // then
        chai.assert.isAccessible(bsAlert);
    });

    it('bs-alert has correct aria role', async () => {

        // given
        const alertTemplate = html`
            <bs-alert>
                <p>This is an alert message</p>
            </bs-alert>
        `;

        // when
        const bsAlert = await fixture(alertTemplate);

        // then
        chai.expect(bsAlert).to.have.attribute('role', 'alert');
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
        chai.expect(bsAlert.dismissable).to.equal(false);
    });

    it('bs-alert is dismissable', async () => {

        // given
        const alertTemplate = html`
            <bs-alert dismissable>
                <p>This is an alert message</p>
            </bs-alert>
        `;

        // when
        const bsAlert = await fixture(alertTemplate);

        // then
        chai.expect(bsAlert.dismissable).to.equal(true);
    });
});

describe('bs-alert_dismiss_custom_events', () => {

    it('bs-alert dismiss events are fired', async () => {

        // given
        const alertTemplate = html`
            <bs-alert dismissable>
                <p>This is an alert message</p>
            </bs-alert>
        `;

        const bsAlert = await fixture(alertTemplate);
        
        const closeBsAlertSpy = sinon.spy();
        const closedBsAlertSpy = sinon.spy();

        bsAlert.addEventListener('close.bs.alert', closeBsAlertSpy);
        bsAlert.addEventListener('closed.bs.alert', closedBsAlertSpy);

        // when
        setTimeout(() => bsAlert.dismiss());
        
        // then
        await oneEvent(bsAlert, 'close.bs.alert');
        await oneEvent(bsAlert, 'closed.bs.alert');

        sinon.assert.calledOnce(closeBsAlertSpy);
        sinon.assert.calledOnce(closedBsAlertSpy);
    });
});