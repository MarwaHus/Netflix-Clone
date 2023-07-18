import React from 'react';
import Movie from '../Movie/Movie';
import './MovieList.css'
function MovieList({ data }) {

  
  function commentHandler(newMovie,id){
console.log(newMovie,id ,'from movelist');
data.map((movie)=>{
  if(movie.id ===id){
movie.comment=newMovie.userComment;
return movie;
  }else{
return movie;
  }

})
console.log('comment handler',data);
  }
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
        <Movie commentHandler={commentHandler} data={obj} key={i}/>
      ))}
    </div>
  );
}

export default MovieList;