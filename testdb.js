const knexConfig = require("./knexfile");

const knex = require("knex")(knexConfig);

knex
  .raw("SELECT 1+1 AS result")
  .then((queryResponse) => {
    console.log("Database connection test successful:", queryResponse);
  })
  .catch((err) => {
    console.error("Database connection test failed:", err);
  })
  .finally(() => {
    knex.destroy();
  });
