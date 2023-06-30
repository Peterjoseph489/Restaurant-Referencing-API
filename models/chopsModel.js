const mongoose = require('mongoose');

const riceSchema =new  mongoose.Schema({
    refMax: {
        type: Object
    },
    citizenMeal:{
        type: Object
    },
    chickWizz:{
        type: Object
    },
    link: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant'
    }
})


const riceModel = mongoose.model('chops', riceSchema);

module.exports = riceModel