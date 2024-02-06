const knexConfig = require("./knexfile").development; // 如果你在使用 development 环境
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
