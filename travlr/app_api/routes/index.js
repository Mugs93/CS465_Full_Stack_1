const express = require("express");
const router = express.Router();

//This is where we import controllers we will route
const tripsController = require("../controllers/trips");

//Define route for our trips endpoint
router
    .route("/trips")
    .get(tripsController.tripsList) //GET method routers tripsList
    .post(tripsController.tripsAddTrip); //POST method adds a trip

//Get method routes tripsFindByCode - require parameter
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip); //Put method updates a trip

module.exports = router;