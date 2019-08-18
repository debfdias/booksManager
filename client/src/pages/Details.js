import React, { Component } from "react";
import API from "../utils/API";
import Title from "../components/Title";
import './style.css';


class Details extends Component {
    state = {
        book: {}
    }

    componentDidMount() {
        API.showFavorite(this.props.match.params.id)
            .then(res => this.setState({ book: res.data }))
            .catch(err => console.log(err))
    }
    render() {
        return (
          <div className="container">
            {/* <Navbar /> */}
            <Title />
            <h2 className="mt-0 mb-1 book-title">Editar livro </h2>
            
              <div className="row">
                <ul className="list-unstyled">
                      <li className="media my-4 rounded shadow p-2">
                        <img src={this.state.book.image} className="mr-3" alt="..." />
                        <div className="media-body">
                          <h5 className="mt-0 mb-1 book-title">{this.state.book.title} </h5>
                          <p className="overflow-auto description">Nota : {this.state.book.rating}</p>
                          <p className="overflow-auto description">Progresso : {this.state.book.progress}</p>
                          <p className="overflow-auto description">Crítica : {this.state.book.review}</p>
                        </div>
                      </li>
                    
                </ul>
              </div>
          </div>
        )
    }
}

export default Details;
