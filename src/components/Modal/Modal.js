import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import OrderForm from '../OrderForm';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: calc(100vh - 50px);
  max-width: calc(100vw - 100px);
  padding: 12px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

export default function Modal({ onClose }) {
  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const onBackdropClick = evt => {
    if (evt.currentTarget === evt.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={onBackdropClick}>
      <ModalWindow>
        <OrderForm />
      </ModalWindow>
    </Overlay>,
    modalRoot,
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
