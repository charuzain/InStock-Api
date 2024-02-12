const express = require("express");
const router = express.Router();
router.use(express.json());
const inventoryController = require("../controllers/inventory-controller");
router.use(express.json());
router.get("/", inventoryController.getInventory);
router.get("/:id", inventoryController.getInventoryById);
router.put("/:id", inventoryController.editInventory);
router.delete("/:id", inventoryController.deleteInventoryItem);
router.post("/", inventoryController.addInventory);


module.exports = router;
