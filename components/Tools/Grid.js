// Base imports
import React, { useState } from 'react';

// Style imports
import styled from 'styled-components';
import { colors, shadows } from 'global/style/variables';
import { above, below, gridmargins, breakpoints, sitewidth } from 'global/style/breakpoint';

// Components
import { DebugButton } from 'global/style/extends/Debug';

// Styled components
const Container = styled.div`
  display: block;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9000;
  pointer-events: none;
`;

const Buttons = styled.div`
  display: flex;
  position: absolute;
  bottom: 20px;
  left: 20px;
  border-right: 1px solid black;

  p {
    font-size: 11px;
    font-weight: bolder;
    align-self: center;
    margin-right: 10px;
  }

  button {
    margin-right: 10px;
  }

  pointer-events: all;
`;

const LargeWrapper = styled.div`
  display: block;
  background: rgba(0, 255, 0, 0.1);
  height: 100vh;
  width: 100%;
  max-width: ${sitewidth.lg};
  margin: 0 auto;
  padding: 0 ${gridmargins.sm};

  ${above.sm`
    padding: 0 ${gridmargins.md};
  `}

  ${above.md`
    padding: 0 ${gridmargins.lg};
  `}

  pointer-events: none;
`;

const LargeContainer = styled.div`
  display: block;
  background: rgba(255, 0, 0, 0.1);
  height: 100vh;
  width: 100%;
  pointer-events: none;
`;

const SmallWrapper = styled.div`
  display: block;
  background: rgba(0, 255, 0, 0.1);
  height: 100vh;
  width: 100%;
  max-width: ${sitewidth.sm};
  margin: 0 auto;
  padding: 0 ${gridmargins.sm};

  ${above.sm`
    padding: 0 ${gridmargins.md};
  `}

  ${above.md`
    padding: 0 ${gridmargins.lg};
  `}

  pointer-events: none;
`;

const SmallContainer = styled.div`
  display: block;
  background: rgba(255, 0, 0, 0.1);
  height: 100vh;
  width: 100%;
  pointer-events: none;
`;

/**
 *
 *
 */
const Grid = () => {

  const [state, setState] = useState('none');

  return (
    <Container>
      {state === 'large' && (
        <LargeWrapper>
          <LargeContainer />
        </LargeWrapper>
      )}
      {state === 'small' && (
        <SmallWrapper>
          <SmallContainer />
        </SmallWrapper>
      )}
      <Buttons>
        <p>GRID:</p>
        <DebugButton onClick={e => { setState('none'); }}>NONE</DebugButton>
        <DebugButton onClick={e => { setState('large'); }}>LARGE</DebugButton>
        <DebugButton onClick={e => { setState('small'); }}>SMALL</DebugButton>
      </Buttons>
    </Container>
  );
};

export default Grid;
