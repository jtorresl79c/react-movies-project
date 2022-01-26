import React, { Component } from 'react';
import movies from './movies'

export default class App extends Component {
    constructor(){
        super()
        this.state = {
            movies
        }
    }

    render() {

        const movies = this.state.movies

        



        return (
            <div className="container">
                
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr>
                            <td>Mark</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr> */}
                        {movies.map( movie => <p key={movie._id}>Hola mundo</p> )}
                    </tbody>

                </table>

            </div>
        )
    }
}
