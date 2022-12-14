const { Router } = require("express");
const {
  createBook,
  deteteBook,
  getAllBookByFilm,
  getAllBookByRoom,
  getAllBookById,
  getAllBook,
  booking,
  bookingTicket,
} = require("../controllers/book.controller");

const route = Router();

route.post("/create", createBook);
route.delete("/delete/:id", deteteBook);
route.get("/film/:id", getAllBookByFilm);
route.get("/room/:id", getAllBookByRoom);
route.get("/book/:id", getAllBookById);
route.get("/", getAllBook);
route.post("/checkout", booking)
route.get("/ticket/detail", bookingTicket)
module.exports = route;
