import React, { Component } from "react";
import { Link } from 'react-router-dom';
import API from "../utils/API";
import Title from "../components/Title";
import DeleteBtn from "../components/DeleteBtn";
import ViewBtn from "../components/ViewBtn";
import './style.css';

class Favorites extends Component {
  state = {
    books: [],
    search: ""
  }

  componentDidMount() {
    this.favList();
  }

  favList = () => {
    API.getFavorites()
      .then(res => {
        console.log(res.data);
        if (res.data !== undefined) {
          this.setState({ books: res.data })
        }
      })
      .catch(err => console.log(err));
  }

  deleteFavorite = id => {
    console.log("DELETE ID: ", id);
    API.deleteFavorite(id)
      .then(() => {
        this.favList();
      })
  }

  editFavorite = id => {
    API.showFavorite(id)
      .then(() => {
        this.favList();
      })
  }

  render() {
    return (
      <div className="container">
        {/* <Navbar /> */}
        <Title />
        <h2 className="mt-0 mb-1 book-title">Livros favoritos</h2>
        {this.state.books.length ? (
          <div className="row">
            <ul className="list-unstyled">
              {this.state.books.map(book => {
                return (
                  <li className="media my-4 rounded shadow p-2">
                    <img src={book.image} className="mr-3" alt="..." />
                    <div className="media-body">
                      <h5 className="mt-0 mb-1 book-title">{book.title}</h5>
                      <p className="overflow-auto description">Nota : {book.rating}</p>
                      <p className="overflow-auto description">Progresso : {book.progress}</p>
                      <p className="overflow-auto description">Crítica : {book.review}</p>
                      <ViewBtn bookLink={book.link} /> {" "}
                      <Link to={`/edit/${book._id}`} class="btn btn-success">Editar</Link>&nbsp;
                      <DeleteBtn onClick={() => this.deleteFavorite(book._id)} />
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        ) : (
            <div className="text-center">
              <h3>Lista vazia!</h3><br />
              <h4>Navegue até <a href="/Search">pesquisa</a> e adicione seus livro favoritos!</h4>
            </div>
          )}
      </div>
    );
  }
}

export default Favorites;
