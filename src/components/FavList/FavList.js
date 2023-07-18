import React,{useEffect, useState} from 'react'
import { Card,Button } from 'react-bootstrap';
function FavList() {
  const[favMovie,setFavMovie]=useState([]);


  async function handleFavMovie() {
    const url = `${process.env.REACT_APP_SERVER_URL}/getMovies`;
    let res = await fetch(url);
    let recivedData = await res.json();
    setFavMovie(recivedData);
  }
  async function handleDelete(id){
    const url = `${process.env.REACT_APP_SERVER_URL}/DELETE/${id}`;
    let res = await fetch(url, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      },
    });
    if(res.status === 204){
      alert('deleted successfuly')
    }
    handleFavMovie();
  }
  async function handleUpdate(newMovie) {
    const url = `${process.env.REACT_APP_SERVER_URL}/updateMovie/${newMovie.id}`;
    const res = await fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ comment: newMovie.comment })
    });
    if (res.status === 200) {
      const updatedMovies = favMovie.map((movie) => {
        if (movie._id === newMovie.id) {
          return { ...movie, comment: newMovie.comment };
        }
        return movie;
      });
      setFavMovie(updatedMovies);
    }
  }
  useEffect(()=>{
    handleFavMovie();
  },[])
  console.log(favMovie);
  return (
    <div>
      {favMovie.map((movie,id)=>(
     
              <Card style={{ width: "18rem" }}>
                <Card key={movie.id}/>
              <Card.Img variant="top" src={movie.image} />
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.overview}</Card.Text>
                <Card.Text>{movie.comment}</Card.Text>
                <Button variant="primary" onClick={() =>handleUpdate (movie)}>Update</Button>
                <Button variant="primary" onClick={()=> handleDelete(movie.id)}>Delete</Button>
              </Card.Body>
            </Card>
      ))}
    </div>
  )
}

export default FavList

