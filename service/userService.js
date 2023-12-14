const { models } = require('../models/index');


module.exports = {
    createUser: async (data) => {
        try {
            const user = await models.user.create(data)
            return user;
        } catch (error) {
            console.log(error)
        }
    }
}