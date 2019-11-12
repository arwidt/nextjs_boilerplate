// Base imports
import React from 'react';
import PropTypes from 'prop-types'

// Store
import { sendStoreAction } from 'global/hooks/useStoreConnection';
import Actions from 'global/store/Actions';


// Style imports
import styled from 'styled-components';
import { colors, shadows } from 'global/style/variables';
import { above, below, gridmargins, breakpoints, sitewidth } from 'global/style/breakpoint';

// Styled components
const Container = styled.div`
  display: block;
  width: calc(100% - 40px);
  background: white;
  margin: 20px;
  padding: 20px;
  button {
    margin: 10px;
  }
`;

const EmojiButton = styled.button`
  background: white;
  border-radius: 10px;
  box-shadow: ${shadows.default};
  padding: 20px;
  font-size: 3rem;
  border: 1px solid #efefef;
`;

/**
 * IncrementTool
 *
 */
const IncrementTool = () => {
  return (
    <Container>
      <EmojiButton onClick={() => { sendStoreAction(Actions.SET_INCREMENT_SUBTRACT); }}>👎🏼</EmojiButton>
      <EmojiButton onClick={() => { sendStoreAction(Actions.SET_INCREMENT_ADD); }}>👍🏼</EmojiButton>
    </Container>
  );
};

// Proptypes
// IncrementTool.propTypes = {}

export default IncrementTool;