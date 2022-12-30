import React, { useContext } from 'react';
import { ModalHeader } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { NavContext } from '../providers/NavContext';
import { SignIn } from './SignIn';

export function ModalLogin() {
  const {showLogin, handleCloseLogin} = useContext(NavContext);
  
  return (
    <>
      <Modal
        show={showLogin}
        onHide={handleCloseLogin}
        backdrop="static"
        keyboard={false}
        centered={true}
        restoreFocus={true}
        contentClassName="modalLogin"
      >
        <ModalHeader id="modalH" closeButton></ModalHeader>
        <SignIn />
      </Modal>
    </>
  );
}