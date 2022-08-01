const Product = require("../../models/products-model");
const { getErrorJson, getSuccessJson } = require("../../Common/Constants");

function productsForBannerHandler() {
  return async (req, res) => {
    try {
      const products = Product.aggregate([{ $sample: { size: 3 } }]);
      return res.status(200).json({ status: "SUCCESS", products });
    } catch (e) {
      console.log(e);
      return res.status(500).json(getErrorJson("Unexpected error ocurred"));
    }
  };
}
