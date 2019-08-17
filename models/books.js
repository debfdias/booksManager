var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    authors: Array,
    description: String,
    rating: String,
    review: String,
    progress: String,
    image: String,
    link: String,
    googleID: {
        type: String,
        unique: true
    },
});

let Books = mongoose.model("Books", BookSchema);

module.exports = Books;