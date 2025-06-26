const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();


const emailRoutes = require("./routes/emailRoute");



const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api", emailRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
