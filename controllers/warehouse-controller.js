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

// Get warehouse by ID
const getWarehouseById = async (req, res) => {
  try {   
  } catch (error) {
    console.log(error)
  }
}

// Add new warehouse

const addWarehouse = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

// Edit warehouse

const editWarehouse = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

// Delete Warehouse

const deleteWarehouse = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};




module.exports = {
  getWarehouse,
  getWarehouseById,
  addWarehouse,
  editWarehouse,
  deleteWarehouse,
};
