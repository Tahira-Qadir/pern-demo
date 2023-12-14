const joi = require('joi');

module.exports ={
    createUser: joi.object().keys({
        firstName: joi.string().required(),
        lastName: joi.string().required(),
        email: joi.string().email().required(),
        password: joi.string().required(),
    }),
}