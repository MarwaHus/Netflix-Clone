import React from 'react';
import Movie from '../Movie/Movie';
import './MovieList.css'
function MovieList({ data }) {
  return (
    <div className='list'
    style={{
      marginTop: "30px",
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-around',
      gap: "18px",
    }}>
      {data.map((obj, i) => (
        <Movie data={obj} key={i}/>
      ))}
    </div>
  );
}

export default MovieList;