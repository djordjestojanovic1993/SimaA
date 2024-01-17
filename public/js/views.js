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

    if(formName==''){
      formNameInput.focus();
    }else if(formBirthplace==''){
      formBirthplaceInput.focus();
    }else if(formBirthdate==''){
      formBirthdateInput.focus();
    }else if(formAddress==''){
      formAddressInput.focus();
    }else if(formSchool==''){
      formSchoolInput.focus();
    }else if(formSchoolCurrentYear==''){
      formSchoolCurrentYearInput.focus();
    }else if(formWhichTimeYear==''){
      formWhichTimeYearInput.focus();
    }else if(formPhone==''){
      formPhoneInput.focus();
    }else if(formEmail==''){
      formEmailInput.focus();
    }else if(formPriestName==''){
      formPriestNameInput.focus();
    }else if (!pdfInput.files && !pdfInput.files[0]) {
      formEmailInput.focus();
    }

    addInDB(formName,formBirthplace,formBirthdate,formAddress,formSchool,formSchoolCurrentYear,formWhichTimeYear,formPhone,formEmail,formPriestName);



  
}

function dodajPDF() {
    const pdfInput = document.getElementById('pdfInput');
  
    // Simulacija klika na input polje za odabir datoteke
    pdfInput.click();
  
    // Uhvati događaj odabira datoteke
    pdfInput.addEventListener('change', function() {
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
    });
  }

  async function addInDB(formName,formBirthplace,formBirthdate,formAddress,formSchool,formSchoolCurrentYear,formWhichTimeYear,formPhone,formEmail,formPriestName){
    
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
        formData.append(`pdfFiles`, fajl);
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

function asd(){
    let aaca = document.getElementById('aca');
    
    if(aaca.hasClickListener != true){
        aaca.addEventListener('click', ()=>{
          console.log('cao')
          formValidation();
        })
    }
}
asd()