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
  } catch (error) {
    console.log(error);
  }
};

// Delete Inventory

const deleteInventoryItem = async (req, res) => {
  try {
    const warehouseDeleted = await knex("inventories")
      .where({ id: req.params.id })
      .delete();
    if (warehouseDeleted === 0) {
      return res.status(404).json({
        message: `The inventory with ${req.params.id} does not exsit`,
      });
    }
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({
      message: `Unable to delete inventor:${error}`,
    });
    console.log(error);
  }
};

module.exports = {
  getInventory,
  getInventoryById,
  addInventoryItem,
  editInventoryItem,
  deleteInventoryItem,
};
