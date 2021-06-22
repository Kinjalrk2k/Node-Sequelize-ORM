const express = require("express");
const expressHandlebars = require("express-handlebars");
const bodyparser = require("body-parser");
const path = require("path");

const db = require("./config/database");

// connecting database
db.authenticate()
  .then(() => console.log("Database connected successfully!"))
  .catch((err) => console.log("ERROR connecting database:", err));

const app = express();

app.get("/", (req, res) => {
  res.json({
    app: "CodeGig",
    tutor: "Brad Traversy",
    description: "Coder's job finding App",
    motive: "Learning Sequelize ORM with PostgreSQL in NodeJS",
  });
});

// gig routes
app.use("/gigs", require("./routes/gigs"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT} 🚀`));
