const knex = require("knex")(require("../knexfile"));

const getInventory = async (req, res) => {
  try {
    const data = await knex("inventories")
      .join("warehouses", "inventories.warehouse_id", "=", "warehouses.id")
      .select(
        "inventories.id",
        "warehouse_name",
        "item_name",
        "description",
        "category",
        "status",
        "quantity"
      );
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(`Error retriving inventory data`);
  }
};

// Get inventory by ID
const getInventoryById = async (req, res) => {
  try {
    const inventory = await knex("inventories")
      .where({ id: req.params.id })
      .first();

    if (!inventory) {
      return res.status(404).json({
        message: `Inventory with ID ${req.params.id} not found`,
      });
    }
    res.status(200).json(inventory);
  } catch (error) {
    res.status(500).json({
      message: `Unable to retrieve inventory data for inventory with ID ${req.params.id}`,
    });
    console.error(error);
  }
};

const addInventoryItem = async (req, res) => {
  try {
  } catch (error) {}
};

const editInventoryItem = async (req, res) => {
  try {
  } catch (error) {
    console.log(error)
  }
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
