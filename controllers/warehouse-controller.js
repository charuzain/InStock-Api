const knex = require('knex')(require('../knexfile'));
const emailValidator = require('validator');

const getWarehouses = async (req, res) => {
  try {
    const data = await knex('warehouses');
    console.log(data);
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
  // console.log(req.body);
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
    'warehouse_name',
    'address',
    'city',
    'country',
    'contact_name',
    'contact_position',
    'contact_phone',
    'contact_email',
  ];

  const missingField = requiredFields.filter((field) => !req.body[field]);
  console.log(missingField);

  if (missingField.length > 0) {
    return res
      .status(400)
      .send(
        `Can't create new warehouse as the following Required fields are missing :  ${missingField}`
      );
  }

  // const isValidEmail = emailValidator.validate(contact_email);
  const isValidEmail = emailValidator.isEmail(contact_email);
  console.log(isValidEmail)

  // const phoneRegEx = /^\(?([0-9]{3})\)?[- ]?([0-9]{3})[- ]?([0-9]{4})$/;
  const phoneRegEx = /^\+?(\d{1,3})?\s*\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  console.log(contact_phone)
  const isValidPhoneNumber = phoneRegEx.test(contact_phone);
  console.log(isValidPhoneNumber)

  

  // const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // const isValidEmail = phoneRegEx.test(contact_email);

  if (!isValidEmail || !isValidPhoneNumber) {
    return res.status(400).send(`Invalid Email address or phone number`)
  }
  else {
    return res.send("valid")
  }

  // const emailPattern =

  try {
    const result = await knex;
  } catch (error) {
    console.log(error);
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
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getWarehouses,
  getWarehouseById,
  addWarehouse,
  editWarehouse,
  deleteWarehouse,
};
