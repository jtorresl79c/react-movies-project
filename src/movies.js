import React, { Component } from 'react';
import { getMovies } from './services'

export default class Movies extends Component {

    constructor(){
        super()
        this.state = {
            movies: getMovies()
        }
        // this.handleDeleteMovie = this.handleDeleteMovie.bind(this)
        this.getMovieElement = this.getMovieElement.bind(this)
    }

    handleDeleteMovie(id){
        const movies = this.state.movies.filter( movie => movie._id !== id)
        this.setState({movies})
    }

    getMovieElement(){
        const movies = this.state.movies
        if(this.state.movies.length !== 0){
            return (
                movies.map( movie => 
                    (
                        <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td>
                                <button className='btn btn-danger' onClick={ this.handleDeleteMovie.bind(this,movie._id) }>Delete</button>
                            </td>
                        </tr>
                    )
                )
            )
        }else{
            return null
        }
    }

    render() {
        
        return (
            <div>
                <p>{this.state.movies.length} lefts</p>
                <table className={ "table table-bordered " + (this.state.movies.length === 0 ? "d-none" : "") }>
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Rate</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.getMovieElement()}
                    </tbody>

                </table>
            </div>
        );
    }
}
