import React, { Component } from "react";
import API from "../utils/API";
import Title from "../components/Title";
import './style.css';


class Details extends Component {
    state = {
        book: {},
        rating: '',
        review: '',
        progress: '',
        editing: false
    }

    componentDidMount() {
        API.showFavorite(this.props.match.params.id)
            .then(res => this.setState({ book: res.data,
                                         rating: res.data.rating,
                                         review: res.data.review,
                                         progress: res.data.progress,
                                         editing: true
            }))
            .catch(err => console.log(err))
    }
    
    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = async (e) => {
        e.preventDefault();
        
        const updatedBook = {
            rating: this.state.rating,
            review: this.state.review,
            progress: this.state.progress
        };     

        API.editFavorite(this.props.match.params.id, updatedBook)
            .catch(err => console.log(err))

        window.location.href = '/Favorites';        

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

                          <form onSubmit={this.onSubmit}>
                          <div className="form-group">
                          Nota
                          <input
                                type="text"
                                className="form-control"
                                placeholder="Sem nota"
                                onChange={this.onInputChange}
                                name="rating"
                                value={this.state.rating}
                                required />
                           </div>

                          <div className="form-group">
                          Progresso em %
                          <input
                                type="text"
                                className="form-control"
                                placeholder="0%"
                                onChange={this.onInputChange}
                                name="progress"
                                value={this.state.progress}
                                required />
                        </div>

                        <div className="form-group">
                        Crítica
                          <input
                                type="text"
                                className="form-control"
                                placeholder="Sem crítica"
                                onChange={this.onInputChange}
                                name="review"
                                value={this.state.review}
                                required />
                        </div>
                        <button className="btn btn-primary">
                            Salvar
                        </button>
                        </form>

                        </div>
                        
                      </li>
                    
                </ul>
              </div>
          </div>
        )
    }
}

export default Details;
