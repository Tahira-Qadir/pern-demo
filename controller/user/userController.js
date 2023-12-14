const {models} = require('../../models/index');
const userValidation = require("./userValidation");

module.exports = {
  createUser: async (req, res) => {
  
      const { error, value } = userValidation.createUser.validate(req.body);
      if (error) {
        console.log(error.details[0].message);
      } else {
        const user = await models.user.create(value);
        res.send(user);
        return user;
      }
  },
};