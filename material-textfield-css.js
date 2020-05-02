import {css} from 'lit-element';

export const MDCTextFieldCss = css`
  .mdc-floating-label {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    /* @alternate */
    font-family: var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));
    font-size: 1rem;
    /* @alternate */
    font-size: var(--mdc-typography-subtitle1-font-size, 1rem);
    font-weight: 400;
    /* @alternate */
    font-weight: var(--mdc-typography-subtitle1-font-weight, 400);
    letter-spacing: 0.009375em;
    /* @alternate */
    letter-spacing: var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);
    text-decoration: inherit;
    /* @alternate */
    -webkit-text-decoration: var(--mdc-typography-subtitle1-text-decoration, inherit);
            text-decoration: var(--mdc-typography-subtitle1-text-decoration, inherit);
    text-transform: inherit;
    /* @alternate */
    text-transform: var(--mdc-typography-subtitle1-text-transform, inherit);
    position: absolute;
    /* @noflip */
    left: 0;
    /* @noflip */
    -webkit-transform-origin: left top;
            transform-origin: left top;
    line-height: 1.15rem;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: text;
    overflow: hidden;
    /* @alternate */
    will-change: transform;
    transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
    transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
    transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  [dir=rtl] .mdc-floating-label, .mdc-floating-label[dir=rtl] {
    /* @noflip */
    right: 0;
    /* @noflip */
    left: auto;
    /* @noflip */
    -webkit-transform-origin: right top;
            transform-origin: right top;
    /* @noflip */
    text-align: right;
  }

  .mdc-floating-label--float-above {
    cursor: auto;
  }

  .mdc-floating-label--float-above {
    -webkit-transform: translateY(-106%) scale(0.75);
            transform: translateY(-106%) scale(0.75);
  }

  .mdc-floating-label--shake {
    -webkit-animation: mdc-floating-label-shake-float-above-standard 250ms 1;
            animation: mdc-floating-label-shake-float-above-standard 250ms 1;
  }

  @-webkit-keyframes mdc-floating-label-shake-float-above-standard {
    0% {
      -webkit-transform: translateX(calc(0 - 0%)) translateY(-106%) scale(0.75);
              transform: translateX(calc(0 - 0%)) translateY(-106%) scale(0.75);
    }
    33% {
      -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
              animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
      -webkit-transform: translateX(calc(4% - 0%)) translateY(-106%) scale(0.75);
              transform: translateX(calc(4% - 0%)) translateY(-106%) scale(0.75);
    }
    66% {
      -webkit-animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
              animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
      -webkit-transform: translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75);
              transform: translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75);
    }
    100% {
      -webkit-transform: translateX(calc(0 - 0%)) translateY(-106%) scale(0.75);
              transform: translateX(calc(0 - 0%)) translateY(-106%) scale(0.75);
    }
  }

  @keyframes mdc-floating-label-shake-float-above-standard {
    0% {
      -webkit-transform: translateX(calc(0 - 0%)) translateY(-106%) scale(0.75);
              transform: translateX(calc(0 - 0%)) translateY(-106%) scale(0.75);
    }
    33% {
      -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
              animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
      -webkit-transform: translateX(calc(4% - 0%)) translateY(-106%) scale(0.75);
              transform: translateX(calc(4% - 0%)) translateY(-106%) scale(0.75);
    }
    66% {
      -webkit-animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
              animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
      -webkit-transform: translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75);
              transform: translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75);
    }
    100% {
      -webkit-transform: translateX(calc(0 - 0%)) translateY(-106%) scale(0.75);
              transform: translateX(calc(0 - 0%)) translateY(-106%) scale(0.75);
    }
  }
  .mdc-line-ripple::before, .mdc-line-ripple::after {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    border-bottom-style: solid;
    content: "";
  }
  .mdc-line-ripple::before {
    border-bottom-width: 1px;
    z-index: 1;
  }
  .mdc-line-ripple::after {
    -webkit-transform: scaleX(0);
            transform: scaleX(0);
    border-bottom-width: 2px;
    opacity: 0;
    z-index: 2;
  }
  .mdc-line-ripple::after {
    transition: opacity 180ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 180ms cubic-bezier(0.4, 0, 0.2, 1);
    transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
    transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 180ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .mdc-line-ripple--active::after {
    -webkit-transform: scaleX(1);
            transform: scaleX(1);
    opacity: 1;
  }

  .mdc-line-ripple--deactivating::after {
    opacity: 0;
  }

  .mdc-notched-outline {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    box-sizing: border-box;
    width: 100%;
    max-width: 100%;
    height: 100%;
    /* @noflip */
    text-align: left;
    pointer-events: none;
  }
  [dir=rtl] .mdc-notched-outline, .mdc-notched-outline[dir=rtl] {
    /* @noflip */
    text-align: right;
  }
  .mdc-notched-outline__leading, .mdc-notched-outline__notch, .mdc-notched-outline__trailing {
    box-sizing: border-box;
    height: 100%;
    border-top: 1px solid;
    border-bottom: 1px solid;
    pointer-events: none;
  }
  .mdc-notched-outline__leading {
    /* @noflip */
    border-left: 1px solid;
    /* @noflip */
    border-right: none;
    width: 12px;
  }
  [dir=rtl] .mdc-notched-outline__leading, .mdc-notched-outline__leading[dir=rtl] {
    /* @noflip */
    border-left: none;
    /* @noflip */
    border-right: 1px solid;
  }
  .mdc-notched-outline__trailing {
    /* @noflip */
    border-left: none;
    /* @noflip */
    border-right: 1px solid;
    flex-grow: 1;
  }
  [dir=rtl] .mdc-notched-outline__trailing, .mdc-notched-outline__trailing[dir=rtl] {
    /* @noflip */
    border-left: 1px solid;
    /* @noflip */
    border-right: none;
  }
  .mdc-notched-outline__notch {
    flex: 0 0 auto;
    width: auto;
    max-width: calc(100% - 12px * 2);
  }
  .mdc-notched-outline .mdc-floating-label {
    display: inline-block;
    position: relative;
    max-width: 100%;
  }
  .mdc-notched-outline .mdc-floating-label--float-above {
    text-overflow: clip;
  }
  .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
    max-width: calc(100% / .75);
  }

  .mdc-notched-outline--notched .mdc-notched-outline__notch {
    /* @noflip */
    padding-left: 0;
    /* @noflip */
    padding-right: 8px;
    border-top: none;
  }
  [dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch, .mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl] {
    /* @noflip */
    padding-left: 8px;
    /* @noflip */
    padding-right: 0;
  }

  .mdc-notched-outline--no-label .mdc-notched-outline__notch {
    padding: 0;
  }

  .mdc-text-field-helper-text {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    /* @alternate */
    font-family: var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));
    font-size: 0.75rem;
    /* @alternate */
    font-size: var(--mdc-typography-caption-font-size, 0.75rem);
    line-height: 1.25rem;
    /* @alternate */
    line-height: var(--mdc-typography-caption-line-height, 1.25rem);
    font-weight: 400;
    /* @alternate */
    font-weight: var(--mdc-typography-caption-font-weight, 400);
    letter-spacing: 0.0333333333em;
    /* @alternate */
    letter-spacing: var(--mdc-typography-caption-letter-spacing, 0.0333333333em);
    text-decoration: inherit;
    /* @alternate */
    -webkit-text-decoration: var(--mdc-typography-caption-text-decoration, inherit);
            text-decoration: var(--mdc-typography-caption-text-decoration, inherit);
    text-transform: inherit;
    /* @alternate */
    text-transform: var(--mdc-typography-caption-text-transform, inherit);
    display: block;
    margin-top: 0;
    /* @alternate */
    line-height: normal;
    margin: 0;
    opacity: 0;
    will-change: opacity;
    transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .mdc-text-field-helper-text::before {
    display: inline-block;
    width: 0;
    height: 16px;
    content: "";
    vertical-align: 0;
  }

  .mdc-text-field-helper-text--persistent {
    transition: none;
    opacity: 1;
    will-change: initial;
  }

  .mdc-text-field-character-counter {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    /* @alternate */
    font-family: var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));
    font-size: 0.75rem;
    /* @alternate */
    font-size: var(--mdc-typography-caption-font-size, 0.75rem);
    line-height: 1.25rem;
    /* @alternate */
    line-height: var(--mdc-typography-caption-line-height, 1.25rem);
    font-weight: 400;
    /* @alternate */
    font-weight: var(--mdc-typography-caption-font-weight, 400);
    letter-spacing: 0.0333333333em;
    /* @alternate */
    letter-spacing: var(--mdc-typography-caption-letter-spacing, 0.0333333333em);
    text-decoration: inherit;
    /* @alternate */
    -webkit-text-decoration: var(--mdc-typography-caption-text-decoration, inherit);
            text-decoration: var(--mdc-typography-caption-text-decoration, inherit);
    text-transform: inherit;
    /* @alternate */
    text-transform: var(--mdc-typography-caption-text-transform, inherit);
    display: block;
    margin-top: 0;
    /* @alternate */
    line-height: normal;
    /* @noflip */
    margin-left: auto;
    /* @noflip */
    margin-right: 0;
    /* @noflip */
    padding-left: 16px;
    /* @noflip */
    padding-right: 0;
    white-space: nowrap;
  }
  .mdc-text-field-character-counter::before {
    display: inline-block;
    width: 0;
    height: 16px;
    content: "";
    vertical-align: 0;
  }
  [dir=rtl] .mdc-text-field-character-counter, .mdc-text-field-character-counter[dir=rtl] {
    /* @noflip */
    margin-left: 0;
    /* @noflip */
    margin-right: auto;
  }
  [dir=rtl] .mdc-text-field-character-counter, .mdc-text-field-character-counter[dir=rtl] {
    /* @noflip */
    padding-left: 0;
    /* @noflip */
    padding-right: 16px;
  }

  .mdc-text-field__icon {
    align-self: center;
    cursor: pointer;
  }
  .mdc-text-field__icon:not([tabindex]), .mdc-text-field__icon[tabindex="-1"] {
    cursor: default;
    pointer-events: none;
  }

  .mdc-text-field__icon--leading {
    /* @noflip */
    margin-left: 16px;
    /* @noflip */
    margin-right: 8px;
  }
  [dir=rtl] .mdc-text-field__icon--leading, .mdc-text-field__icon--leading[dir=rtl] {
    /* @noflip */
    margin-left: 8px;
    /* @noflip */
    margin-right: 16px;
  }

  .mdc-text-field__icon--trailing {
    /* @noflip */
    margin-left: 12px;
    /* @noflip */
    margin-right: 12px;
  }
  [dir=rtl] .mdc-text-field__icon--trailing, .mdc-text-field__icon--trailing[dir=rtl] {
    /* @noflip */
    margin-left: 12px;
    /* @noflip */
    margin-right: 12px;
  }

  @-webkit-keyframes mdc-ripple-fg-radius-in {
    from {
      -webkit-animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
              animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      -webkit-transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);
              transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);
    }
    to {
      -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
              transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
    }
  }

  @keyframes mdc-ripple-fg-radius-in {
    from {
      -webkit-animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
              animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      -webkit-transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);
              transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);
    }
    to {
      -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
              transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
    }
  }
  @-webkit-keyframes mdc-ripple-fg-opacity-in {
    from {
      -webkit-animation-timing-function: linear;
              animation-timing-function: linear;
      opacity: 0;
    }
    to {
      opacity: var(--mdc-ripple-fg-opacity, 0);
    }
  }
  @keyframes mdc-ripple-fg-opacity-in {
    from {
      -webkit-animation-timing-function: linear;
              animation-timing-function: linear;
      opacity: 0;
    }
    to {
      opacity: var(--mdc-ripple-fg-opacity, 0);
    }
  }
  @-webkit-keyframes mdc-ripple-fg-opacity-out {
    from {
      -webkit-animation-timing-function: linear;
              animation-timing-function: linear;
      opacity: var(--mdc-ripple-fg-opacity, 0);
    }
    to {
      opacity: 0;
    }
  }
  @keyframes mdc-ripple-fg-opacity-out {
    from {
      -webkit-animation-timing-function: linear;
              animation-timing-function: linear;
      opacity: var(--mdc-ripple-fg-opacity, 0);
    }
    to {
      opacity: 0;
    }
  }
  .mdc-text-field--filled {
    --mdc-ripple-fg-size: 0;
    --mdc-ripple-left: 0;
    --mdc-ripple-top: 0;
    --mdc-ripple-fg-scale: 1;
    --mdc-ripple-fg-translate-end: 0;
    --mdc-ripple-fg-translate-start: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  .mdc-text-field--filled .mdc-text-field__ripple::before,
  .mdc-text-field--filled .mdc-text-field__ripple::after {
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    content: "";
  }
  .mdc-text-field--filled .mdc-text-field__ripple::before {
    transition: opacity 15ms linear, background-color 15ms linear;
    z-index: 1;
  }
  .mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::before {
    -webkit-transform: scale(var(--mdc-ripple-fg-scale, 1));
            transform: scale(var(--mdc-ripple-fg-scale, 1));
  }
  .mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after {
    top: 0;
    /* @noflip */
    left: 0;
    -webkit-transform: scale(0);
            transform: scale(0);
    -webkit-transform-origin: center center;
            transform-origin: center center;
  }
  .mdc-text-field--filled.mdc-ripple-upgraded--unbounded .mdc-text-field__ripple::after {
    top: var(--mdc-ripple-top, 0);
    /* @noflip */
    left: var(--mdc-ripple-left, 0);
  }
  .mdc-text-field--filled.mdc-ripple-upgraded--foreground-activation .mdc-text-field__ripple::after {
    -webkit-animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;
            animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;
  }
  .mdc-text-field--filled.mdc-ripple-upgraded--foreground-deactivation .mdc-text-field__ripple::after {
    -webkit-animation: mdc-ripple-fg-opacity-out 150ms;
            animation: mdc-ripple-fg-opacity-out 150ms;
    -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
            transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
  }
  .mdc-text-field--filled .mdc-text-field__ripple::before,
  .mdc-text-field--filled .mdc-text-field__ripple::after {
    top: calc(50% - 100%);
    /* @noflip */
    left: calc(50% - 100%);
    width: 200%;
    height: 200%;
  }
  .mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after {
    width: var(--mdc-ripple-fg-size, 100%);
    height: var(--mdc-ripple-fg-size, 100%);
  }

  .mdc-text-field__ripple {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .mdc-text-field {
    border-radius: 4px 4px 0 0;
    padding: 0 16px;
    display: inline-flex;
    align-items: baseline;
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
    /* @alternate */
    will-change: opacity, transform, color;
  }
  .mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label {
    color: rgba(0, 0, 0, 0.6);
  }
  .mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input {
    color: rgba(0, 0, 0, 0.87);
  }
  @media all {
    .mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
      color: rgba(0, 0, 0, 0.54);
    }
    .mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
      color: rgba(0, 0, 0, 0.54);
    }
    .mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input::-ms-input-placeholder {
      color: rgba(0, 0, 0, 0.54);
    }
    .mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
      color: rgba(0, 0, 0, 0.54);
    }
  }
  @media all {
    .mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
      color: rgba(0, 0, 0, 0.54);
    }
  }
  .mdc-text-field .mdc-text-field__input {
    caret-color: #6200ee;
    /* @alternate */
    caret-color: var(--mdc-theme-primary, #6200ee);
  }
  .mdc-text-field:not(.mdc-text-field--disabled) + .mdc-text-field-helper-line .mdc-text-field-helper-text {
    color: rgba(0, 0, 0, 0.6);
  }
  .mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field-character-counter,
  .mdc-text-field:not(.mdc-text-field--disabled) + .mdc-text-field-helper-line .mdc-text-field-character-counter {
    color: rgba(0, 0, 0, 0.6);
  }
  .mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--leading {
    color: rgba(0, 0, 0, 0.54);
  }
  .mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing {
    color: rgba(0, 0, 0, 0.54);
  }
  .mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--prefix {
    color: rgba(0, 0, 0, 0.6);
  }
  .mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--suffix {
    color: rgba(0, 0, 0, 0.6);
  }
  .mdc-text-field .mdc-floating-label {
    top: 50%;
    -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
    pointer-events: none;
  }
  .mdc-text-field.mdc-text-field--with-leading-icon {
    /* @noflip */
    padding-left: 0;
    /* @noflip */
    padding-right: 16px;
  }
  [dir=rtl] .mdc-text-field.mdc-text-field--with-leading-icon, .mdc-text-field.mdc-text-field--with-leading-icon[dir=rtl] {
    /* @noflip */
    padding-left: 16px;
    /* @noflip */
    padding-right: 0;
  }
  .mdc-text-field.mdc-text-field--with-trailing-icon {
    /* @noflip */
    padding-left: 16px;
    /* @noflip */
    padding-right: 0;
  }
  [dir=rtl] .mdc-text-field.mdc-text-field--with-trailing-icon, .mdc-text-field.mdc-text-field--with-trailing-icon[dir=rtl] {
    /* @noflip */
    padding-left: 0;
    /* @noflip */
    padding-right: 16px;
  }
  .mdc-text-field.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon {
    /* @noflip */
    padding-left: 0;
    /* @noflip */
    padding-right: 0;
  }
  [dir=rtl] .mdc-text-field.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon, .mdc-text-field.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon[dir=rtl] {
    /* @noflip */
    padding-left: 0;
    /* @noflip */
    padding-right: 0;
  }

  .mdc-text-field__input {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    /* @alternate */
    font-family: var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));
    font-size: 1rem;
    /* @alternate */
    font-size: var(--mdc-typography-subtitle1-font-size, 1rem);
    font-weight: 400;
    /* @alternate */
    font-weight: var(--mdc-typography-subtitle1-font-weight, 400);
    letter-spacing: 0.009375em;
    /* @alternate */
    letter-spacing: var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);
    text-decoration: inherit;
    /* @alternate */
    -webkit-text-decoration: var(--mdc-typography-subtitle1-text-decoration, inherit);
            text-decoration: var(--mdc-typography-subtitle1-text-decoration, inherit);
    text-transform: inherit;
    /* @alternate */
    text-transform: var(--mdc-typography-subtitle1-text-transform, inherit);
    height: 28px;
    transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
    width: 100%;
    min-width: 0;
    border: none;
    border-radius: 0;
    background: none;
    -webkit-appearance: none;
      -moz-appearance: none;
            appearance: none;
    padding: 0;
  }
  .mdc-text-field__input::-ms-clear {
    display: none;
  }
  .mdc-text-field__input:focus {
    outline: none;
  }
  .mdc-text-field__input:invalid {
    box-shadow: none;
  }
  .mdc-text-field__input:-webkit-autofill {
    z-index: auto !important;
  }
  @media all {
    .mdc-text-field__input::-webkit-input-placeholder {
      transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
      opacity: 0;
    }
    .mdc-text-field__input:-ms-input-placeholder {
      transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
      opacity: 0;
    }
    .mdc-text-field__input::-ms-input-placeholder {
      transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
      opacity: 0;
    }
    .mdc-text-field__input::placeholder {
      transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
      opacity: 0;
    }
  }
  @media all {
    .mdc-text-field__input:-ms-input-placeholder {
      transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
      opacity: 0;
    }
  }
  @media all {
    .mdc-text-field--fullwidth .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
      transition-delay: 40ms;
      transition-duration: 110ms;
      opacity: 1;
    }
    .mdc-text-field--fullwidth .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
      transition-delay: 40ms;
      transition-duration: 110ms;
      opacity: 1;
    }
    .mdc-text-field--fullwidth .mdc-text-field__input::-ms-input-placeholder, .mdc-text-field--no-label .mdc-text-field__input::-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-ms-input-placeholder {
      transition-delay: 40ms;
      transition-duration: 110ms;
      opacity: 1;
    }
    .mdc-text-field--fullwidth .mdc-text-field__input::placeholder, .mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
      transition-delay: 40ms;
      transition-duration: 110ms;
      opacity: 1;
    }
  }
  @media all {
    .mdc-text-field--fullwidth .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
      transition-delay: 40ms;
      transition-duration: 110ms;
      opacity: 1;
    }
  }

  .mdc-text-field__affix {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    /* @alternate */
    font-family: var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));
    font-size: 1rem;
    /* @alternate */
    font-size: var(--mdc-typography-subtitle1-font-size, 1rem);
    font-weight: 400;
    /* @alternate */
    font-weight: var(--mdc-typography-subtitle1-font-weight, 400);
    letter-spacing: 0.009375em;
    /* @alternate */
    letter-spacing: var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);
    text-decoration: inherit;
    /* @alternate */
    -webkit-text-decoration: var(--mdc-typography-subtitle1-text-decoration, inherit);
            text-decoration: var(--mdc-typography-subtitle1-text-decoration, inherit);
    text-transform: inherit;
    /* @alternate */
    text-transform: var(--mdc-typography-subtitle1-text-transform, inherit);
    height: 28px;
    transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
    white-space: nowrap;
  }
  .mdc-text-field--label-floating .mdc-text-field__affix, .mdc-text-field--no-label .mdc-text-field__affix {
    opacity: 1;
  }

  .mdc-text-field__affix--prefix {
    /* @noflip */
    padding-left: 0;
    /* @noflip */
    padding-right: 2px;
  }
  [dir=rtl] .mdc-text-field__affix--prefix, .mdc-text-field__affix--prefix[dir=rtl] {
    /* @noflip */
    padding-left: 2px;
    /* @noflip */
    padding-right: 0;
  }
  .mdc-text-field--end-aligned .mdc-text-field__affix--prefix {
    /* @noflip */
    padding-left: 0;
    /* @noflip */
    padding-right: 12px;
  }
  [dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--prefix, .mdc-text-field--end-aligned .mdc-text-field__affix--prefix[dir=rtl] {
    /* @noflip */
    padding-left: 12px;
    /* @noflip */
    padding-right: 0;
  }

  .mdc-text-field__affix--suffix {
    /* @noflip */
    padding-left: 12px;
    /* @noflip */
    padding-right: 0;
  }
  [dir=rtl] .mdc-text-field__affix--suffix, .mdc-text-field__affix--suffix[dir=rtl] {
    /* @noflip */
    padding-left: 0;
    /* @noflip */
    padding-right: 12px;
  }
  .mdc-text-field--end-aligned .mdc-text-field__affix--suffix {
    /* @noflip */
    padding-left: 2px;
    /* @noflip */
    padding-right: 0;
  }
  [dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--suffix, .mdc-text-field--end-aligned .mdc-text-field__affix--suffix[dir=rtl] {
    /* @noflip */
    padding-left: 0;
    /* @noflip */
    padding-right: 2px;
  }

  .mdc-text-field__input:-webkit-autofill + .mdc-floating-label {
    -webkit-transform: translateY(-50%) scale(0.75);
            transform: translateY(-50%) scale(0.75);
    cursor: auto;
  }

  .mdc-text-field--filled {
    height: 56px;
  }
  .mdc-text-field--filled .mdc-text-field__ripple::before,
  .mdc-text-field--filled .mdc-text-field__ripple::after {
    background-color: rgba(0, 0, 0, 0.87);
  }
  .mdc-text-field--filled:hover .mdc-text-field__ripple::before {
    opacity: 0.04;
  }
  .mdc-text-field--filled.mdc-ripple-upgraded--background-focused .mdc-text-field__ripple::before, .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
    transition-duration: 75ms;
    opacity: 0.12;
  }
  .mdc-text-field--filled::before {
    display: inline-block;
    width: 0;
    height: 40px;
    content: "";
    vertical-align: 0;
  }
  .mdc-text-field--filled:not(.mdc-text-field--disabled) {
    background-color: whitesmoke;
  }
  .mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
    border-bottom-color: rgba(0, 0, 0, 0.42);
  }
  .mdc-text-field--filled:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before {
    border-bottom-color: rgba(0, 0, 0, 0.87);
  }
  .mdc-text-field--filled .mdc-line-ripple::after {
    border-bottom-color: #6200ee;
    /* @alternate */
    border-bottom-color: var(--mdc-theme-primary, #6200ee);
  }
  .mdc-text-field--filled .mdc-floating-label {
    /* @noflip */
    left: 16px;
    /* @noflip */
    right: initial;
  }
  [dir=rtl] .mdc-text-field--filled .mdc-floating-label, .mdc-text-field--filled .mdc-floating-label[dir=rtl] {
    /* @noflip */
    left: initial;
    /* @noflip */
    right: 16px;
  }
  .mdc-text-field--filled .mdc-floating-label--float-above {
    -webkit-transform: translateY(-106%) scale(0.75);
            transform: translateY(-106%) scale(0.75);
  }
  .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
    height: 100%;
  }
  .mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
    display: none;
  }
  .mdc-text-field--filled.mdc-text-field--no-label::before {
    display: none;
  }

  .mdc-text-field--outlined {
    height: 56px;
    overflow: visible;
  }
  .mdc-text-field--outlined .mdc-floating-label--float-above {
    -webkit-transform: translateY(-37.25px) scale(1);
            transform: translateY(-37.25px) scale(1);
  }
  .mdc-text-field--outlined .mdc-floating-label--float-above {
    font-size: 0.75rem;
  }
  .mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,
  .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
    -webkit-transform: translateY(-34.75px) scale(0.75);
            transform: translateY(-34.75px) scale(0.75);
  }
  .mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,
  .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
    font-size: 1rem;
  }
  .mdc-text-field--outlined .mdc-floating-label--shake {
    -webkit-animation: mdc-floating-label-shake-float-above-text-field-outlined 250ms 1;
            animation: mdc-floating-label-shake-float-above-text-field-outlined 250ms 1;
  }
  @-webkit-keyframes mdc-floating-label-shake-float-above-text-field-outlined {
    0% {
      -webkit-transform: translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75);
              transform: translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75);
    }
    33% {
      -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
              animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
      -webkit-transform: translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75);
              transform: translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75);
    }
    66% {
      -webkit-animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
              animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
      -webkit-transform: translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75);
              transform: translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75);
    }
    100% {
      -webkit-transform: translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75);
              transform: translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75);
    }
  }
  @keyframes mdc-floating-label-shake-float-above-text-field-outlined {
    0% {
      -webkit-transform: translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75);
              transform: translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75);
    }
    33% {
      -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
              animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
      -webkit-transform: translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75);
              transform: translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75);
    }
    66% {
      -webkit-animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
              animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
      -webkit-transform: translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75);
              transform: translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75);
    }
    100% {
      -webkit-transform: translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75);
              transform: translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75);
    }
  }
  .mdc-text-field--outlined .mdc-text-field__input {
    height: 100%;
  }
  .mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,
  .mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,
  .mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing {
    border-color: rgba(0, 0, 0, 0.38);
  }
  .mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,
  .mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,
  .mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing {
    border-color: rgba(0, 0, 0, 0.87);
  }
  .mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,
  .mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,
  .mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing {
    border-color: #6200ee;
    /* @alternate */
    border-color: var(--mdc-theme-primary, #6200ee);
  }
  .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
    /* @noflip */
    border-radius: 4px 0 0 4px;
  }
  [dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading, .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl] {
    /* @noflip */
    border-radius: 0 4px 4px 0;
  }
  .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing {
    /* @noflip */
    border-radius: 0 4px 4px 0;
  }
  [dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing, .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl] {
    /* @noflip */
    border-radius: 4px 0 0 4px;
  }
  .mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
    padding-top: 1px;
  }
  .mdc-text-field--outlined .mdc-text-field__ripple::before,
  .mdc-text-field--outlined .mdc-text-field__ripple::after {
    content: none;
  }
  .mdc-text-field--outlined .mdc-floating-label {
    /* @noflip */
    left: 4px;
    /* @noflip */
    right: initial;
  }
  [dir=rtl] .mdc-text-field--outlined .mdc-floating-label, .mdc-text-field--outlined .mdc-floating-label[dir=rtl] {
    /* @noflip */
    left: initial;
    /* @noflip */
    right: 4px;
  }
  .mdc-text-field--outlined .mdc-text-field__input {
    display: flex;
    border: none !important;
    background-color: transparent;
    z-index: 1;
  }
  .mdc-text-field--outlined .mdc-text-field__icon {
    z-index: 2;
  }
  .mdc-text-field--outlined.mdc-text-field--focused .mdc-notched-outline--notched .mdc-notched-outline__notch {
    padding-top: 2px;
  }

  .mdc-text-field--textarea {
    align-items: center;
    width: auto;
    height: auto;
    padding: 0;
    overflow: visible;
    transition: none;
  }
  .mdc-text-field--textarea:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,
  .mdc-text-field--textarea:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,
  .mdc-text-field--textarea:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing {
    border-color: rgba(0, 0, 0, 0.38);
  }
  .mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,
  .mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,
  .mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing {
    border-color: rgba(0, 0, 0, 0.87);
  }
  .mdc-text-field--textarea:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,
  .mdc-text-field--textarea:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,
  .mdc-text-field--textarea:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing {
    border-color: #6200ee;
    /* @alternate */
    border-color: var(--mdc-theme-primary, #6200ee);
  }
  .mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__leading {
    /* @noflip */
    border-radius: 4px 0 0 4px;
  }
  [dir=rtl] .mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__leading, .mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl] {
    /* @noflip */
    border-radius: 0 4px 4px 0;
  }
  .mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__trailing {
    /* @noflip */
    border-radius: 0 4px 4px 0;
  }
  [dir=rtl] .mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__trailing, .mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl] {
    /* @noflip */
    border-radius: 4px 0 0 4px;
  }
  .mdc-text-field--textarea .mdc-text-field__ripple::before,
  .mdc-text-field--textarea .mdc-text-field__ripple::after {
    content: none;
  }
  .mdc-text-field--textarea:not(.mdc-text-field--disabled) {
    background-color: transparent;
  }
  .mdc-text-field--textarea .mdc-text-field-character-counter {
    /* @noflip */
    left: initial;
    /* @noflip */
    right: 16px;
    position: absolute;
    bottom: 13px;
  }
  [dir=rtl] .mdc-text-field--textarea .mdc-text-field-character-counter, .mdc-text-field--textarea .mdc-text-field-character-counter[dir=rtl] {
    /* @noflip */
    left: 16px;
    /* @noflip */
    right: initial;
  }
  .mdc-text-field--textarea .mdc-floating-label {
    /* @noflip */
    left: 4px;
    /* @noflip */
    right: initial;
    top: 17px;
    width: auto;
  }
  [dir=rtl] .mdc-text-field--textarea .mdc-floating-label, .mdc-text-field--textarea .mdc-floating-label[dir=rtl] {
    /* @noflip */
    left: initial;
    /* @noflip */
    right: 4px;
  }
  .mdc-text-field--textarea .mdc-floating-label:not(.mdc-floating-label--float-above) {
    -webkit-transform: none;
            transform: none;
  }
  .mdc-text-field--textarea .mdc-floating-label--float-above {
    -webkit-transform: translateY(-144%) scale(1);
            transform: translateY(-144%) scale(1);
  }
  .mdc-text-field--textarea .mdc-floating-label--float-above {
    font-size: 0.75rem;
  }
  .mdc-text-field--textarea.mdc-notched-outline--upgraded .mdc-floating-label--float-above,
  .mdc-text-field--textarea .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
    -webkit-transform: translateY(-130%) scale(0.75);
            transform: translateY(-130%) scale(0.75);
  }
  .mdc-text-field--textarea.mdc-notched-outline--upgraded .mdc-floating-label--float-above,
  .mdc-text-field--textarea .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
    font-size: 1rem;
  }
  .mdc-text-field--textarea .mdc-floating-label--shake {
    -webkit-animation: mdc-floating-label-shake-float-above-textarea 250ms 1;
            animation: mdc-floating-label-shake-float-above-textarea 250ms 1;
  }
  @-webkit-keyframes mdc-floating-label-shake-float-above-textarea {
    0% {
      -webkit-transform: translateX(calc(0 - 0%)) translateY(-130%) scale(0.75);
              transform: translateX(calc(0 - 0%)) translateY(-130%) scale(0.75);
    }
    33% {
      -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
              animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
      -webkit-transform: translateX(calc(4% - 0%)) translateY(-130%) scale(0.75);
              transform: translateX(calc(4% - 0%)) translateY(-130%) scale(0.75);
    }
    66% {
      -webkit-animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
              animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
      -webkit-transform: translateX(calc(-4% - 0%)) translateY(-130%) scale(0.75);
              transform: translateX(calc(-4% - 0%)) translateY(-130%) scale(0.75);
    }
    100% {
      -webkit-transform: translateX(calc(0 - 0%)) translateY(-130%) scale(0.75);
              transform: translateX(calc(0 - 0%)) translateY(-130%) scale(0.75);
    }
  }
  @keyframes mdc-floating-label-shake-float-above-textarea {
    0% {
      -webkit-transform: translateX(calc(0 - 0%)) translateY(-130%) scale(0.75);
              transform: translateX(calc(0 - 0%)) translateY(-130%) scale(0.75);
    }
    33% {
      -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
              animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
      -webkit-transform: translateX(calc(4% - 0%)) translateY(-130%) scale(0.75);
              transform: translateX(calc(4% - 0%)) translateY(-130%) scale(0.75);
    }
    66% {
      -webkit-animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
              animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
      -webkit-transform: translateX(calc(-4% - 0%)) translateY(-130%) scale(0.75);
              transform: translateX(calc(-4% - 0%)) translateY(-130%) scale(0.75);
    }
    100% {
      -webkit-transform: translateX(calc(0 - 0%)) translateY(-130%) scale(0.75);
              transform: translateX(calc(0 - 0%)) translateY(-130%) scale(0.75);
    }
  }
  .mdc-text-field--textarea .mdc-text-field__input {
    height: auto;
    align-self: stretch;
    box-sizing: border-box;
    margin-top: 8px;
    margin-bottom: 1px;
    /* @noflip */
    margin-left: 0;
    /* @noflip */
    margin-right: 1px;
    padding: 0 16px 16px;
    line-height: 1.75rem;
  }
  [dir=rtl] .mdc-text-field--textarea .mdc-text-field__input, .mdc-text-field--textarea .mdc-text-field__input[dir=rtl] {
    /* @noflip */
    margin-left: 1px;
    /* @noflip */
    margin-right: 0;
  }
  .mdc-text-field--textarea .mdc-text-field-character-counter + .mdc-text-field__input {
    margin-bottom: 28px;
    padding-bottom: 0;
  }

  .mdc-text-field--fullwidth {
    padding: 0;
    width: 100%;
  }
  .mdc-text-field--fullwidth:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
    border-bottom-color: rgba(0, 0, 0, 0.42);
  }
  .mdc-text-field--fullwidth.mdc-text-field--disabled .mdc-line-ripple::before {
    border-bottom-color: rgba(0, 0, 0, 0.42);
  }
  .mdc-text-field--fullwidth:not(.mdc-text-field--textarea) {
    display: flex;
  }
  .mdc-text-field--fullwidth:not(.mdc-text-field--textarea) .mdc-text-field__input {
    height: 100%;
  }
  .mdc-text-field--fullwidth:not(.mdc-text-field--textarea) .mdc-floating-label {
    display: none;
  }
  .mdc-text-field--fullwidth:not(.mdc-text-field--textarea)::before {
    display: none;
  }
  .mdc-text-field--fullwidth:not(.mdc-text-field--textarea) .mdc-text-field__ripple::before,
  .mdc-text-field--fullwidth:not(.mdc-text-field--textarea) .mdc-text-field__ripple::after {
    content: none;
  }
  .mdc-text-field--fullwidth:not(.mdc-text-field--textarea):not(.mdc-text-field--disabled) {
    background-color: transparent;
  }
  .mdc-text-field--fullwidth.mdc-text-field--textarea .mdc-text-field__input {
    resize: vertical;
  }

  .mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label {
    max-width: calc(100% - 48px);
    /* @noflip */
    left: 48px;
    /* @noflip */
    right: initial;
  }
  [dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label, .mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label[dir=rtl] {
    /* @noflip */
    left: initial;
    /* @noflip */
    right: 48px;
  }
  .mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label--float-above {
    max-width: calc(100% / 0.75 - 64px / 0.75);
  }
  .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label {
    /* @noflip */
    left: 36px;
    /* @noflip */
    right: initial;
  }
  [dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label, .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label[dir=rtl] {
    /* @noflip */
    left: initial;
    /* @noflip */
    right: 36px;
  }
  .mdc-text-field--with-leading-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch {
    max-width: calc(100% - 60px);
  }
  .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above {
    -webkit-transform: translateY(-37.25px) translateX(-32px) scale(1);
            transform: translateY(-37.25px) translateX(-32px) scale(1);
  }
  [dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above, .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above[dir=rtl] {
    -webkit-transform: translateY(-37.25px) translateX(32px) scale(1);
            transform: translateY(-37.25px) translateX(32px) scale(1);
  }
  .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above {
    font-size: 0.75rem;
  }
  .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,
  .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
    -webkit-transform: translateY(-34.75px) translateX(-32px) scale(0.75);
            transform: translateY(-34.75px) translateX(-32px) scale(0.75);
  }
  [dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],
  [dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,
  .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl] {
    -webkit-transform: translateY(-34.75px) translateX(32px) scale(0.75);
            transform: translateY(-34.75px) translateX(32px) scale(0.75);
  }
  .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,
  .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
    font-size: 1rem;
  }
  .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake {
    -webkit-animation: mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1;
            animation: mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1;
  }
  @-webkit-keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon {
    0% {
      -webkit-transform: translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75);
              transform: translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75);
    }
    33% {
      -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
              animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
      -webkit-transform: translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75);
              transform: translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75);
    }
    66% {
      -webkit-animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
              animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
      -webkit-transform: translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75);
              transform: translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75);
    }
    100% {
      -webkit-transform: translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75);
              transform: translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75);
    }
  }
  @keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon {
    0% {
      -webkit-transform: translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75);
              transform: translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75);
    }
    33% {
      -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
              animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
      -webkit-transform: translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75);
              transform: translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75);
    }
    66% {
      -webkit-animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
              animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
      -webkit-transform: translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75);
              transform: translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75);
    }
    100% {
      -webkit-transform: translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75);
              transform: translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75);
    }
  }
  [dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake, .mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir=rtl] .mdc-floating-label--shake {
    -webkit-animation: mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1;
            animation: mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1;
  }
  @-webkit-keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl {
    0% {
      -webkit-transform: translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75);
              transform: translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75);
    }
    33% {
      -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
              animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
      -webkit-transform: translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75);
              transform: translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75);
    }
    66% {
      -webkit-animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
              animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
      -webkit-transform: translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75);
              transform: translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75);
    }
    100% {
      -webkit-transform: translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75);
              transform: translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75);
    }
  }
  @keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl {
    0% {
      -webkit-transform: translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75);
              transform: translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75);
    }
    33% {
      -webkit-animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
              animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
      -webkit-transform: translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75);
              transform: translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75);
    }
    66% {
      -webkit-animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
              animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
      -webkit-transform: translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75);
              transform: translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75);
    }
    100% {
      -webkit-transform: translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75);
              transform: translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75);
    }
  }

  .mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label {
    max-width: calc(100% - 64px);
  }
  .mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above {
    max-width: calc(100% / 0.75 - 64px / 0.75);
  }
  .mdc-text-field--with-trailing-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch {
    max-width: calc(100% - 60px);
  }

  .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label {
    max-width: calc(100% - 96px);
  }
  .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above {
    max-width: calc(100% / 0.75 - 96px / 0.75);
  }

  .mdc-text-field__input:required ~ .mdc-floating-label::after,
  .mdc-text-field__input:required ~ .mdc-notched-outline .mdc-floating-label::after {
    margin-left: 1px;
    content: "*";
  }

  .mdc-text-field-helper-line {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
  }
  .mdc-text-field + .mdc-text-field-helper-line {
    padding-right: 16px;
    padding-left: 16px;
  }

  .mdc-form-field > .mdc-text-field + label {
    align-self: flex-start;
  }

  .mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label {
    color: rgba(98, 0, 238, 0.87);
  }
  .mdc-text-field--focused .mdc-notched-outline__leading,
  .mdc-text-field--focused .mdc-notched-outline__notch,
  .mdc-text-field--focused .mdc-notched-outline__trailing {
    border-width: 2px;
  }
  .mdc-text-field--focused + .mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg) {
    opacity: 1;
  }

  .mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before {
    border-bottom-color: #b00020;
    /* @alternate */
    border-bottom-color: var(--mdc-theme-error, #b00020);
  }
  .mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
    border-bottom-color: #b00020;
    /* @alternate */
    border-bottom-color: var(--mdc-theme-error, #b00020);
  }
  .mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label {
    color: #b00020;
    /* @alternate */
    color: var(--mdc-theme-error, #b00020);
  }
  .mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--invalid + .mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg {
    color: #b00020;
    /* @alternate */
    color: var(--mdc-theme-error, #b00020);
  }
  .mdc-text-field--invalid .mdc-text-field__input {
    caret-color: #b00020;
    /* @alternate */
    caret-color: var(--mdc-theme-error, #b00020);
  }
  .mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing {
    color: #b00020;
    /* @alternate */
    color: var(--mdc-theme-error, #b00020);
  }
  .mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
    border-bottom-color: #b00020;
    /* @alternate */
    border-bottom-color: var(--mdc-theme-error, #b00020);
  }
  .mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,
  .mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,
  .mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing {
    border-color: #b00020;
    /* @alternate */
    border-color: var(--mdc-theme-error, #b00020);
  }
  .mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,
  .mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,
  .mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing {
    border-color: #b00020;
    /* @alternate */
    border-color: var(--mdc-theme-error, #b00020);
  }
  .mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,
  .mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,
  .mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing {
    border-color: #b00020;
    /* @alternate */
    border-color: var(--mdc-theme-error, #b00020);
  }
  .mdc-text-field--invalid + .mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg {
    opacity: 1;
  }

  .mdc-text-field--disabled {
    pointer-events: none;
  }
  .mdc-text-field--disabled .mdc-text-field__input {
    color: rgba(0, 0, 0, 0.38);
  }
  @media all {
    .mdc-text-field--disabled .mdc-text-field__input::-webkit-input-placeholder {
      color: rgba(0, 0, 0, 0.38);
    }
    .mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder {
      color: rgba(0, 0, 0, 0.38);
    }
    .mdc-text-field--disabled .mdc-text-field__input::-ms-input-placeholder {
      color: rgba(0, 0, 0, 0.38);
    }
    .mdc-text-field--disabled .mdc-text-field__input::placeholder {
      color: rgba(0, 0, 0, 0.38);
    }
  }
  @media all {
    .mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder {
      color: rgba(0, 0, 0, 0.38);
    }
  }
  .mdc-text-field--disabled .mdc-floating-label {
    color: rgba(0, 0, 0, 0.38);
  }
  .mdc-text-field--disabled + .mdc-text-field-helper-line .mdc-text-field-helper-text {
    color: rgba(0, 0, 0, 0.38);
  }
  .mdc-text-field--disabled .mdc-text-field-character-counter,
  .mdc-text-field--disabled + .mdc-text-field-helper-line .mdc-text-field-character-counter {
    color: rgba(0, 0, 0, 0.38);
  }
  .mdc-text-field--disabled .mdc-text-field__icon--leading {
    color: rgba(0, 0, 0, 0.3);
  }
  .mdc-text-field--disabled .mdc-text-field__icon--trailing {
    color: rgba(0, 0, 0, 0.3);
  }
  .mdc-text-field--disabled .mdc-text-field__affix--prefix {
    color: rgba(0, 0, 0, 0.38);
  }
  .mdc-text-field--disabled .mdc-text-field__affix--suffix {
    color: rgba(0, 0, 0, 0.38);
  }
  .mdc-text-field--disabled .mdc-line-ripple::before {
    border-bottom-color: rgba(0, 0, 0, 0.06);
  }
  .mdc-text-field--disabled .mdc-notched-outline__leading,
  .mdc-text-field--disabled .mdc-notched-outline__notch,
  .mdc-text-field--disabled .mdc-notched-outline__trailing {
    border-color: rgba(0, 0, 0, 0.06);
  }
  @media screen and (-ms-high-contrast: active) {
    .mdc-text-field--disabled .mdc-text-field__input::-webkit-input-placeholder {
      color: GrayText;
    }
    .mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder {
      color: GrayText;
    }
    .mdc-text-field--disabled .mdc-text-field__input::-ms-input-placeholder {
      color: GrayText;
    }
    .mdc-text-field--disabled .mdc-text-field__input::placeholder {
      color: GrayText;
    }
  }
  @media screen and (-ms-high-contrast: active) {
    .mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder {
      color: GrayText;
    }
  }
  @media screen and (-ms-high-contrast: active) {
    .mdc-text-field--disabled .mdc-floating-label {
      color: GrayText;
    }
  }
  @media screen and (-ms-high-contrast: active) {
    .mdc-text-field--disabled + .mdc-text-field-helper-line .mdc-text-field-helper-text {
      color: GrayText;
    }
  }
  @media screen and (-ms-high-contrast: active) {
    .mdc-text-field--disabled .mdc-text-field-character-counter,
  .mdc-text-field--disabled + .mdc-text-field-helper-line .mdc-text-field-character-counter {
      color: GrayText;
    }
  }
  @media screen and (-ms-high-contrast: active) {
    .mdc-text-field--disabled .mdc-text-field__icon--leading {
      color: GrayText;
    }
  }
  @media screen and (-ms-high-contrast: active) {
    .mdc-text-field--disabled .mdc-text-field__icon--trailing {
      color: GrayText;
    }
  }
  @media screen and (-ms-high-contrast: active) {
    .mdc-text-field--disabled .mdc-text-field__affix--prefix {
      color: GrayText;
    }
  }
  @media screen and (-ms-high-contrast: active) {
    .mdc-text-field--disabled .mdc-text-field__affix--suffix {
      color: GrayText;
    }
  }
  @media screen and (-ms-high-contrast: active) {
    .mdc-text-field--disabled .mdc-line-ripple::before {
      border-bottom-color: GrayText;
    }
  }
  @media screen and (-ms-high-contrast: active) {
    .mdc-text-field--disabled .mdc-notched-outline__leading,
  .mdc-text-field--disabled .mdc-notched-outline__notch,
  .mdc-text-field--disabled .mdc-notched-outline__trailing {
      border-color: GrayText;
    }
  }
  .mdc-text-field--disabled .mdc-floating-label {
    cursor: default;
  }
  .mdc-text-field--disabled.mdc-text-field--filled {
    background-color: #fafafa;
  }

  .mdc-text-field--end-aligned .mdc-text-field__input {
    /* @noflip */
    text-align: right;
  }
  [dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__input, .mdc-text-field--end-aligned .mdc-text-field__input[dir=rtl] {
    /* @noflip */
    text-align: left;
  }

  [dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,
  [dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix, .mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input,
  .mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix {
    /* @noflip */
    direction: ltr;
  }
  [dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix, .mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix {
    /* @noflip */
    padding-left: 0;
    /* @noflip */
    padding-right: 2px;
  }
  [dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix, .mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix {
    /* @noflip */
    padding-left: 12px;
    /* @noflip */
    padding-right: 0;
  }
  [dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--leading, .mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--leading {
    order: 1;
  }
  [dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix, .mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix {
    order: 2;
  }
  [dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input, .mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input {
    order: 3;
  }
  [dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix, .mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix {
    order: 4;
  }
  [dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--trailing, .mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--trailing {
    order: 5;
  }
  [dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__input, .mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__input {
    /* @noflip */
    text-align: right;
  }
  [dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--prefix, .mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--prefix {
    /* @noflip */
    padding-right: 12px;
  }
  [dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--suffix, .mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--suffix {
    /* @noflip */
    padding-left: 2px;
  }
`;