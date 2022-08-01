//Models
const Category = require("../../models/category-model");

const { getErrorJson, getSuccessJson } = require("../../Common/Constants");

function categoriesListHandler() {
  return async (req, res) => {
    const userId = req.user;
    try {
      let user = await User.findOne(userId);

      return res
        .status(200)
        .json({
          ...getSuccessJson("profile image updated successfully."),
          profileImage: user.profileImage,
        });
    } catch (e) {
      console.log(e);
      return res.status(500).json(getErrorJson("FAILED TO DELETE IMAGE"));
    }
  };
}
exports.categoriesListHandler = categoriesListHandler;
