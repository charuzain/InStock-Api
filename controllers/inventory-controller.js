
const knex = require('knex')(require('../knexfile'));
const express = require('express');
const router = express.Router();

//get inventory by id
const addInventory = async (req, res) => {
 
  if (
    !req.body.item_name ||
    !req.body.description ||
    !req.body.category ||
    !req.body.status ||
    !req.body.quantity ||
    !req.body.warehouse_id
  ) {
    return res.status(400).json({ error: 'All fields are required' });
  }


  if (isNaN(req.body.quantity)) {
    return res.status(400).json({ error: 'Quantity must be a number' });
  }

  try {
 
    const warehouse = await knex('warehouses').where({
      id: req.body.warehouse_id,
    }).first();

    if (!warehouse) {
      return res.status(400).json({ error: 'Invalid warehouse_id' });
    }
    const inventoryResult = await knex('inventories').insert(req.body);
    const newInventoryId = inventoryResult[0];
    const createdInventory = await knex('inventories').where({
      id: newInventoryId,
    }).first();

    return res.status(201).json(createdInventory);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Error creating inventory item',
    });
  }
};


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
  addInventory,
  getInventoryById,
  addInventoryItem,
  editInventoryItem,
  deleteInventoryItem,

};
