const express = require("express");
const connectDB = require("./Config/config");
const ContactRoutes = require("./Route/contacts");

require("dotenv").config();
const app = express();
app.use(express.json());
connectDB();
app.use("/api/contact", ContactRoutes);
app.listen(process.env.PORT, () => {
  console.log(`server is running on port: ${process.env.PORT} `);
});
