const express = require("express");
const connectDB = require("./config/db");
const cors = require('cors');
const app = express();

app.use(cors());



//Connect Database
connectDB();

//init middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API running"));

//IMPORT ROUTES

//inventory list
const inventoryR = require("./routes/api/groceries");
app.use("/grocery", inventoryR);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
