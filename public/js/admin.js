function readAdvertisementsFromDB() {
    const url = '/advertisement';
  
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(url);
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const data = await response.json();
        resolve(data);
      } catch (error) {
        console.error('There was a problem fetching the data:', error);
        reject(error);
      }
    });
  }

async function showAdvertisements(){
    try{
        let advertisements = await readAdvertisementsFromDB();
        console.log(advertisements);
        const advertisementTemplate = document.getElementById('advertisement-template');
        const advertisementpPototype = advertisementTemplate.content.getElementById('advertisement');
        const aca = document.getElementsByClassName('advertisement');
        const advertisementList = document.getElementById('advertisement-list');
        for(let advertisement of advertisements){
            console.log(advertisement.title)
            const clone = advertisementpPototype.cloneNode(true);
            clone.getElementsByClassName('advertisement-list-title')[0].value = advertisement.title;
            clone.getElementsByClassName('advertisement-list-title')[0].disabled = 'true';
            clone.id = advertisement._id;
            advertisementList.appendChild(clone);
        }

    }catch (error) {
        console.log("Došlo je do greške prilikom prikaza konkursa ");
    }
    // addEventListenerToDeleteButtons();
}
showAdvertisements();

async function addAdvertisementInDB(title, text){
    let response = await fetch('/advertisement/new', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            title: title,
            text: text
        })
    })
    
    if(response.status == 201){
        let data = await response.json();
        console.log(data);
    }
}

async function addEventListenerAdvertisementSubmitButton(){
    const advertisementSubmitButton = document.getElementById('advertisement-submit');

    if(advertisementSubmitButton.hasClickListener != true){
        advertisementSubmitButton.addEventListener('click', async function(){
            const titleInput = document.getElementById('advertisement-title');
            const textInput = document.getElementById('advertisement-text');
            const title = titleInput.value;
            const text = textInput.value;
            try {
                // console.log(title + "\n" + text)
                await addAdvertisementInDB(title, text);
            } catch (error) {
                console.log("Došlo je do greške: gggggg");
            }
        })
    }
}
addEventListenerAdvertisementSubmitButton();

function showForm(){
    let addBtn = document.getElementById('add-btn');
    let form = document.getElementById('form');
    let formAround = form.parentElement;
    addBtn.addEventListener('click', (e)=>{
        console.log('ada')
        formAround.classList.remove('none');
    })
}
showForm();

function closeForm(){
    let clearBtn = document.getElementById('clear-btn');
    console.log(clearBtn)
    clearBtn.addEventListener('click', ()=>{
        console.log(clearBtn)
        location.reload();
    })
}
closeForm();