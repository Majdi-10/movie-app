import React from "react";
import Mymovies from "./Mymovies.jsx";




// passing Mymovies component props to listmovies since its not q class but functional so we can  map through the movies array
// we need to import it the component Mymovies to be define here 

const Listmovies = (props) => (
    <div>
        {props.movies.map((movie, index) => (
            <Mymovies key={index} movie={movie} />
        ))}
    </div>
)

// we export the Listmovies component so we can import it in other component and for the app component 

export default Listmovies;