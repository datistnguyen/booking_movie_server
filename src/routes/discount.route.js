const { Router } = require("express");
const { getAllDiscount, updateDiscount, detailDiscount } = require("../controllers/discount.controller");

const route = Router();

route.get("/", getAllDiscount)
route.get("/update/:id", updateDiscount)
route.get("/detail/:id", detailDiscount)

module.exports= route