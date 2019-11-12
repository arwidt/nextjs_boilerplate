
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

// Store
import Store from 'global/store/Store';
import { wantedDiffKeys } from '@arwidt/fluxtools';

// Hooks
import useStoreConnection from 'global/hooks/useStoreConnection';
import useBodyClass from 'global/hooks/useBodyClass';

// Styles
import Styles from 'global/style/global_styles';
import styled from 'styled-components';
import { above, breakpoints, gridmargins } from 'global/style/breakpoint';
import { colors } from 'global/style/variables';

// Grid
import { GridLargeWrapper, GridSmallWrapper } from 'global/style/extends/Grid';

// Tools
import Grid from 'components/Tools/Grid';

// Modal
import ModalContainer from 'components/Modals/ModalContainer';

const Container = styled.div`
  display: block;
  position: relative;
  width: 100%;
  padding-top: 350px;
  overflow: hidden;
`;

const LargeWrapper = styled.main`
  ${GridLargeWrapper};
  position: relative;
  z-index: 1;
  min-height: calc(100vh - 700px);
`;

const SmallWrapper = styled.main`
  ${GridSmallWrapper};
  position: relative;
  z-index: 1;
  min-height: calc(100vh - 700px);
`;

const getWrapper = (size) => {
  switch(size) {
    case 'sm':
      return SmallWrapper;
    case 'lg':
    default:
      return LargeWrapper;
  }
}

const DefaultLayout = ({ children, title, gridSize }) => {

  const [globalLoading, setGlobalLoading] = useState(Store.getState.loading);
  const [setBodyClass, removeBodyClass] = useBodyClass(['no-scroll']);

  const Wrapper = getWrapper(gridSize);

  const [sendStoreAction] = useStoreConnection((diff, state) => {
    if (wantedDiffKeys(diff, ['loading', 'modalState'])) {

      if (wantedDiffKeys(diff, ['loading'])) {
        setGlobalLoading(state.loading);
      }

      if (state.loading || state.modalState === 'visible') {
        setBodyClass(['no-scroll']);
      } else {
        removeBodyClass(['no-scroll']);
      }
    }
  });

  return (
    <>
      <Styles/>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Container>
        <Wrapper>
          { children }
        </Wrapper>
      </Container>
      <ModalContainer></ModalContainer>
      <Grid />
    </>
  );
}

DefaultLayout.defaultProps = {
  title: '[DEFAULT TITLE]',
  gridSize: 'lg'
}

DefaultLayout.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
  gridSize: PropTypes.oneOf(['sm', 'lg'])
}

export default DefaultLayout;
