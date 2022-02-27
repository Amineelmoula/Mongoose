const contactSchima = require("../Models/models");
exports.postContact = async (req, resp) => {
  try {
    const contact = new contactSchima(req.body);
    const found = await contactSchima.findOne({ email: req.body.email });
    if (found) {
      return resp
        .status(400)
        .send("email is being used, please enter another one");
    }
    await contact.save();
    resp.status(200).send({ msg: "new contact added", contact });
  } catch (error) {
    resp
      .status(500)
      .send("contact couldn't be added, please enter valid information");
  }
};
exports.contactfind = async (req, resp) => {
  try {
    const contact = await contactSchima.find();
    resp.status(200).send({ msg: "your contacts are :", contact });
  } catch (error) {
    resp.status(500).send("no contact found");
  }
};
exports.contactFindId = async (req, resp) => {
  try {
    const contact = await contactSchima.findById(req.params.id);
    resp.status(200).send({ msg: "contact found", contact });
  } catch (error) {
    resp.status(500).send("no contact found");
  }
};
exports.contactUpdate = async (req, resp) => {
  try {
    const contact = await contactSchima.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    resp.status(200).send({ msg: "contact upadated", contact });
  } catch (error) {
    resp.status(500).send("couldn't update contact");
  }
};
exports.contactDelete = async (req, resp) => {
  try {
    const contact = await contactSchima.findByIdAndDelete(req.params.id);
    resp.status(200).send({ msg: "contact deleted", contact });
  } catch (error) {
    resp.status(500).send("contact couldn't be deleted");
  }
};
