const { models } = require('../models/index');


module.exports = {
    createUser: async (data) => {
        try {
            const user = await models.user.create(data)
            return user;
        } catch (error) {
            console.log(error)
        }
    },

    getUser: async (Id) => {
        const user = await models.user.findAll()
        return user;
    },

    updateUser: async (Id, updatedData) => {
        // find the user and then update it with new data
        const updatedUser = await models.user.update(updatedData, {
            where: {id: Id},
            return: true,
        });
        return updatedUser;
    },

    deleteUser: async (Id) => {

        const deletedUser = await models.user.findByPk(Id);
        console.log(Id)
        await models.user.destroy({
            where: {id: Id},
        });
        return deletedUser;
    },

}