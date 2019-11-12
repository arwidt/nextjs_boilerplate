// Base imports
import React from 'react';
import PropTypes from 'prop-types'

// Style imports
import styled from 'styled-components';
import { colors, shadows } from 'global/style/variables';
import { above, below, gridmargins, breakpoints, sitewidth } from 'global/style/breakpoint';

// Styled components
const StyledButton = styled.button`
  display: block;
  padding: 20px;
  background: ${colors.white};
  border: 1px solid #efefef;
  box-shadow: ${shadows.default};
`;

/**
 * Button
 *
 * @param {Object} 
 */
const Button = ({ className, children, onClick }) => {
  return (
    <StyledButton>
      {children}
    </StyledButton>
  );
}

export default Button;