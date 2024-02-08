const knex = require('knex')(require('../knexfile'));


// const getInventory = async (req, res) => {
//   try {
//     const warehouseId = req.params.id; // Extract warehouse ID from request parameters
    
//     // Query the database to get inventories for the specified warehouse ID
//     const inventories = await knex('inventories')
//       .where('warehouse_id', warehouseId)
//       .select('*');
//       console.log(inventories);
//     // Return the list of inventories as JSON response
//     res.status(200).json({ inventories });
//   } catch (error) {
//     console.error('Error fetching inventory:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

// module.exports = {
//   getInventory,
// };

const getInventory = async (req, res) => {
  try {
    const dataInventory=await knex("inventories");
    console.log(dataInventory);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(400).send(`Error retriving warehouse data`);
  }
};

module.exports = {
  getInventory,
};


