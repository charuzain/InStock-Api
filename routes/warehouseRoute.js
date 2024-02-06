const express = require('express');
const router = express.Router();
router.use(express.json());

router.get('/', (req, res) => {
  console.log('Get request for Warehouse');
  res.send("Warehouse route")
});
router.delete()
module.exports = router;