import axios from "axios";

export default {
  getFavorites() {
    return axios.get("/API/books")
  },
  saveFavorite(bookData) {
    return axios.post("/API/books", bookData)
  },
  deleteFavorite(bookId) {
    return axios.delete("/API/books/" + bookId)
  },
  editFavorite(bookId) {
    return axios.put("/API/books/" + bookId)
  },
  showFavorite(bookId) {
    return axios.get("/API/books/" + bookId)
  },
  searchGoogleBooks(bookQuery) {
    return axios.get("https://www.googleapis.com/books/v1/volumes", { params: { q: bookQuery } })
  }
};
