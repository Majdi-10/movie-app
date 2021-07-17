import React from "react";
import Mymovies from "./Mymovies.jsx";


const Listmovies = (props) =>(
    <div>
<h1></h1>
   {props.movies.map((movie, index)=>(
    <Mymovies key={index} movie={movie}/>
))}
    </div>
)


export default Listmovies;