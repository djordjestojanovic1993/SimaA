const model = require('../models/application');

async function addApplication(req, res, next) {
    const advertisementsData = req.body;
      try {
        // if(!req.file.filename){
        //     throw new Error("Nema slike ucesnika")
        // }
        console.log(advertisementsData)
        const newAdvertisements = await model.addAApplication(advertisementsData);
        res.status(201).json(newAdvertisements);
      } catch (error) {
        next(error);
      }
  }

  module.exports = {
    addApplication
}