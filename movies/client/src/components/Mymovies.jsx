import axios from "axios";
import React from "react";



class Mymovies extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            movie: [],
            title: "",
            genre: "",
            imageUrl: "",
            movieLink: ""
        }

        this.deleteMovie = this.deleteMovie.bind(this);
        this.updateMovie = this.updateMovie.bind(this)
    }

    // handle the change of the input title so the user can write and update the data of the title

    handlechnge1(e) {
        this.setState({ title: e.target.value })
        console.log(this.state)
    }

    // handle the change of the input genre so the user can write and update the data of the genre

    handlechnge2(e) {
        this.setState({ genre: e.target.value })
        console.log(this.state)
    }

    // handle the change of the input imageUrl so the user can write and update the data of the imageUrl

    handlechnge3(e) {
        this.setState({ imageUrl: e.target.value })
        console.log(this.state)
    }

    // handle the change of the input movieLink so the user can write and update the data of the movieLink

    handlechnge4(e) {
        this.setState({ movieLink: e.target.value })
        console.log(this.state)
    }


    // delete request from the front end (user interface)

    deleteMovie(id) {
        axios.delete("/deletpost/" + id).then((response) => {
            location.reload()
        })
    }

    // an edit request from the front end (user interface)

    updateMovie(id) {
        axios.put("/update/" + id, { title: this.state.title, genre: this.state.genre, imageUrl: this.state.imageUrl, movieLink: this.state.movieLink }).then((response) => {
            location.reload()
        })
    }

    render() {
        return (
            <div>
                <div>
                    <br />
                    <label>title : </label>
                    <input type="text" name="title" placeholder="new title here ..." onChange={this.handlechnge1.bind(this)} />
                    <label>genre : </label>
                    <input type="text" name="genre" placeholder="new genre here ..." onChange={this.handlechnge2.bind(this)} />
                    <label>imageUrl : </label>
                    <input type="text" name="imageUrl" placeholder="new imageUrl here" onChange={this.handlechnge3.bind(this)} />
                    <label>movieLink : </label>
                    <input type="text" name="movieLink" placeholder="new movieLink here" onChange={this.handlechnge4.bind(this)} />
                    <button onClick={() => { this.deleteMovie(this.props.movie._id) }}>Delete</button>
                    <button onClick={() => { this.updateMovie(this.props.movie._id) }}>Edit</button>
                </div>
                <br />
                <div>
                    <img src={this.props.movie.imageUrl} />
                    <div>
                        <h2>{this.props.movie.title}</h2>
                        <h3>{this.props.movie.genre}</h3>
                        <a href={this.props.movie.movieLink}>watch here</a>
                    </div>
                </div>
            </div>
        )
    }
}



// we export the Mymovies component so we can import it in other component and for the app component 

export default Mymovies;