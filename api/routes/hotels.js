
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getHotel,
  getHotelRooms,
  getHotels,
  updateHotel,
} from "../controllers/hotel.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

import express from "express";
import mongoose from "mongoose";
import Hotel from "file:///C:/Users/lavan/Documents/reactproject/api/models/Hotel.js";
import { createError } from "../utils/error.js";

const router = express.Router();
/*
//CREATE
router.post("/",createHotel);

//UPDATE

router.put("/:id", async (req, res) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedHotel);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete


router.delete("/:id", async (req, res) => {
  try {
    await Hotel.findByIdAndUpdate(req.params.id);
    res.status(200).json("hotel has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

//get

router.get("/:id", async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    res.status(500).json(err);
  }
});

//getall


router.get("/", async (req, res,next) => {
  //console.log("hii in a hotelroute");
   //next()
   //const failed=true
   //
   //if(failed)
   //{
    //return next(err)
    //return next(createError(401,"Youare not Authenticated"))
   //}

  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (err) {
    //res.status(500).json(err);
    next(err)
  }
});
**/



//CREATE
router.post("/", verifyAdmin, createHotel);

//UPDATE
router.put("/:id", verifyAdmin, updateHotel);
//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);
//GET

router.get("/find/:id", getHotel);
//GET ALL

router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);
export default router;