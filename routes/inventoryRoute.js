const express = require('express');
const router = express.Router();
router.use(express.json());
const inventoryController = require('../controllers/inventory-controller');
router.use(express.json());

router.get("/", inventoryController.getInventory);
router.get("/:id", inventoryController.getInventoryById);
router.post("/", inventoryController.addInventoryItem);
router.put("/:id", inventoryController.editInventoryItem);
router.delete('/:id', inventoryController.deleteInventoryItem);




module.exports = router;