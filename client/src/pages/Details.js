import React, { Component } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar'
import API from "../utils/API";
import Title from "../components/Title";
import './style.css';


class Details extends Component {
    state = {
        book: {},
        rating: '',
        review: '',
        progress: '',
        date_init: '',
        editing: false
    }

    componentDidMount() {
        API.showFavorite(this.props.match.params.id)
            .then(res => this.setState({ book: res.data,
                                         rating: res.data.rating,
                                         review: res.data.review,
                                         progress: res.data.progress,
                                         date_init: res.data.date_init,
                                         editing: true
            }))
            .catch(err => console.log(err))
    }
    
    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    onChangeDate = date => {
        this.setState({ date });
    }

    onSubmit = async (e) => {
        e.preventDefault();
        
        const updatedBook = {
            rating: this.state.rating,
            review: this.state.review,
            progress: this.state.progress,
            date_init: this.state.date_init
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
                        <p className="overflow-auto description">{this.state.book.description}</p>

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
			Data de início
                            <input
                                type="text"
                                className="form-control"
				placeholder="Data de início"
                                onChange={this.onInputChange}
                                name="date"
                                value={this.state.date_init}/>
                        </div>

                        <div className="form-group">
                        <ProgressBar animated now= {this.state.progress}  label={`${this.state.progress}%`} /> 
                        </div>

                        <div className="form-group">
                        Crítica
                        <textarea className="form-control" name="review" placeholder="Sem crítica" value={this.state.review} onChange={this.onInputChange} cols={40} rows={10} required/>
                         
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
