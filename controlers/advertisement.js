const model = require('../models/advertisement');

async function getAdvertisements(req, res, next) {
    try {
        const advertisements = await model.getAdvertisements();

      if(advertisements === null){
        throw new Error("Greska, nije moguce dohvatiti ucenike!");
      }

      res.json(advertisements);
    } catch (error) {
      next(error);
    }
}

async function addAdvertisements(req, res, next) {
    try {
      const advertisementsData = req.body;
      console.log(advertisementsData);
      const newAdvertisements = await model.addAdvertisements(advertisementsData);
      res.status(201).json(newAdvertisements);
    } catch (error) {
      next(error);
    }
}

module.exports = {
    getAdvertisements,
    addAdvertisements
}