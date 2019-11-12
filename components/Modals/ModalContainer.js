import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Store
import Store from 'global/store/Store';
import Actions from 'global/store/Actions';
import { wantedDiffKeys } from '@arwidt/fluxtools';

// Hooks
import useStoreConnection from 'global/hooks/useStoreConnection';

// Style imports
import styled from 'styled-components';
import { Transition } from 'react-transition-group';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  z-index: 1000;

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: opacity .25s ease;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
  }

  .modal {
    transition: all .25s ease;
    opacity: 0;
    display: block;
    position: absolute;
    top: calc(50% - 30px);
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 10;
  }

  ${({state}) => {
    switch (state) {
      case 'entering':
        return `
          display: flex;
        `;
      case 'entered':
        return `
          display: flex;
          &:before {
            opacity: 1;
          }
          .modal {
            opacity: 1;
            top: 50%;
          }
          .clickarea {
            opacity: 1;
          }
        `;
      case 'exiting':
        return `
          display: flex;
          &:before {
            opacity: 0;
          }
          .modal {
            opacity: 0;
            top: calc(50% - 30px);
          }
          .clickarea {
            opacity: 0;
          }
        `;
      case 'exited':
        return `
          display: none;
        `;
    }
  }}

`;

const ClickArea = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 0;
  opacity: 0;
`;

/**
 *
 */
const ModalContainer = function() {

  const [modalState, setModalState] = useState(Store.getState.modalState);
  const [animate, setAnimate] = useState(false);

  const [sendStoreAction] = useStoreConnection((diff, state) => {
    if (!wantedDiffKeys(diff, ['modalState'])) return; // GUARD
    setModalState(state.modalState);
    setAnimate(state.modalState === "visible" ? true : false);
  });

  const handleClickAreaClick = () => {
    sendStoreAction(Actions.SET_MODAL_STATE, 'hidden');
  }

  return (
    <Transition in={animate} timeout={250}>
      {(state) => {
        return (
          <Container id="modal-root" state={state}>
            {modalState === 'visible' && <ClickArea className="clickarea" onClick={handleClickAreaClick} />}
          </Container>
        );

      }}
    </Transition>
  );
}

ModalContainer.defaultProps = {
}

ModalContainer.propTypes = {
}

export default ModalContainer;
