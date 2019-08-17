const router = require('express').Router();
const booksController = require("../../controllers/booksController");

router.route('/')
    .get(booksController.findAll)
    .post(booksController.saveFavorite);

router.route('/:id')
	.get(booksController.showFavorite)
	.put(booksController.editFavorite)
    .delete(booksController.deleteFavorite);

module.exports = router;

