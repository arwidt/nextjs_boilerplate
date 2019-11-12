import { css } from 'styled-components';
import { above } from './breakpoint';

/**
 * Font sizes
 *
 * Main font is FrutigerLTStd, the base fontsize in
 * body is 62.5% and we always use rem.
 *
 * Header sizes with breakpoints calculations
 * Desktop (md >) = 1
 * Tablet (md breakpoint) = 0.75
 * Mobile (sm breakpoint) = 0.5
 *
 */
const typography = css`

  p {
    font-size: 1.6rem;
    font-weight: 300;

    ${above.sm`
      font-size: 1.8rem;
    `}
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  b {
    font-weight: 700;
  }

  h1 {
    font-size: 4rem;
    font-weight: 700;

    ${above.sm`
      font-size: 6rem;
    `}

    ${above.md`
      font-size: 8rem;
    `}
  }

  h2 {
    font-size: 3.2rem;
    font-weight: 700;

    ${above.sm`
      font-size: 4.8rem;
    `}

    ${above.md`
      font-size: 6.4rem;
    `}
  }

  h3 {
    font-size: 2.4rem;
    font-weight: 700;

    ${above.sm`
      font-size: 3.6rem;
    `}

    ${above.md`
      font-size: 4.8rem;
    `}
  }

  h3.modalheader {
    font-size: 2.4rem;
    font-weight: 700;

    ${above.sm`
      font-size: 3.2rem;
    `}

    ${above.md`
      font-size: 3.2rem;
    `}
  }

  h4 {
    font-size: 2rem;
    font-weight: 500;

    ${above.sm`
      font-size: 2.4rem;
    `}
  }

  h1, h2, h3, h4 {
    margin-top: 3rem;
    margin-bottom: 1rem;
  }

  a {
    font-size: 1.6rem;
    ${above.sm`
      font-size: 1.8rem;
    `}
  }

`;

export default typography;
