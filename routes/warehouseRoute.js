const express = require('express');
const router = express.Router();
const warehouseController = require('../controllers/warehouse-controller');
const inventoryController = require('../controllers/inventory-controller')
router.use(express.json());

router.get('/', warehouseController.getWarehouse);

module.exports = router;
