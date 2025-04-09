const ProductModel = require("../models/adminmodel");

const addProduct = async (req, res) => {
  try {
    console.log(req.body);

    console.log(req.files);

    const imageUrls = req.files.map((file) => file.filename);

    const { name, description, price, brand, category } = req.body;

        const Product = await ProductModel.create({
          name: name,
          description: description,
          brand: brand,
          category: category,
          price: price,
          dfaultImage: imageUrls[0],
          images: imageUrls,
        });

        console.log(Product);
        
        res.status(200).send("PRoduct Succesfully save!!!");



  } catch (error) {
    console.log(error);
  }
};

const showProduct = async (req, res) => {

    try {
        
          const Product = await ProductModel.find();
          res.status(200).send(Product);
    } catch (error) {
        
        console.log(error);
        
    }
};
module.exports = {
  addProduct,
  showProduct,
};
