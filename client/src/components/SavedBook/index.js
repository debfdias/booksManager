import React, { Component } from "react";
import "./style.css";

class Book extends Component {
  render() {
    return (
      <li className="media my-4">
        <img src={this.props.book.image} className="mr-3" alt="..." />
        <div className="media-body">
          <h5 className="mt-0 mb-1">{this.props.book.title}</h5>
          <p>{this.props.book.description}</p>
          <a className="btn btn-primary" href={this.props.book.link}>View</a> {" "}
          <a className="btn btn-primary text-light">Save</a>
        </div>
      </li>


    );

  }
}

export default Book;
