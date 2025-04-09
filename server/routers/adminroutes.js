

const express = require("express");

const route = express.Router();

const upload =require("../middleware/fileUploaderMulter")
const { addProduct, showProduct } = require("../controllers/admincontroller");


route.post("/addproduct", upload.array("image", 6), addProduct);


route.get("/showproduct", showProduct);

module.exports = route;
