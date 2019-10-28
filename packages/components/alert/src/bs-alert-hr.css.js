import { css } from 'lit-element';

export const BsAlertHrCss = css`

    hr {
        height: 0;
        border: 0;
        overflow: visible;
        box-sizing: content-box;
        margin-top: 1rem;
        margin-bottom: 1rem;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
    }

    :host([primary]) hr {
        border-top-color: var(--alert-hr-primary-bd-top-color, #9fcdff);
    }

    :host([secondary]) hr {
        border-top-color: var(--alert-hr-secondary-bd-top-color, #c8cbcf);
    }

    :host([success]) hr {
        border-top-color: var(--alert-hr-success-bd-top-color, #b1dfbb);
    }

    :host([info]) hr {
        border-top-color: var(--alert-hr-info-bd-top-color, #abdde5);
    }

    :host([warning]) hr {
        border-top-color: var(--alert-hr-warning-bd-top-color, #ffe8a1);
    }

    :host([danger]) hr {
        border-top-color: var(--alert-hr-danger-bd-top-color, #f1b0b7);
    }

    :host([light]) hr {
        border-top-color: var(--alert-hr-light-bd-top-color, #ececf6);
    }

    :host([dark]) hr {
        border-top-color: var(--alert-hr-dark-bd-top-color, #b9bbbe);
    }
`;
