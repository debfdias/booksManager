import React, { Component } from "react";
import API from "../utils/API";


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
            <div> 
                <h1>{this.state.book.title} </h1>
                <p>{this.state.book.description}</p>
                <p>{this.state.book.rating}</p>
                <p>{this.state.book.review}</p>
                <p>{this.state.book.progress}</p>
            </div>
        )
    }
}

export default Details;
