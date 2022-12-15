const mongoose = require("mongoose");
const Endroits = require("./Endroits");

const schema = mongoose.Schema;

const reclamationSchema = new schema({
  endroit: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Endroits,
    required: true,
  },

  nom_visiteur: String,

  note: String,

  date_reclamation: Date,

  resolu: {
    type: Boolean,
    default: false,
  },
});

module.exports = Order = mongoose.model("order", reclamationSchema);
