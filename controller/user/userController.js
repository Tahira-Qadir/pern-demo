const userValidation = require('./userValidation');
const userService = require('../../service/userService')

module.exports = {
  createUser: async (req, res) => {
  try {
    const { error, value } = userValidation.createUser.validate(req.body);
      if (error) {
        console.log(error.details[0].message);
      } else {
        const data = await userService.createUser(value);
        res.send(data).status(200);
      }
  } catch (error) {
    console.log(error)
  }
  },
 
  getUser: async (req, res) => {
    try { 
      const Id = req.params.id;
        const data = await userService.getUser(Id);
        res.send(data);
    } catch (error) {
        console.log(error)
    }
  }
};