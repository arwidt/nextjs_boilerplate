import { css } from "styled-components";

const fontsPath = `/static/fonts/`;

const _fonts = css`
  @font-face {
    font-family: "Quicksand";
    src: url("${fontsPath}Quicksand-Light.eot");
    src: url("${fontsPath}Quicksand-Light.eot?#iefix") format("embedded-opentype"),
    url("${fontsPath}Quicksand-Light.woff2") format("woff2"),
    url("${fontsPath}Quicksand-Light.woff") format("woff");
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Quicksand";
    src: url("${fontsPath}Quicksand-Medium.eot");
    src: url("${fontsPath}Quicksand-Medium.eot?#iefix") format("embedded-opentype"),
    url("${fontsPath}Quicksand-Medium.woff2") format("woff2"),
    url("${fontsPath}Quicksand-Medium.woff") format("woff");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Quicksand";
    src: url("${fontsPath}Quicksand-Bold.eot");
    src: url("${fontsPath}Quicksand-Bold.eot?#iefix") format("embedded-opentype"),
    url("${fontsPath}Quicksand-Bold.woff2") format("woff2"),
    url("${fontsPath}Quicksand-Bold.woff") format("woff");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
`;

export default _fonts;