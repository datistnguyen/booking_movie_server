const { Router } = require("express");
const { createComment, getAllComment } = require("../controllers/comment.controller");

const route = Router();

route.post("/create", createComment);
route.get("/", getAllComment);

module.exports = route;
