import { css } from 'lit-element';

export const BsAlertLinkCss = css`

    a {
        color: var(--alert-link-color, #007bff);
        font-weight: var(--alert-link-font-weight, 700);
        text-decoration: var(--alert-link-text-decoration, none);
        background-color: var(--alert-link-bg-color, transparent);
        -webkit-text-decoration-skip: objects;
    }

    a:hover {
        color: var(--alert-link-hover-color, #0056b3);
        text-decoration: var(--alert-link-hover-text-decoration, underline);
    }

    :host([primary]) a {
        color: var(--alert-link-primary-color, #002752);
    }

    :host([secondary]) a {
        color: var(--alert-link-secondary-color, #202326);
    }

    :host([success]) a {
        color: var(--alert-link-secondary-color, #0b2e13);
    }

    :host([info]) a {
        color: var(--alert-link-info-color, #062c33);
    }

    :host([warning]) a {
        color: var(--alert-link-warning-color, #533f03);
    }

    :host([danger]) a {
        color: var(--alert-link-danger-color, #491217);
    }

    :host([light]) a {
        color: var(--alert-link-light-color, #686868);
    }

    :host([dark]) a {
        color: var(--alert-link-dark-color, #040505);
    }
`;
