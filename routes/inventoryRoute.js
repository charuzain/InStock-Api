const express = require('express');
const router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {
  console.log("Get request for inventory")
  res.send("Inventory Routes")
})

module.exports = router;