const { Router } = require("express");
const { getAllDiscount, updateDiscount, detailDiscount, createDiscount } = require("../controllers/discount.controller");

const route = Router();

route.get("/", getAllDiscount)
route.get("/update/:id", updateDiscount)
route.get("/detail/:id", detailDiscount)
route.post("/create", createDiscount)

module.exports= route