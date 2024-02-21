async function readAdvertisementsFromDB() {
    const url = '/advertisement';
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was a problem fetching the data:', error);
        return null;
    }
    
  }

async function showAdvertisements(){
    try{
        let advertisements = await readAdvertisementsFromDB();
        if(advertisements == null){
            throw new Error("Greska, nije moguce dohvatiti konkurse!");
        }
        const advertisementTemplate = document.getElementById('advertisement-template');
        const advertisementpPototype = advertisementTemplate.content.getElementById('advertisement');
        const aca = document.getElementsByClassName('advertisement');
        const advertisementList = document.getElementById('advertisement-list');
        for(let advertisement of advertisements){
            const clone = advertisementpPototype.cloneNode(true);
            clone.getElementsByClassName('advertisement-list-title')[0].value = advertisement.title;
            if(advertisement.date != ""){
                clone.getElementsByClassName('advertisement-list-date')[0].classList.remove('none')
                clone.getElementsByClassName('advertisement-list-date')[0].value = advertisement.date;

            }
            clone.getElementsByClassName('advertisement-list-date')[0].value = advertisement.date;
            clone.getElementsByClassName('advertisement-list-text')[0].value = decodeURIComponent(advertisement.text);
            clone.getElementsByClassName('advertisement-list-subtitle')[0].value = advertisement.subtitle;
            clone.getElementsByClassName('advertisement-list-title')[0].disabled = 'true';
            if(advertisement.type == 'vest'){
                clone.getElementsByClassName('advertisement-type-img')[0].src = 'pictures/admin/news.png';
            }else if(advertisement.type == 'stipendista'){
                clone.getElementsByClassName('advertisement-type-img')[0].src = 'pictures/admin/person.png';
            }else{
                clone.getElementsByClassName('advertisement-type-img')[0].src = 'pictures/admin/competition.png';
                clone.getElementsByClassName('advertisement-files-btn')[0].classList.remove('none');
            }
            clone.id = advertisement._id;
            advertisementList.appendChild(clone);
        }
        addEventListenerToDeleteBtns();
        addEventListenerToChangeBtns();
        addEventListenerToshowAdvertisementFiles();
        activateSearch();

    }catch (error) {
        console.log("Došlo je do greške prilikom prikaza konkursa ");
    }
}
showAdvertisements();



async function addAdvertisementInDB(title, text, date, type, subtitle){
    
    const imageInput = document.getElementById('imageInput');
    let resizedBlob;
    const formData = new FormData();
    formData.append('title', title);
    formData.append('subtitle', subtitle);
    formData.append('text', text);
    formData.append('date', date);
    formData.append('type', type);
    if (imageInput.files && imageInput.files[0]) {
        try{
            resizedBlob = await resizeImage(imageInput.files[0], 500, 1000);
        }catch(err){
            alert("Greske pokusajte ponovo")
            console.log(err)
        }
    }
    // console.log(resizedBlob)
    formData.append('image', resizedBlob, imageInput.files[0].name);
    // console.log(formData)
    try{

        const options = {
            method: 'POST',
            body: formData
        };
        let response = await fetch("/advertisement/new", options);
        let data = await response.json();
        console.log(data);
        showSuccessfullyAdded();

    }catch(err){
        alert("Greska");
        console.log(err)
    }
}

function showSuccessfullyAdded(){
    let successfullyAddedDiv = document.getElementById('successfully-added-div');
    let formAround = document.getElementById('form-around');
    successfullyAddedDiv.classList.remove('none');
    if(successfullyAddedDiv.hasClickListener != true){
        successfullyAddedDiv.addEventListener('click', ()=>{
            location.reload();
        })
    }
}

async function addEventListenerAdvertisementSubmitButton(){
    const advertisementSubmitButton = document.getElementById('add-btn-form');
    if(advertisementSubmitButton.hasClickListener != true){
        advertisementSubmitButton.addEventListener('click', async function(){
            const titleInput = document.getElementById('form-first-input');
            const textInput = document.getElementById('form-second-input');
            const dateInput = document.getElementById('form-third-input');
            const subtitleInput = document.getElementById('form-subtitle-input');
            const radioButtons = document.querySelectorAll('input[type="radio"]');
            const title = titleInput.value;
            const subtitle = subtitleInput.value;
            const text = encodeURIComponent(textInput.value);
            const date = dateInput.value;
            let type = radioButtons[0].value;
            for(let radioButton of radioButtons){
                if (radioButton.checked){
                    type = radioButton.value;
                }
            }
            try {
                // console.log(title + "\n" + text)
                await addAdvertisementInDB(title, text, date, type, subtitle);
            } catch (error) {
                console.log("Došlo je do greške: gggggg");
            }
        })
    }
}

function showForm(){
    let addBtn = document.getElementById('add-btn');
    let form = document.getElementById('form');
    let formAround = form.parentElement;
    addBtn.addEventListener('click', (e)=>{
        formAround.classList.remove('none');
        whenRadioButtonIsChanged();
        addEventListenerAdvertisementSubmitButton();
        addPicture();
    })
}
showForm();

function closeForm(){
    let clearBtn = document.getElementById('clear-btn');
    // console.log(clearBtn)
    clearBtn.addEventListener('click', ()=>{
        location.reload();
    })
}
closeForm();

function changeForm(radioButton){
    let formFirstInput = document.getElementById('form-first-input');
    let formSecondInput = document.getElementById('form-second-input');
    let formThirdInput = document.getElementById('form-third-input');

    if(radioButton.value == 'konkurs'){
        formThirdInput.disabled = '';
        formFirstInput.placeholder = 'Naslov'
        formSecondInput.placeholder = 'Text'

    }else if(radioButton.value == 'vest'){
        formThirdInput.disabled = 'true';
        formFirstInput.placeholder = 'Naslov'
        formSecondInput.placeholder = 'Text'
        console.log(formThirdInput.value)
        formThirdInput.value = ''
    }else{
        formFirstInput.placeholder = 'Ime i Prezime'
        formSecondInput.placeholder = 'Opis'
        formThirdInput.disabled = 'true';
        formThirdInput.value = ''
    }
}

function whenRadioButtonIsChanged(){
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    for(let radioButton of radioButtons){
        radioButton.addEventListener('change',()=>{
            changeForm(radioButton);
        })
    }
}

function addEventListenerToChangeBtns(){
    let advertisementChangeBtns = document.getElementsByClassName('advertisement-change-btn');

    for(let changeBtn of advertisementChangeBtns){
        if(changeBtn.hasClickListener != true){
            changeBtn.addEventListener('click', (e)=>{
                let advertisement = changeBtn.parentElement.parentElement.parentElement;
                activateAdvertisementForChange(advertisement);
            })
        }
    }
}
function addEventListenerToshowAdvertisementFiles(){
    let advertisementFilesBtns = document.getElementsByClassName('advertisement-files-btn');

    for(let filesBtn of advertisementFilesBtns){
        if(filesBtn.hasClickListener != true){
            filesBtn.addEventListener('click', (e)=>{
                let advertisement = filesBtn.parentElement.parentElement.parentElement;
                console.log(advertisement);
            })
        }
    }

}

async function activateAdvertisementForChange(advertisement){
    let invisiblePart = advertisement.getElementsByClassName('advertisement-invisible-part');
    invisiblePart[0].classList.remove('none');
    let title = advertisement.getElementsByClassName('advertisement-list-title');
    advertisement.getElementsByClassName('advertisement-icons')[0].classList.add('none');
    title[0].disabled = '';
    title[0].classList.add('form-input');
    advertisement.getElementsByClassName('advertisement-type-img')[0].classList.add('none');
    let advImg = advertisement.getElementsByClassName('advertisement-img-view');
    let advImgChange = advertisement.getElementsByClassName('advertisement-change-img');
    advertisement.getElementsByClassName('advertisement-list-date')[0].disabled = '';
    advertisement.getElementsByClassName('advertisement-list-date')[0].classList.add('form-input');
    
    advImg[0].classList.remove('none');
    advImgChange[0].classList.remove('none');
    let advertisements = await readAdvertisementsFromDB();
    for(let advert of advertisements){
        if(advertisement.id == advert._id){
            if(advert.img != 'Slika'){
                let path = "pictures/upload/" + advert.img;
                advImg[0].src = path;
            }
            
        }
    }

    changePicture(advertisement);
    activateChangeAdvertisementNoButton(advertisement);
    activateChangeAdvertisementYesButton(advertisement);
}

async function changePicture(advertisement){
    let advertisementChangeImgBtn = advertisement.getElementsByClassName('advertisement-change-img-btn');
    
    if(advertisementChangeImgBtn[0].hasClickListener != true){
        advertisementChangeImgBtn[0].addEventListener('click', async ()=>{
            advertisement.getElementsByClassName('imageChangeInput')[0].click();
        });
    }
    
    advertisement.getElementsByClassName('imageChangeInput')[0].addEventListener('change',async (e)=>{
       await handleChangedImage(e, advertisement);
    });  
    return;
}
async function handleChangedImage(event, advertisement) {
    const selectedImage = event.target.files[0];
    let advImg = advertisement.getElementsByClassName('advertisement-img-view');
    let resizedBlob;
    if (event.target.files && event.target.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            advImg[0].src = e.target.result;
        };
        reader.readAsDataURL(event.target.files[0]);
    }
}
function activateChangeAdvertisementNoButton(advertisement){
    let noBtn = advertisement.getElementsByClassName('dont-save-change-btn');
    if(noBtn[0].hasClickListener != true){
        noBtn[0].addEventListener('click', ()=>{
            location.reload();
        })
    }
}
async function activateChangeAdvertisementYesButton(advertisement){

    let yesBtn = advertisement.getElementsByClassName('save-change-btn');
    let titleInput = advertisement.getElementsByClassName('advertisement-list-title');
    let subtitleInput = advertisement.getElementsByClassName('advertisement-list-subtitle');
    let textInput = advertisement.getElementsByClassName('advertisement-list-text');
    let dateInput = advertisement.getElementsByClassName('advertisement-list-date');
    
    if(yesBtn[0].hasClickListener != true){
        yesBtn[0].addEventListener('click', async ()=>{
            let title = titleInput[0].value;
            let subtitle = subtitleInput[0].value;
            let text = encodeURIComponent(textInput[0].value);
            let date = dateInput[0].value;
            let id = advertisement.id;

            const imageInput = advertisement.getElementsByClassName('imageChangeInput');
            let resizedBlob;
            const formData = new FormData();
            formData.append('title', title);
            formData.append('subtitle', subtitle);
            formData.append('text', text);
            formData.append('date', date);
            formData.append('id', id);
            if (imageInput[0].files && imageInput[0].files[0]) {
                try{
                    resizedBlob = await resizeImage(imageInput[0].files[0], 500, 1000);
                    console.log(resizedBlob)
                }catch(err){
                    alert("Greske pokusajte ponovo")
                    console.log(err)
                }
            }else{
                activateChangeAdvertisementYesButtonWidthoutPicture(advertisement);
                return;
            }
            formData.append('image', resizedBlob, imageInput[0].files[0].name);
            try{

                const options = {
                    method: 'POST',
                    body: formData
                };
                let response = await fetch("/advertisement/change", options);
                let data = await response.json();
                console.log(data);
        
            }catch(err){
                alert("Greska");
                console.log(err)
            }
        })
    }

function activateChangeAdvertisementYesButtonWidthoutPicture(advertisement){
    let yesBtn = advertisement.getElementsByClassName('save-change-btn');
    let titleInput = advertisement.getElementsByClassName('advertisement-list-title');
    let subtitleInput = advertisement.getElementsByClassName('advertisement-list-subtitle');
    let textInput = advertisement.getElementsByClassName('advertisement-list-text');
    let dateInput = advertisement.getElementsByClassName('advertisement-list-date');
}
if(yesBtn[0].hasClickListener != true){
    yesBtn[0].addEventListener('click', async ()=>{
        let title = titleInput[0].value;
        let text = encodeURIComponent(textInput[0].value);
        let subtitle = subtitleInput[0].value;
        let date = dateInput[0].value;
        let id = advertisement.id;

        try {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Dodano postavljanje Content-Type na application/json
                },
                body: JSON.stringify({
                    title: title,
                    subtitle: subtitle,
                    text: text,
                    date: date,
                    id: id
                })
            };
        
            let response = await fetch("/advertisement/changeWidthoutPicture", options);
            let data = await response.json();
            console.log(data);
        } catch (err) {
            alert("Greška");
            console.log(err);
        }

    })
}
    // console.log(resizedBlob)
    
    // console.log(formData)
    

    
}



async function changeAdvertisementInDB(id, title, text, date){

    const formData = new FormData();
    formData.append('title', title);
    formData.append('text', text);
    formData.append('date', date);
    formData.append('id', id);
    try{

        const options = {
            method: 'POST',
            body: formData
        };
        let response = await fetch("/advertisement/change", options);
        let data = await response.json();
        // console.log(data);

    }catch(err){
        alert("Greska");
        console.log(err)
    }
}

function addEventListenerToDeleteBtns(){
    let advertisementDeleteBtns = document.getElementsByClassName('advertisement-delete-btn');
    let sureWantDeleteYesBtns = document.getElementsByClassName('sure-want-delete-yes');

    for(let delBtn of advertisementDeleteBtns){  
        if(delBtn.hasClickListener != true){
            delBtn.addEventListener('click', ()=>{
                let advertisement = delBtn.parentElement.parentElement.parentElement;
                let sureWantDeleteDivs = advertisement.getElementsByClassName('sure-want-delete');
                sureWantDeleteDivs[0].classList.remove('none');
                
                 let sureWantDeleteNo = sureWantDeleteDivs[0].getElementsByClassName('sure-want-delete-no');
                 if(sureWantDeleteNo[0].hasClickListener != true){
                    sureWantDeleteNo[0].addEventListener('click', ()=>{
                        sureWantDeleteDivs[0].classList.add('none');
                    })
                 }
            addEventListenetToYesDeleteBtn(sureWantDeleteDivs[0], advertisement);
            })
        }
    }
}

function addEventListenetToYesDeleteBtn(sureWantDeleteDiv, advertisement){
    let sureWantDeleteYes = sureWantDeleteDiv.getElementsByClassName('sure-want-delete-yes');
    
    if(sureWantDeleteYes[0].hasClickListener != true){
        sureWantDeleteYes[0].addEventListener('click',()=>{
            let ID = advertisement.id;
            deleteAdvertisementFromDB(ID);
            location.reload();
            
        })
    }
}

async function deleteAdvertisementFromDB(ID){
    console.log(ID)
    let response = await fetch('/advertisement/delete', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            ID: ID
        })
    })
    
    if(response.status == 201){
        let data = await response.json();
    }
}

async function handleImage(event) {
    const selectedImage = event.target.files[0];
    let previewImg = document.getElementById('preview-img');
    previewImg.classList.remove('none')
    let resizedBlob;
    if (event.target.files && event.target.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            previewImg.src = e.target.result;
            // previewImg.style.display="block";
        };
        reader.readAsDataURL(event.target.files[0]);
    }
}

async function addPicture(){
    let addPictureBtn = document.getElementById('add-picture-btn');
    
    if(addPictureBtn.hasClickListener != true){
        addPictureBtn.addEventListener('click', async ()=>{
            document.getElementById('imageInput').click();
        });
    }
    
    document.getElementById('imageInput').addEventListener('change',async (e)=>{
       await handleImage(e);
    });  
    return;
}

async function resizeImage(file, maxWidth, maxHeight) {
    return new Promise((resolve, reject) => {
        const img = new Image();

        img.onload = function () {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            // Calculate the new dimensions while maintaining the aspect ratio
            let newWidth = img.width;
            let newHeight = img.height;
            if (newWidth > maxWidth) {
                newHeight = (maxWidth / newWidth) * newHeight;
                newWidth = maxWidth;
            }
            if (newHeight > maxHeight) {
                newWidth = (maxHeight / newHeight) * newWidth;
                newHeight = maxHeight;
            }

            canvas.width = newWidth;
            canvas.height = newHeight;

            ctx.drawImage(img, 0, 0, newWidth, newHeight);

            // Convert the canvas to a blob and resolve the promise with the blob
            canvas.toBlob(resolve, 'image/jpeg', 0.9); // You can change the format and quality here
        };

        img.onerror = reject;

        img.src = URL.createObjectURL(file);
    });
}

function search(){
    let searchInput = document.getElementById('search-input')
    let searchContent = searchInput.value.toUpperCase();
    let advertisements = document.getElementsByClassName('advertisement');

    for(advertisement of advertisements){
        let title = advertisement.getElementsByClassName('advertisement-list-title')[0].value;

        if((title.toUpperCase().indexOf(searchContent) > -1)){
            advertisement.style.display = "";
        }else{
            advertisement.style.display = "none";
        }
    }
}
function activateSearch(){
    let searchInput = document.getElementById('search-input')
    searchInput.addEventListener('keyup', search);
}