const knex = require("knex")(require("../knexfile"));
const emailValidator = require("validator");

const getWarehouses = async (req, res) => {
  try {
    const data = await knex("warehouses");
    // console.log(data);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(400).send(`Error retriving warehouse data`);
  }
};

// Get warehouse by ID
const getWarehouseById = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

// Add new warehouse

const addWarehouse = async (req, res) => {
  const {
    warehouse_name,
    address,
    city,
    country,
    contact_name,
    contact_position,
    contact_phone,
    contact_email,
  } = req.body;

  const requiredFields = [
    "warehouse_name",
    "address",
    "city",
    "country",
    "contact_name",
    "contact_position",
    "contact_phone",
    "contact_email",
  ];

  const missingField = requiredFields.filter((field) => !req.body[field]);

  if (missingField.length > 0) {
    return res
      .status(400)
      .send(
        `Can't create new warehouse as the following Required fields are missing :  ${missingField}`
      );
  }

  const isValidEmail = emailValidator.isEmail(contact_email);

  const phoneRegEx = /^\+?(\d{1,3})?\s*\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

  const isValidPhoneNumber = phoneRegEx.test(contact_phone);

  if (!isValidEmail || !isValidPhoneNumber) {
    return res.status(400).send(`Invalid Email address or phone number`);
  }
  const newWarehouse = {
    warehouse_name,
    address,
    city,
    country,
    contact_name,
    contact_position,
    contact_phone,
    contact_email,
  };
  try {
    const result = await knex("warehouses").insert(newWarehouse);
    console.log(result);
    const newWarehouseId = result[0];
    const createdWarehouse = await knex("warehouses").where({
      id: newWarehouseId,
    });
    return res.status(201).json(createdWarehouse);
  } catch (error) {
    res.status(500).json({
      message: `Unable to create new user: ${error}`,
    });
  }
};

// Edit warehouse

const editWarehouse = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

// Delete Warehouse

const deleteWarehouse = async (req, res) => {
  try {
    const warehouseDeleted = await knex("warehouses")
      .where({ id: req.params.id })
      .delete();
    if (warehouseDeleted === 0) {
      return res.status(404).json({
        message: `The warehouse with ${req.params.id} does not exsit`,
      });
    }
    res.status(200).json({
      message: `Warehouse with ID ${req.params.id} was successfully deleted`,
    });
  } catch (error) {
    res.status(500).json({
      message: `Unable to delete warehouse:${error}`,
    });
    console.log(error);
  }
};

//GetWarehouseInventory for WarehouseID
const getWarehouseInventory=async(req,res)=>{
  try {
    const inventories=await knex('warehouses')
      .join("inventories","inventories.warehouse_id","warehouses.id")
      .where ({warehouse_id:req.params.id});

      if (inventories.length === 0) {
        return res.status(404).json({ message: "No inventories found for the specified warehouse ID" });
      }

      res.json(inventories);
      res.status(500).json({
        message:"No posts for you"
      })
  } catch (error) {
    
  }
}


module.exports = {
  getWarehouses,
  getWarehouseById,
  addWarehouse,
  editWarehouse,
  deleteWarehouse,
  getWarehouseInventory,
};
