import { createGlobalStyle } from 'styled-components';
import normalize from './normalize';
import fonts from './fonts';
import typography from './typography';
import nprogress from './nprogress';
import { colors } from './variables';

const Styles = createGlobalStyle`
  ${ normalize }
  ${ fonts }
  ${ typography }
  ${ nprogress }

  * *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    height: 100%;
  }

  body {
    height: 100%;
    margin: 0;
    padding: 0;

    font-family: 'Quicksand', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: normal;
    color: black;
    line-height: 1;
    text-size-adjust: 100%;

    background: ${colors.grey};

    &.no-scroll {
      overflow: hidden;
    }
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;

export default Styles;
