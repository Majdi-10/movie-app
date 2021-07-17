import React from 'react';
import axios from 'axios';
import Listmovies from './Listmovies.jsx';




export default class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            movies: [],
               title:"",
               genre:"",
               ImageUrl:""
        }
    }

    // getting a equest from the frontend (user interfase)

    componentDidMount() {
        axios.get('/movies').then((res) => {
            this.setState({ movies: res.data })
        });
    }

    // handlling the change so he can write and  insert new data

    handlechange(e) {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state)
    }

// post a request from the frontend (user interface)
    createPost() {
        axios.post("/addpost", this.state).then((data) => {
            this.componentDidMount()
        })
    }


    

    render() {
        return (
            <div>
                <div>
                    <label>title :</label>
                    <input type="text" name="title" onChange={this.handlechange.bind(this)} />
                    <label>genre :</label>
                    <input type="text" name="genre" onChange={this.handlechange.bind(this)} />
                    <label>imageUrl :</label>
                    <input type="text" name="imageUrl" onChange={this.handlechange.bind(this)} />
                    <button onClick={this.createPost.bind(this)}>Add movie</button>
                </div>
                <Listmovies movies={this.state.movies} />
            </div>
        )
    }
}