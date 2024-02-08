const knex = require('knex')(require('../knexfile'));

const getInventory = async (req, res) => {
  console.log('ji');
  try {
    const data = await knex('inventories');
    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(400).send(`Error retriving warehouse data`);
  }
};

const getInventoryById = async (req, res) => {
  try {
    
  } catch (error) {
    
  }
};

const addInventoryItem = async (req, res) => {
  try {
    
  } catch (error) {
    
  }
}

const editInventoryItem = async (req, res) => {
  try {
  } catch (error) {}
};

const deleteInventoryItem = async (req, res) => {
  try {
  } catch (error) {}
};

module.exports = {
  getInventory,
  getInventoryById,
  addInventoryItem,
  editInventoryItem,
  deleteInventoryItem
};
