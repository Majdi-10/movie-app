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
               ImageUrl:"",
               movieLink:""
        }
    }

    // getting a equest from the frontend (user interfase)

    componentDidMount() {
        axios.get('/movies').then((res) => {
            this.setState({ movies: res.data })
            console.log(res.data)
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
                    <label>title : </label>
                    <input type="text" name="title" placeholder="Enter title here ..." onChange={this.handlechange.bind(this)} />
                    <label>genre : </label>
                    <input type="text" name="genre" placeholder="Enter genre here ..." onChange={this.handlechange.bind(this)} />
                    <label>imageUrl : </label>
                    <input type="text" name="imageUrl" placeholder="Enter imageUrl here" onChange={this.handlechange.bind(this)} />
                    <label>movieLink : </label>
                    <input type="text" name="movieLink" placeholder="Enter movieLink here" onChange={this.handlechange.bind(this)} />
                    <button onClick={this.createPost.bind(this)}>Add movie</button>
                </div>
                
                <Listmovies movies={this.state.movies} />
            </div>
        )
    }
}