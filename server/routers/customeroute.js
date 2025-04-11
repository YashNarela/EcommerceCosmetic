const express = require("express");

const route = express.Router();

const {
  custRegistration,
  custLogin,
  custAuth,
} = require("../controllers/customercontroller");


route.post("/registration", custRegistration);

route.post("/customerlogin", custLogin);
route.get("/userauthenticate", custAuth);




module.exports = route;
