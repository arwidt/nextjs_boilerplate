// Base imports
import React from 'react';
import PropTypes from 'prop-types'

// Style imports
import styled from 'styled-components';
import { colors, shadows } from '../../global/style/variables';

// Styled components
const StyledButton = styled.button`
  display: block;
  padding: 20px;
  background: ${colors.white};
  border: 1px solid #efefef;
  box-shadow: ${shadows.default};
`;

/**
 * @function Button
 * @param  {String} className Pass through the classname to be able to extend the button style
 * @param  {String} children The label of the button
 * @param  {Func} onClick The passed through click event
 * @return {React:jsx} returns a react render;
 */
const Button = ({ className, children, onClick }) => {
  return (
    <StyledButton>
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  onClick: PropTypes.func
}

export default Button;