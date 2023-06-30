const Validator = require('fastest-validator')

const validator = new Validator();

const createUserSchema = {
    refMax: {
        type: 'object',
        optional: true
    },
    citizenMeal: {
        type: 'object',
        optional: true
    },
    chickWizz: {
        type: 'object',
        optional: true
    }
};

module.exports = {
    validator,
    createUserSchema
}