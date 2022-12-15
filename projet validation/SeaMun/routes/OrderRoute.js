const Endroits = require("../models/Endroits");
const Order = require("../models/Order");

const router = require("express").Router();

router.post("/add/:_id", async (req, res) => {
  const { _id } = req.params;
  try {
    const { note, nom_visiteur, date_reclamation } = req.body;
    const nom_endroit = await Endroits.findById({ _id });
    const order = new Order({
      endroit: nom_endroit._id,
      note,
      nom_visiteur,
      date_reclamation,
    });
    await order.save();
    res.status(200).send("order de reclamation envoyer");
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
