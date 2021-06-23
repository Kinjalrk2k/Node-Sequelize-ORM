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
    const data = {
      title: "Simple Wordpress Website",
      technologies: "wordpress,php,html,css",
      budget: "$1000",
      description:
        "Rump cupim pastrami bacon sirloin swine corned beef andouille ribeye tongue beef buffalo turducken pig. Shankle pastrami corned beef ham hock kielbasa. Sirloin picanha buffalo biltong pork strip steak shank turducken short loin cow. Pig short loin jerky, leberkas chuck swine brisket venison doner.",
      contact_email: "user2@gmail.com",
    };

    let { title, technologies, budget, description, contact_email } = data;

    // insert into table
    await Gig.create({
      title,
      technologies,
      budget,
      description,
      contact_email,
    });

    res.redirect("/gigs");
  } catch (err) {
    console.log(er);
  }
});

module.exports = router;
