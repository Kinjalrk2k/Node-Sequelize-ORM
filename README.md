# Node Sequelize ORM

- Learning Sequelize ORM with PostgreSQL in NodeJS backend
- Tutorial by Brad Traversy (Traversy Media)
  - Part 1: [Build a Node.js App With Sequelize [1] - Connection & Model](https://www.youtube.com/watch?v=bOHysWYMZM0)
  - Part 2: [Build a Node.js App With Sequelize [2] - UI & Handlebars](https://www.youtube.com/watch?v=67OhLlFPqFQ)
  - Part 3: [Build a Node.js App With Sequelize [3] - Add & Search](https://www.youtube.com/watch?v=6jbrWF3BWM0)

## Configuring database

_./config/database.js_

```js
const { Sequelize } = require("sequelize");

// OPTION 1
module.exports = new Sequelize("database-name", "username", "password", {
  host: "localhost",
  dialect: "postgres", // using postgreSQL

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

// OPTION 2
module.exports = new Sequelize("database-connection-uri");
```

## Testing Database connection

_./app.js_

```js
db.authenticate()
  .then(() => console.log("Database connected successfully!"))
  .catch((err) => console.log("ERROR connecting database:", err));
```

## Creating Models

_./models/Gig.js_

```js
const Sequelize = require("sequelize");
const db = require("../config/database");

const Gig = db.define("gig", {
  title: {
    type: Sequelize.STRING,
  },
  technologies: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  budget: {
    type: Sequelize.STRING,
  },
  contact_email: {
    type: Sequelize.STRING,
  },
});

module.exports = Gig;
```

## Queries on Database

- Adding record

  ```js
  await Gig.create({
    /* pass the fields here */
  });
  ```

- Fetching Records

  ```js
  await Gig.findAll();
  ```

- More Queries: Read [docs](https://sequelize.org/master/manual/model-querying-basics.html)
