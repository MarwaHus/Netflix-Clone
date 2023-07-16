import React,{useEffect, useState} from 'react'
//import Movie from '../Movie/Movie'
import MovieList from '../MovieList/MovieList';
function Home() {
  const [data,setData]= useState([]);
  async function gitAllMovies(){
  const url=`${process.env.REACT_APP_SERVER_URL}`;
  //console.log(url);
    const res=await fetch(`${url}/trending`);
    const movies=await res.json();
    setData(movies);
  }
  useEffect(()=>{
    gitAllMovies()
    console.log('',data);
  },[])
  return (
   /* <div>
      {data.map((obj,i)=>(
        <Movie data={obj} key={i}/>
      ))}
   
   </div>*/
   <div>
   <MovieList data={data} />
   </div>
  )
}

export default Home