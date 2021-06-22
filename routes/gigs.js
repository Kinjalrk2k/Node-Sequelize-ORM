const router = require("express").Router();
const db = require("../config/database");
const Gig = require("../models/Gig");

router.get("/", async (req, res) => {
  try {
    const gigs = await Gig.findAll();
    console.log(gigs);
    res.send(gigs);
  } catch (err) {
    console.log(er);
  }
});

module.exports = router;
