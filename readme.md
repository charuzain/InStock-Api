Description
Create an API on the back-end using Express and Express Router to create a new warehouse based on the user inputs provided in the front-end.

New data should be inserted into your database using knex.

All request body data needs to have validation. All values are required (non-empty). For Phone Number and Email fields validate correct phone number and email. For incorrect/incomplete data, the correct error response needs to be sent (with status code and message).

POST /api/warehouses

Request body example:



{
    "warehouse_name": "Chicago",
    "address": "3218 Guess Rd",
    "city": "Chicago",
    "country": "USA",
    "contact_name": "Jameson Schuppe",
    "contact_position": "Warehouse Manager",
    "contact_phone": "+1 (919) 797-2875",
    "contact_email": "jschuppe@instock.com"
}
Response returns 400 if unsuccessful because of missing properties in the request body

Response returns 400 if unsuccessful because of invalid email address or phone number

Response returns 201 if successful

Response body example:



{
    "id": 10,
    "warehouse_name": "Chicago",
    "address": "3218 Guess Rd",
    "city": "Chicago",
    "country": "USA",
    "contact_name": "Jameson Schuppe",
    "contact_position": "Warehouse Manager",
    "contact_phone": "+1 (919) 797-2875",
    "contact_email": "jschuppe@instock.com"
}
