const express = require("express");
const cors = require("cors");
const { connectDb } = require("./connection/connect");

const path = require("path");
var bodyParser = require("body-parser");
const adminroute=require("./routers/adminroutes")
const paymentRoute =require("./routers/payment")

const customerRoute = require("./routers/customeroute");

const app = express();

require("dotenv").config();

app.use(cors());

var jsonParser = bodyParser.json();

app.use(jsonParser);
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(urlencodedParser);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const port = process.env.PORT || 4000;

app.use("/admin", adminroute);
app.use("/api/payment/", paymentRoute);

app.use("/customer", customerRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

connectDb();
