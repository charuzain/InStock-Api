const express = require('express');
const router = express.Router();
router.use(express.json());

router.get('/', (res, req) => {
  console.log("Get request for inventory")
})



module.exports = router;