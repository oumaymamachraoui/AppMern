const mongoose = require('mongoose');

const schema = mongoose.Schema;

const endroitSchema = new schema({
    nom:{
        type: String,
        required : true,
        unique: true,
    },
    nom_plage:{
        type: String,
        required: true,
    },
    superficie:{
        type: Number,
        required: true,
    },
    nbre_parasol:{
        type: Number,
        required: true,
    },

    longitude:Number,

    latitude:Number,

    prix:Number,

    type_lot:{
        type: String,
    }

})

module.exports = Endroits = mongoose.model("endroit", endroitSchema)