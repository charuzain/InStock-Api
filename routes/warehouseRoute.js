const express = require("express");
const router = express.Router();
const warehouseController = require("../controllers/warehouse-controller");
const inventoryController = require("../controllers/inventory-controller");
router.use(express.json());

router.get("/", warehouseController.getWarehouses);
router.get("/:id", warehouseController.getWarehouseById);
router.post("/", warehouseController.addWarehouse);
router.put("/:id", warehouseController.editWarehouse);
router.delete("/:id", warehouseController.deleteWarehouse);
router.get("/:id/inventories",warehouseController.getWarehouseInventory);
router.post('/api/inventories', inventoryController.addInventory);
router.post('/', inventoryController.addInventory);

module.exports = router;
