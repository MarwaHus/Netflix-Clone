import { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';

function ModalMovie({ handleShow, handleClose, show, modalData, commentHandler }) {
const [comment, setComment] = useState('');
const commentRef = useRef();
function handleSubmit(e) {
  e.preventDefault();
  const userComment = commentRef.current.value
  console.log("modaldata", modalData);
  const newMovie = { ...modalData, userComment };
  console.log(newMovie);
  setComment(userComment)
  commentHandler(newMovie, newMovie.id)
  console.log(comment);
}

async function handleAddFav(e) {
  e.preventDefault();
  let url = `${process.env.REACT_APP_SERVER_URL}/addMovie`;
  console.log(url);
  let data = {
    t: modalData.title,
    o: modalData.overview,
    c: modalData.comment
  }
  console.log(data);

  let res = await fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
})
  let recivedData = await res.json();
  console.log('recivedData', recivedData);
  if(res.status === 201){
    alert('added successfully')
  }
}
return (
  <div>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{modalData.title}<br></br>{modalData.release_date}</Modal.Title>

      </Modal.Header>
      <Modal.Body>
        <img src={`${process.env.REACT_APP_IMAGE}${modalData.poster_path}`} alt={modalData.title} style={{ width: "100%", height: "500px" }} />
        {modalData.overview}

        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label></Form.Label>
            Comment<Form.Control ref={commentRef} type="text" placeholder="Add new comment" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button variant="primary" onClick={(e) => handleAddFav(e)}>
            Add to Fav
          </Button>
        </Form>
        {modalData.comment ? modalData.comment : 'no comment added'}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          save
        </Button>

      </Modal.Footer>
    </Modal></div>
)
}

export default ModalMovie