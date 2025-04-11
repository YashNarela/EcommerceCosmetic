const Model = require("../models/customermodel");
const  jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const custRegistration = async (req, res) => {
  try {
    console.log(req.body);

    const { pin, address, name, city, email, pno, cnfpass, password } =
      req.body;

    if (
      !pin ||
      !address ||
      !name ||
      !city ||
      !email ||
      !pno ||
      !cnfpass ||
      !password
    ) {
      res.status(403).send("All Fields required");
    }

    let rspData = await Model.findOne({ email: email });

    console.log(rspData);

    if (rspData) {
      return res.status(400).send("User Already Exists");
    }

    if (password !== cnfpass) {
      return res.status(403).send("password is Incorrect");
    }

    const salt = bcrypt.genSaltSync(10);
    let hashPassword;

    try {
      hashPassword = await bcrypt.hash(password, salt);
    } catch (error) {
      return res.status(400).send("Unable to Hash");

      console.log(error);
    }

    let registerIt = await Model.create({
      name: name,
      address: address,
      city: city,

      email: email,
      pno: pno,
      pin: pin,
      password: hashPassword,
    });

    res
      .status(200)
      .json({ success: "Registration SuccessFully", rsp: registerIt });
  } catch (error) {
    console.log(error);

    res.status(400).send("Registration Failed");
  }
};





const custLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const Customer = await Model.findOne({ email: email });

    console.log(Customer);
    

    if (!Customer) {
      res.status(400).send({ msg: "Invalid Email ID!" });
    }

    const passwordMatch = await bcrypt.compare(password, Customer.password);

    if (!passwordMatch) {
      res.status(400).send({ msg: "Invalid Password!" });
    }

    const token = jwt.sign({ id: Customer._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.status(200).send({ token: token , msg:"Logged In Successfully"});
  } catch (error) {
    console.log(error);

    res.status(400).send("Something Went Wrong ")
  }
};



const custAuth = async (req, res) => {
  const { authorization } = req.headers;
  const token = authorization.split(" ")[1];
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decodedToken.id);
    const Customer = await Model.findById(decodedToken.id).select(
      "-password"
    );

    console.log(Customer);

    res.status(200).send(Customer);
  } catch (error) {
    console.log(error);
  }
};









module.exports = { custRegistration, custLogin, custAuth };
