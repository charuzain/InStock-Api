const knex = require('knex')(require('../knexfile'));

const getWarehouse = async (req, res) => {
  try {
    const data = await knex('warehouses');
    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(400).send(`Error retriving warehouse data`);
  }
};

module.exports = {
  getWarehouse,
};
