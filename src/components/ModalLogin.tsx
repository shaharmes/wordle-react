import React, { useContext } from 'react';
import { ModalHeader } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { SignIn } from '../pages/SignIn';
import { NavContext } from '../providers/NavContext';

export function ModalLogin() {
  const {showLogin, setShowLogin} = useContext(NavContext);
  const handleClose = () => setShowLogin(false);
  

  return (
    <>
      <Modal
        show={showLogin}
        onHide={handleClose}
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