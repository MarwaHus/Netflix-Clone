//import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalMovie({handleShow,handleClose,show,modalData}) {
  
     return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalData.title}<br></br>{modalData.release_date}</Modal.Title>
          
        </Modal.Header>
        <Modal.Body>
          <img src={`${process.env.REACT_APP_IMAGE}${modalData.poster_path}`} alt={modalData.title} style={{width:"100%",height:"500px"}}/>
         {modalData.overview}
         </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add to Fav
          </Button>
        </Modal.Footer>
      </Modal></div>
  )
}

export default ModalMovie