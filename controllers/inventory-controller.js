const knex = require('knex')(require('../knexfile'));

const getInventory = async (req, res) => {
  try {
    const data = await knex('inventories')
      .join('warehouses', 'inventories.warehouse_id', '=', 'warehouses.id')
      .select(
        'inventories.id',
        'warehouse_name',
        'item_name',
        'description',
        'category',
        'status',
        'quantity'
      );
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(`Error retriving inventory data`);
  }
};

const getInventoryById = async (req, res) => {
  try {
  } catch (error) {}
};

const addInventoryItem = async (req, res) => {
  try {
  } catch (error) {}
};

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
  deleteInventoryItem,
};
