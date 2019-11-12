// Style imports
import styled, { css } from 'styled-components';
import { above, gridmargins, sitewidth } from 'global/style/breakpoint';

const GridLargeWrapper = css`
  display: block;
  width: 100%;
  max-width: ${sitewidth.lg};
  margin: 0 auto;

  padding-left: ${gridmargins.sm};
  padding-right: ${gridmargins.sm};
  ${above.sm`
    padding-left: ${gridmargins.md};
    padding-right: ${gridmargins.md};
  `}
  ${above.md`
    padding-left: ${gridmargins.lg};
    padding-right: ${gridmargins.lg};
  `}
`;

const GridSmallWrapper = css`
  display: block;
  width: 100%;
  max-width: ${sitewidth.sm};
  margin: 0 auto;

  padding-left: ${gridmargins.sm};
  padding-right: ${gridmargins.sm};
  ${above.sm`
    padding-left: ${gridmargins.md};
    padding-right: ${gridmargins.md};
  `}
  ${above.md`
    padding-left: ${gridmargins.lg};
    padding-right: ${gridmargins.lg};
  `}
`;

export { GridLargeWrapper, GridSmallWrapper };
