const { Router } = require("express");
const { ROLE } = require("../constanis");
const {
  getAllPlayTime,
  createPlayTime,
  updatePlayTime,
  getDetailPlayTimeByCluster
} = require("../controllers/playTime.controller");

const authorize = require("../middlewares/auth.middleware");

const route = Router();

route.get("/", getAllPlayTime);
route.post("/create", createPlayTime);
route.patch("/update/:id", updatePlayTime);
route.get("/detail/playtimes/:cinemaId", getDetailPlayTimeByCluster)

module.exports = route;
