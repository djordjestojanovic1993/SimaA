const model = require('../models/advertisement')

async function showPage(req, res, next){
  let page = req.params.page
    if(page == "students"){
      let advertisementsStudents;
      try {
          advertisementsStudents = await model.getAdvertisementsBytype("stipendista");
  
        if(advertisementsStudents === null){
          throw new Error("Greska, nije moguce dohvatiti ucenike!");
        }
  
        
      } catch (error) {
        next(error);
      }
      res.render('students', {advertisements:advertisementsStudents});

    }else if(page == 'news'){
      let advertisementsNews;
      const typesToSearch = ['konkurs', 'vest'];
      try {
        advertisementsNews = await model.getAdvertisementsByTypes(typesToSearch);

      if(advertisementsNews === null){
        throw new Error("Greska, nije moguce dohvatiti ucenike!");
      }

      
      } catch (error) {
        next(error);
      }
      res.render('news', {news:advertisementsNews});
    }
}

async function showOnePage(req, res, next){
  let page = req.params.page
  let id = req.params.id;
    if(page == "students"){
      let Student;
      try {
        Student = await model.getAdvertisementsByID(id);
  
        if(Student === null){
          throw new Error("Greska, nije moguce dohvatiti ucenike!");
        }
  
        
      } catch (error) {
        next(error);
      }
      res.render('studentFullSize', {name: Student[0].title, subTitle: Student[0].title, text: Student[0].text, img: "/pictures/upload/" + Student[0].img});
    }
}

module.exports = {
  showPage,
  showOnePage
}