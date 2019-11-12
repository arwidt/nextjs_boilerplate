
import React from 'react';
import styled from 'styled-components';
import { BaseSvgExtend } from 'global/style/extends/Graphics';

const StyledSvg = styled(BaseSvgExtend)``;

const Chevron = ({className, children}) => (
  <StyledSvg className={className} width="15" height="22" viewBox="0 0 15 22"><path d="M2 21l10-10L2 1" stroke="currentColor" strokeWidth="3" fill="none" fillRule="evenodd"/></StyledSvg>
);

export default Chevron;
