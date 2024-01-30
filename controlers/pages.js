const model = require('../models/advertisement')

async function showPage(req, res, next){
  let page = req.params.page
    if(page == "students"){
      let advertisements;
      try {
           advertisements = await model.getAdvertisementsBytype("stipendista");
  
        if(advertisements === null){
          throw new Error("Greska, nije moguce dohvatiti ucenike!");
        }
  
        
      } catch (error) {
        next(error);
      }
      console.log(advertisements.length)
      res.render('news', {advertisements:advertisements});

    }
}


module.exports = {
  showPage
}