const express = require("express");
const router = express.Router();

//This is where we import controllers we will route
const tripsController = require("../controllers/trips");

//Define route for our trips endpoint
router
    .route("/trips")
    .get(tripsController.tripsList); //GET method routers tripsList

//Get method routes tripsFindByCode - require parameter
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode);

module.exports = router;