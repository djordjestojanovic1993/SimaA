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
  const advertisementsData = req.body;
  const slika = req.file.filename;
  advertisementsData.slika = slika;
    try {
      if(!req.file.filename){
          throw new Error("Nema slike ucesnika")
      }
      // console.log(advertisementsData)
      const newAdvertisements = await model.addAdvertisements(advertisementsData);
      res.status(201).json(newAdvertisements);
    } catch (error) {
      next(error);
    }
}

async function deleteAdvertisments(req, res, next){
  try{
    const advertisementsData = req.body;
    console.log(advertisementsData)
    const deletedAdvertisements = await model.deleteAdvertismentById(advertisementsData.ID);
    res.status(201).json(deletedAdvertisements);

  }catch(error){
    next(error);
  }
}

async function changeAdvertisment(req, res, next){
  try{
    const advertisementsData = req.body;
    console.log(advertisementsData)
    const changedAdvertisements = await model.changeAdvertisement(advertisementsData);
    res.status(201).json(changedAdvertisements);

  }catch(error){
    next(error);
  }
}


module.exports = {
    getAdvertisements,
    addAdvertisements,
    deleteAdvertisments,
    changeAdvertisment
}