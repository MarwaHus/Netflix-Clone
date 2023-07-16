import React, { useState } from 'react';
//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModalMovie from '../ModalMovie/ModalMovie';
import './Movie.css';

function Movie(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="movie">
      <Card
        style={{ width: '20rem', height: '500px',borderColor:"#252525"}}
        onClick={handleShow}
      >
        <Card.Img variant="top" src={`${process.env.REACT_APP_IMAGE}${props.data.poster_path}`} />
       
      </Card>
      <ModalMovie modalData={props.data} handleClose={handleClose} handleShow={handleShow} show={show} />
    </div>
  );
}

export default Movie;