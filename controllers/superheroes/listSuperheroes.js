const { Superhero } = require("../../models");

async function listSuperheroes(req, res) {
  const { page = 1, limit = 5 } = req.query;
  const skip = (page - 1) * limit;

  const collectionLength = await Superhero.estimatedDocumentCount();

  const superheroes = await Superhero.find().skip(skip).limit(limit);

  res.json({ collectionLength, superheroes });
}

module.exports = listSuperheroes;
