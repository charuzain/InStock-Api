const knex = require("knex")(require("../knexfile"));

const getInventory = async (req, res) => {
  try {
  } catch (error) {}
};

// Delete Inventory

const deletenIventory = async (req, res) => {
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
  deletenIventory,
};
