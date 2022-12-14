const expressAsyncHandler = require("express-async-handler");
const connection = require("../db/init");
const Cinema = require("../models/Cinema.model");
// const { associations } = require("../models/rom.model");
const Room = require("../models/rom.model");

const createRoom = expressAsyncHandler(async (req, res) => {
  try {
    const data = await Room.create(req.body);
    return res.json(data);
  } catch (error) {
    return res.status(404).json(error.message);
  }
});

const getAllRoomByCinema = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Room.findAll({ where: { cinemaId: id } });
    return res.json(data);
  } catch (error) {
    return res.status(404).json(error.message);
  }
});

const getAllRoom = expressAsyncHandler(async (req, res) => {
  try {
    const data = await Room.findAll({ include: Cinema });
    return res.json(data);
  } catch (error) {
    return res.status(404).json(error.message);
  }
});

const deleteRoom = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Room.destroy({ where: { id } });
    return res.json(data);
  } catch (error) {
    return res.status(404).json(error.message);
  }
});

const getRoomByCinema= expressAsyncHandler(async (req, res)=> {
  try {
    const {idCinema}= req.params
    const [rows]= await connection.execute("SELECT rooms.id, rooms.seat, rooms.seated, rooms.address, rooms.RoomName FROM rooms INNER JOIN cinemas ON rooms.cinemaId = cinemas.id WHERE rooms.cinemaId= ?", [idCinema])
    const roomChosen= rows?.find(item=> parseInt(item?.seated) < parseInt(item?.seat))
    const [seated]= await connection.execute("SELECT seatIndex FROM books WHERE id_room= ?", [roomChosen?.id])
    return res.status(200).json({roomChosen: roomChosen, seated: seated})
  } catch (error) {
    return res.status(404).json(error.message)
    
  }
})
module.exports = {
  createRoom,
  deleteRoom,
  getAllRoomByCinema,
  getAllRoom,
  getRoomByCinema
};
