const express = require("express");
const router = express.Router();

const tripsController = require("../controllers/trips");

router
    .route("/trips")
    .get(tripsController.tripsList) // GET Method routes tripList
    .post(tripsController.tripsAddTrip); // POST Method adds a Trip
router
    .route("/trips/:tripCode")
    .get(tripsController.tripsFindByCode) // GET method routes tripsFindByCode - requires parameter
    .put(tripsController.tripsUpdateTrip);

module.exports = router;
