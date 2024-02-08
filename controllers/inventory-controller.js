const knex = require('knex')(require('../knexfile'));
const express = require('express');
const router = express.Router();

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
    
  } catch (error) {
   
  }
};
module.exports = {
  getInventory,
  addInventory,
};
