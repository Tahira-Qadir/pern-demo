const {models} = require('../../models/index');
const userValidation = require("./userValidation");

module.exports = {
  createUser: async (req, res) => {
  try {
    const { error, value } = userValidation.createUser.validate(req.body);
      if (error) {
        console.log(error.details[0].message);
      } else {
        const data = await models.user.create(value);
        res.send(data).status(200);
      }
  } catch (error) {
    console.log(error)
  }
  },
};