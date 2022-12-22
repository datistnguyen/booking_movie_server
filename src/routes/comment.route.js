const { Router } = require("express");
const { createComment, getAllComment, getDetailComment } = require("../controllers/comment.controller");

const route = Router();

route.post("/create", createComment);
route.get("/", getAllComment);
route.get("/detail/:id", getDetailComment)

module.exports = route;
