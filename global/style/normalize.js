import { css } from 'styled-components';

const _normalize = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    font-size: 100%;
    vertical-align: baseline;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  input,
  textarea {
    font: inherit;
    margin: 0;
  }
  
  input[type='reset'],
  input[type='button'],
  input[type='submit'],
  button {
    background: none;
    border: 0;
    color: inherit;
    font: inherit;
    line-height: inherit;
    overflow: visible;
    padding: 0;
    appearance: button;
    user-select: none;
    cursor: pointer;
  }
  
  input[type='search'] {
    appearance: none;
    padding: 0;
    background: none;
    border: 0;
  
    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      appearance: none;
    }
  }
  
  input::-moz-focus-inner,
  button::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
  
  html {
    box-sizing: border-box;
    position: relative;
    min-height: 100%;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  
  img {
    max-width: 100%;
  }
  
  input:invalid {
    box-shadow: none;
  }
  
  label {
    cursor: pointer;
  }
`;

export default _normalize;
