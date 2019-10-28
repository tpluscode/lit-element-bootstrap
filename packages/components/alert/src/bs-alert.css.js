import { css } from 'lit-element';

export const BsAlertCss = css`

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    :host,
    :host::before,
    :host::after {
        box-sizing: border-box;
    }

    :host {
        display: block;
        position: relative;
        padding: 0.75rem 1.25rem;
        margin-bottom: 1rem;
        border: 1px solid transparent;
        border-radius: 0.25rem;
        opacity: 1;
        transition: opacity 0.15s linear;
    }

    :host([dismissable]) {
        padding-right: 4rem;
    }

    :host ::slotted([slot=heading]) {
        color: inherit;
    }

    :host ::slotted([slot=closeButton]) {
        position: absolute;
        top: 0;
        right: 0;
        padding: 0.75rem 1.25rem;
        color: inherit;
    }

    :host([primary]) {
        color: var(--alert-primary-color, #004085);
        background-color: var(--alert-primary-bg-color, #cce5ff);
        border-color: var(--alert-primary-bd-color, #b8daff);
    }

    :host([secondary]) {
        color: var(--alert-secondary-color, #383d41);
        background-color: var(--alert-secondary-bg-color, #e2e3e5);
        border-color: var(--alert-secondary-bd-color, #d6d8db);
    }

    :host([success]) {
        color: var(--alert-success-color, #155724);
        background-color: var(--alert-success-bg-color, #d4edda);
        border-color: var(--alert-success-bd-color, #c3e6cb);
    }

    :host([info]) {
        color: var(--alert-info-color, #0c5460);
        background-color: var(--alert-info-bg-color, #d1ecf1);
        border-color: var(--alert-info-bd-color, #bee5eb);
    }

    :host([warning]) {
        color: var(--alert-warning-color, #856404);
        background-color: var(--alert-warning-bg-color, #fff3cd);
        border-color: var(--alert-warning-bd-color, #ffeeba);
    }

    :host([danger]) {
        color: var(--alert-danger-color, #721c24);
        background-color: var(--alert-danger-bg-color, #f8d7da);
        border-color: var(--alert-danger-bd-color, #f5c6cb);
    }

    :host([light]) {
        color: var(--alert-light-color, #818182);
        background-color: var(--alert-light-bg-color, #fefefe);
        border-color: var(--alert-light-bd-color, #fdfdfe);
    }

    :host([dark]) {
        color: var(--alert-dark-color, #1b1e21);
        background-color: var(--alert-dark-bg-color, #d6d8d9);
        border-color: var(--alert-dark-bd-color, #c6c8ca);
    }
`;
