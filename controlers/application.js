const model = require('../models/application');

async function addApplication(req, res, next) {
    const advertisementsData = req.body;
    const houseMembersArray = JSON.parse(req.body.members);
    advertisementsData.membersArray = houseMembersArray;

    const uploadedFiles = req.files;
    const filejsNames = uploadedFiles.map(obj => obj.filename);
    advertisementsData.filejsNames = filejsNames;
      try {
        // if(!req.file.filename){
        //     throw new Error("Nema slike ucesnika")
        // }
        const newAdvertisements = await model.addAApplication(advertisementsData);
        res.status(201).json(newAdvertisements);
      } catch (error) {
        next(error);
      }
  }

  module.exports = {
    addApplication
}