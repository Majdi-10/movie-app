import axios from "axios";
import React from "react";



class Mymovies extends React.Component {

    constructor(props){
        super(props)
        this.state={
           movie:[],
            title:"",
            genre:"",
            imageUrl:""
        }

        this.deleteMovie = this.deleteMovie.bind(this);
        this.updateMovie = this.updateMovie.bind(this)
    }

 // handle the change of the input title so the user can write and update the data of the title

    handlechnge1(e){
        this.setState({title: e.target.value})
        console.log(this.state)
    }

    // handle the change of the input genre so the user can write and update the data of the genre

    handlechnge2(e){
        this.setState({genre:e.target.value})
        console.log(this.state)
    }

    // handle the change of the input imageUrl so the user can write and update the data of the imageUrl

    handlechnge3(e){
        this.setState({imageUrl:e.target.value})
        console.log(this.state)
    }

    // delete request from the front end (user interface)

    deleteMovie(id){
        axios.delete("/deletpost/" + id).then((response)=>{
            location.reload()
        })
    }

    // an edit request from the front end (user interface)

    updateMovie(id){
        axios.put("/update/"+ id, {title:this.state.title, genre:this.state.genre, imageUrl:this.state.imageUrl}).then((response)=>{
            location.reload()
        })
    }

    render(){
        return(
        <div>
            <div>
                <label>title :</label>
                <input type="text" name="title" onChange={this.handlechnge1.bind(this)} />
                <label>genre :</label>
                <input type="text" name="genre" onChange={this.handlechnge2.bind(this)} />
                <label>imageUrl</label>
                <input type="text" name="imageUrl" onChange={this.handlechnge3.bind(this)} />
                <button onClick={()=>{this.deleteMovie(this.props.movie._id)}}>Delete</button>
                <button onClick={()=>{this.updateMovie(this.props.movie._id)}}>Edit</button>
            </div>
            <br />
           <img src={this.props.movie.imageUrl}/>
           <h2>{this.props.movie.title}</h2>
           <h3>{this.props.movie.genre}</h3>
        </div>
    )
   }
}




export default  Mymovies;