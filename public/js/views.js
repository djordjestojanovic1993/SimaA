let numberMembersInput = document.getElementById('number-members');
let membersUl = document.getElementById('members-ul')
const memberTemplate = document.getElementById('members-template');
numberMembersInput.addEventListener('change', ()=>{
    while (membersUl.firstChild) {
        membersUl.removeChild(membersUl.firstChild);
      }

      const memberPototype = memberTemplate.content.getElementById('members-li');
      const memberList = document.getElementById('members-ul');


      let numberMembers = numberMembersInput.value;
      if(numberMembers>0){
        for(let i=0; i<numberMembers; i++){
          
            const clone = memberPototype.cloneNode(true);
            memberList.appendChild(clone);
  
        }

      }
})

function formValidation(){
    const formNameInput = document.getElementById('form-name');
    const formBirthplaceInput = document.getElementById('form-birthplace');
    const formBirthdateInput = document.getElementById('form-birthdate');
    const formAddressInput = document.getElementById('form-address');
    const formSchoolInput = document.getElementById('form-school');
    const formSchoolCurrentYearInput = document.getElementById('form-schoolCurrentYear');
    const formWhichTimeYearInput = document.getElementById('form-whichTimeYear');
    const formPhoneInput = document.getElementById('form-phone');
    const formEmailInput = document.getElementById('form-email');
    const formPriestNameInput = document.getElementById('form-priestName');
    const housemebersNumberInput = document.getElementById('number-members');
    const memberNameIputs = document.getElementsByClassName('member-name');
    const memberSalaryIputs = document.getElementsByClassName('member-salary');
    const memberTypeIputs = document.getElementsByClassName('member-type');
    const memberAmountIputs = document.getElementsByClassName('member-amount');

    if(formNameInput.value==''){
      alert("Sva polja moraju biti popunjena i dodati PDF fajlovi");
      formNameInput.focus();
      return false;
    } if(formBirthplaceInput.value==''){
      alert("Sva polja moraju biti popunjena i dodati PDF fajlovi");
      formBirthplaceInput.focus();
      return false;
    } if(formBirthdateInput.value==''){
      alert("Sva polja moraju biti popunjena i dodati PDF fajlovi");
      formBirthdateInput.focus();
      return false;
    } if(formAddressInput.value==''){
      alert("Sva polja moraju biti popunjena i dodati PDF fajlovi");
      formAddressInput.focus();
      return false;
    } if(formSchoolInput.value==''){
      alert("Sva polja moraju biti popunjena i dodati PDF fajlovi");
      formSchoolInput.focus();
      return false;
    } if(formSchoolCurrentYearInput.value==''){
      alert("Sva polja moraju biti popunjena i dodati PDF fajlovi");
      formSchoolCurrentYearInput.focus();
      return false;
    } if(formWhichTimeYearInput.value==''){
      alert("Sva polja moraju biti popunjena i dodati PDF fajlovi");
      formWhichTimeYearInput.focus();
      return false;
    } if(formPhoneInput.value==''){
      alert("Sva polja moraju biti popunjena i dodati PDF fajlovi");
      formPhoneInput.focus();
      return false;
    } if(formEmailInput.value==''){
      alert("Sva polja moraju biti popunjena i dodati PDF fajlovi");
      formEmailInput.focus();
      return false;
    } if(housemebersNumberInput.value==''){
      alert("Sva polja moraju biti popunjena i dodati PDF fajlovi");
      housemebersNumberInput.focus();
      return false;
    } if(housemebersNumberInput.value != ''){
      let mebersNumber = parseInt(housemebersNumberInput.value);
      if(mebersNumber>0){
        for(let memberName of memberNameIputs){
          if (memberName.value == ""){
            alert("Sva polja moraju biti popunjena i dodati PDF fajlovi");
            memberName.focus();
            return false;
          }
        }
        for(let memberSalary of memberSalaryIputs){
          if (memberSalary.value == ""){
            alert("Sva polja moraju biti popunjena i dodati PDF fajlovi");
            memberSalary.focus();
            return false;
          }
        }
        for(let memberType of memberTypeIputs){
          if (memberType.value == ""){
            alert("Sva polja moraju biti popunjena i dodati PDF fajlovi");
            memberType.focus();
            return false;
          }
        }
        for(let memberAmount of memberAmountIputs){
          if (memberAmount.value == ""){
            alert("Sva polja moraju biti popunjena i dodati PDF fajlovi");
            memberAmount.focus();
            return false;
          }
        }
      }
    } if(formPriestNameInput.value==''){
      alert("Sva polja moraju biti popunjena i dodati PDF fajlovi");
      formPriestNameInput.focus();
      return false;
    } if (!pdfInput.files && !pdfInput.files[0]) {
      alert("Sva polja moraju biti popunjena i dodati PDF fajlovi");
      formEmailInput.focus();
      return false;
    }

    return true;
}



function readValues(){
  const formNameInput = document.getElementById('form-name');
  const formBirthplaceInput = document.getElementById('form-birthplace');
  const formBirthdateInput = document.getElementById('form-birthdate');
  const formAddressInput = document.getElementById('form-address');
  const formSchoolInput = document.getElementById('form-school');
  const formSchoolCurrentYearInput = document.getElementById('form-schoolCurrentYear');
  const formWhichTimeYearInput = document.getElementById('form-whichTimeYear');
  const formPhoneInput = document.getElementById('form-phone');
  const formEmailInput = document.getElementById('form-email');
  const formPriestNameInput = document.getElementById('form-priestName');
  const housemebersNumberInput = document.getElementById('number-members');
  const memberNameIputs = document.getElementsByClassName('member-name');
  const memberSalaryIputs = document.getElementsByClassName('member-salary');
  const memberTypeIputs = document.getElementsByClassName('member-type');
  const memberAmountIputs = document.getElementsByClassName('member-amount');
  let registrationForm = document.getElementsByClassName('registration-form');

  let formName = formNameInput.value;
  let formBirthplace = formBirthplaceInput.value;
  let formBirthdate = formBirthdateInput.value;
  let formAddress = formAddressInput.value;
  let formSchool = formSchoolInput.value;
  let formSchoolCurrentYear = formSchoolCurrentYearInput.value;
  let formWhichTimeYear = formWhichTimeYearInput.value;
  let formPhone = formPhoneInput.value;
  let formEmail = formEmailInput.value;
  let formPriestName = formPriestNameInput.value;
  let advertisementID = registrationForm[0].id;
  let members=[{}];

  let housemebersNumber = parseInt(housemebersNumberInput.value);
  if(housemebersNumber>0){ 
    for(let i=0; i<housemebersNumber; i++){
      members[i] = {
        name: memberNameIputs[i].value,
        salary: memberSalaryIputs[i].value,
        type: memberTypeIputs[i].value,
        amounth: memberAmountIputs[i].value
      }
    }
  }
  addInDB(formName,formBirthplace,formBirthdate,formAddress,formSchool,formSchoolCurrentYear,formWhichTimeYear,formPhone,formEmail,formPriestName, members, housemebersNumber, advertisementID);
}

function a(){
  let addpdfbutton = document.getElementById('add-pdf-button__icon');
  let hasChangeListener = false;

  if(addpdfbutton.hasClickListener != true){
    addpdfbutton.addEventListener('click', ()=>{
      addPDF(hasChangeListener)
      hasChangeListener = true;
    })
  }

}
a();

function addPDF(hasChangeListener) {
    const pdfInput = document.getElementById('pdfInput');
  
    // Simulacija klika na input polje za odabir datoteke
    pdfInput.click();
  
    // Uhvati događaj odabira datoteke

    if(hasChangeListener == false){
      pdfInput.addEventListener('change', function() {
        hasChangeListener = true;
        const odabraniFajlovi = pdfInput.files;
    
        // Provera da li su odabrani fajlovi PDF
        for (let i = 0; i < odabraniFajlovi.length; i++) {
          const fajl = odabraniFajlovi[i];
          if (fajl.type === 'application/pdf') {
            // Ovde možete dalje manipulisati s PDF fajlom, npr. poslati ga na server
            console.log('Odabran PDF fajl:', fajl.name);
          } else {
            alert('Molimo odaberite samo PDF fajlove.');
          }
        }
        showPdfImg(odabraniFajlovi);
      });
      
    }
  }


 

  function showPdfImg(odabraniFajlovi){


    const PdfFileShownTemplate = document.getElementById('Pdf-file-shown-template');
    const PdfFileShownProtorype = PdfFileShownTemplate.content.getElementById('Pdf-file-shown');
    const PdfFilesShown = document.getElementById('Pdf-files-shown');
    const Pdfileshowns = document.getElementsByClassName('Pdf-file-shown');

    const pdfNumber = Pdfileshowns.length;

    if(pdfNumber>0){
      for(let i=0; i<pdfNumber; i++){
        Pdfileshowns[0].remove();
      }
    }

    

    for(odabrani of odabraniFajlovi){
      const clone = PdfFileShownProtorype.cloneNode(true);
      clone.getElementsByClassName('Pdf-file-shown-title')[0].innerText = odabrani.name
      PdfFilesShown.appendChild(clone);
    }
  }

  async function addInDB(formName,formBirthplace,formBirthdate,formAddress,formSchool,formSchoolCurrentYear,formWhichTimeYear,formPhone,formEmail,formPriestName, members, housemebersNumber, advertisementID){
    
    let odabraniFajlovi=[];
    const pdfInput = document.getElementById('pdfInput');
    const formData = new FormData();
    formData.append('name', formName);
    formData.append('birthPlace', formBirthplace);
    formData.append('birthDate', formBirthdate);
    formData.append('address', formAddress);
    formData.append('school', formSchool);
    formData.append('schoolCurrentYear', formSchoolCurrentYear);
    formData.append('schoolYear', formWhichTimeYear);
    formData.append('phone', formPhone);
    formData.append('eMail', formEmail);
    formData.append('priestName', formPriestName);
    formData.append('members', JSON.stringify(members));
    formData.append('housemebersNumber', housemebersNumber);
    formData.append('advertisementID', advertisementID)
    if (pdfInput.files && pdfInput.files[0]) {
        try{
          odabraniFajlovi = Array.from(pdfInput.files);
        }catch(err){
            alert("Greska prilikom dodavanja PDF")
            console.log(err)
        }
    }
    // console.log(resizedBlob)
    if(odabraniFajlovi.length > 0){
      odabraniFajlovi.forEach((fajl, index) => {
        formData.append(`pdfFiles`, fajl, fajl.name);
      });

      try{
  
          const options = {
              method: 'POST',
              body: formData
          };
          let response = await fetch("/application/new", options);
          let data = await response.json();
          alert("Uspesno ste poslali prijavu");
  
      }catch(err){
          alert("Sva polja moraju biti popunjena i dodati PDF fajlovi");
          console.log(err)
      }

    }else{
      alert("Sva polja moraju biti popunjena i dodati PDF fajlovi");
    }
}

function addEventListenertoSubmitBtn(){
    let submitBtn = document.getElementById('submit-btn');
    
    if(submitBtn.hasClickListener != true){
      submitBtn.addEventListener('click', ()=>{
          let check = formValidation();
          if(check === true){
            readValues();
          }
        })
    }
}
addEventListenertoSubmitBtn()