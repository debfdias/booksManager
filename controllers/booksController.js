var mongoose = require("mongoose");

const db = require("../models");

module.exports = {
    // 'api/books' GET
    findAll(req, res) {
        db.Books.find({})
            .then(dbBooks => res.json(dbBooks))
            .catch(err => res.status(422).json(err));
    },

    // 'api/books' POST
    saveFavorite(req, res) {
        db.Books.create(req.body)
            .then(dbBook => res.json(dbBook))
            .catch(err => {
                console.log(err);
                res.json(err);
            });
    },

    // 'api/books/:id' PUT
    editFavorite(req, res) {
        db.Books.findByIdAndUpdate(req.params.id, req.body)
            .then(dbBook => res.json(dbBook))
            .catch(err => {
                console.log(err);
                res.json(err);
            });
    },

    // 'api/books/:id' GET
    showFavorite(req, res) {
        db.Books.findById(req.params.id)
            .then(dbBook => res.json(dbBook))
            .catch(err => {
                console.log(err);
                res.json(err);
            });
    },

    // 'api/books/:id' DELETE
    deleteFavorite(req, res) {
        db.Books.findById(req.params.id)
            .then(dbBook => dbBook.remove())
            .then(dbBook => res.json(dbBook))
            .catch(err => {
                console.log(err);
                res.json(err);
            });
    }
};