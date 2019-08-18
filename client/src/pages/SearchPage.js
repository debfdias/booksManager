import React, { Component } from "react";
import API from "../utils/API";
import Search from "../components/Search";
import Title from "../components/Title";
import SaveBtn from '../components/SaveBtn';
import './style.css';

class SearchPage extends Component {
  state = {
    books: [],
    search: ''
  }

  saveBook = (id) => {
    const book = { ...this.state };
    this.props.saveBook({book})
  }

  googleSearch = (query) => {
    if (query) {
      API.searchGoogleBooks(query)
        .then(res => {
          const books = res.data.items.map(item => {
            let obj = Object.assign({}, item);
            obj.isSaved = false;
            return obj
          })
          console.log(books);
          this.setState({ books });
        })
        .catch(err => console.log(err));
    }
  }

  saveBook = (book) => {
    console.log("salvando...\n", book);
    const bookData = {
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      rating: '-',
      review:' ',
      progress:'0%',
      image: book.volumeInfo.imageLinks.smallThumbnail,
      link: book.volumeInfo.infoLink,
      googleID: book.id
    }
    API.saveFavorite(bookData)
      .catch(err => console.log(err));
  }

  handleSearchChange = (event) => {
    this.setState({ 
      search: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.googleSearch(this.state.search)
  }

 changeHandler = event => {
    this.setState({
      nota: event.target.value
    });
  }

  render() {
    return (
      <div className="container">
        <Title />
        <Search handleSubmit={this.handleSubmit} handleSearchChange={this.handleSearchChange} />
        {this.state.books.length ? (
          <div className="row">
            <ul className="list-unstyled">
              {this.state.books.map(book => {
                return (
                  <li className="media my-4 rounded shadow p-2" key={book.id}>
                    <img src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : ""} className="mr-3" alt="..." />
                    <div className="media-body">
                      <h5 className="mt-0 mb-1">{book.volumeInfo.title} <span className="font-italic">por {book.volumeInfo.authors.join(", ")}</span></h5>
                      <p className="overflow-auto description">{book.volumeInfo.description}</p><a className="btn btn-primary" target="_blank" rel="noopener noreferrer" href={book.volumeInfo.infoLink}>Ver Reviews</a> {" "}
                      <SaveBtn key="book.id" book={book} savebook={this.saveBook} />

                    </div>
                  </li>
                )
              })}

            </ul>
          </div>
        ) : (
            <div className="text-center">
              <h3>Nada encontrado!</h3>
              <h4>Digite um título, autor ou gênero (:</h4>
            </div>
          )
        }
      </div>
    );
  }
}

export default SearchPage;
