// Base imports
import React, { useState } from 'react';
import PropTypes from 'prop-types'

// Store
import Store from 'global/store/Store';
import { wantedDiffKeys } from '@arwidt/fluxtools';

// Hooks
import useStoreConnection from 'global/hooks/useStoreConnection';

// Style imports
import styled from 'styled-components';
import { colors, shadows } from 'global/style/variables';
import { above, below, gridmargins, breakpoints, sitewidth } from 'global/style/breakpoint';

// Styled components
const Container = styled.div`
  margin-top: 30px;
  display: block;
  background: white;
  border-radius: 20px;
  padding: 100px;
  box-shadow: ${shadows.default};
  font-size: 10rem;
  border: 1px solid #efefef;
`;

/**
 * IncrementVisual
 *
 * @param {Object} 
 */
const IncrementVisual = () => {

  const [increment, setIncrement] = useState(Store.getState.increment);

  const [sendStoreAction] = useStoreConnection((diff, state) => {
    if (wantedDiffKeys(diff, ['increment'])) {
      setIncrement(state.increment);
    }
  });

  return (
    <Container>
      {increment}
    </Container>
  );
};

// Proptypes
IncrementVisual.propTypes = {}

export default IncrementVisual;