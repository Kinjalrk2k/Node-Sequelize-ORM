const router = require("express").Router();
const db = require("../config/database");
const Gig = require("../models/Gig");

// get gigs list
router.get("/", async (req, res) => {
  try {
    const gigs = await Gig.findAll({ raw: true }); // throw raw data to template
    // console.log(gigs);
    res.render("gigs", { gigs });
  } catch (err) {
    console.log(er);
  }
});

// add gig form
router.get("/add", (req, res) => {
  res.render("add");
});

// add a gig
router.post("/add", async (req, res) => {
  try {
    let { title, technologies, budget, description, contact_email } = req.body;

    // server side validations
    let errors = [];
    !title && errors.push({ text: "Please add a Title" });
    !technologies && errors.push({ text: "Please add some Technologies" });
    !description && errors.push({ text: "Please add a Description" });
    !contact_email && errors.push({ text: "Please add a Contact Email" });

    // check for errors
    if (errors.length > 0) {
      res.render("add", {
        errors,
        title,
        technologies,
        budget,
        description,
        contact_email,
      });
    } else {
      // cleaning the inputs
      if (!budget) {
        budget = "Unknown";
      } else {
        budget = `$ ${budget}`;
      }

      technologies = technologies.toLowerCase().replace(/, /g, ",");

      // insert into table
      await Gig.create({
        title,
        technologies,
        budget,
        description,
        contact_email,
      });

      res.redirect("/gigs");
    }
  } catch (err) {
    console.log(er);
  }
});

module.exports = router;
