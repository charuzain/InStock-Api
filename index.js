require("dotenv").config();
const express = require("express");
const inventoryRoutes = require("./routes/inventoryRoute");
const warehouseRoutes = require("./routes/warehouseRoute");
const app = express();
const PORT = process.env.PORT || 8081;
const cors = require("cors");

app.use(cors());
app.use(express.json());
const CLIENT_URL = process.env.CLIENT_URL;

app.use(cors({
    origin: CLIENT_URL
  }));

app.use("/inventories", inventoryRoutes);
app.use("/warehouses", warehouseRoutes);


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
