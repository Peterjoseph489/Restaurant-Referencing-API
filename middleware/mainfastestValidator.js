const Validator = require('fastest-validator')

const validator = new Validator();

const createUserSchema = {
    branch: {
        type: 'string',
        optional: true,
        min: 2,
        max: 50
    },
    address: {
        type: 'string',
        optional: true
    },
    refMax: {
        type: 'string',
        optional: true
    },
    citizenMeal: {
        type: 'string',
        optional: true
    }
};

module.exports = {
    validator,
    createUserSchema
}