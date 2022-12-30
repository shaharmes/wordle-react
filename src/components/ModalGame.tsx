import React, { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import { AppContext } from '../providers/AppContext';


export function ModalGame() {

  const {show, setShow, gameReset, gameResult} = useContext(AppContext);

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered={true}
        restoreFocus={true}
        onExited={gameReset}
        size="sm"
      >
        <Modal.Header id="modalH" closeButton >
            {/* <Modal.Title id="contained-modal-title-vcenter">
                You {gameResult.current}!
            </Modal.Title> */}
        </Modal.Header> 
        <Modal.Body id="modalB" style={{alignSelf:"center"}}>
          <h5 style={{fontSize:"30px"}}>You {gameResult.current}!</h5>
        </Modal.Body>
      </Modal>
    </>
  );
}
