const nav = document.getElementsByTagName('nav');
const navul1 = document.getElementById('nav-ul1');

window.addEventListener('scroll', (e)=>{
    if(window.pageYOffset>80){
        nav[0].style.backgroundColor = 'rgb(77, 21, 21)';
        navul1.style.backgroundColor = 'rgb(77, 21, 21)';
    }
    else{
        nav[0].style.backgroundColor = 'transparent';
        navul1.style.backgroundColor = 'transparent';
    }
    
})

function openSimasText(){
    const simaAboutFirstPicture = document.getElementsByClassName('sima-about-first-picture');
    const simaAboutSecondPicture = document.getElementsByClassName('sima-about-second-picture');
    const simaAboutSecondPictureImg = document.getElementsByClassName('sima-about-second-picture-img')
    const simaAboutSecondPictureP = document.getElementsByClassName('sima-about-second-picture-p')

    simaAboutFirstPicture[0].addEventListener('click', ()=>{
        simaAboutFirstPicture[0].classList.add('hidden')
        simaAboutSecondPicture[0].classList.remove('hidden')
        simaAboutSecondPictureImg[0].classList.add('visible')
        setTimeout(function(){
            simaAboutSecondPictureP[0].classList.remove('hidden')

        },600)
    })
}
openSimasText();


function showLargeImg(){
    const tpictureimg = document.getElementsByClassName('tpictureimg');
    const testamentpicturesenlargedborder = document.getElementById('testament-pictures-enlarged-border');
    const testamentpicturesenlarged = document.getElementById('testament-pictures-enlarged');
    const testamentpicturesenlargedimg = document.getElementById('testament-pictures-enlarged-img');
    let avariable1;
    let avariable2;
    let brSlika = tpictureimg.length;
    for(let i=0; i<brSlika; i++){ 
        tpictureimg[i].addEventListener('click', (e)=>{
        let src = tpictureimg[i].src;
        avariable1 = i;
        avariable2 = i;
        testamentpicturesenlargedimg.src = src;
        testamentpicturesenlargedborder.classList.remove("hidden");
        testamentpicturesenlarged.classList.remove("hidden");
        addEventListenerToRightArrow(brSlika, avariable1, tpictureimg, testamentpicturesenlargedimg);
        addEventListenerToLeftArrow(brSlika, avariable2, tpictureimg, testamentpicturesenlargedimg);
    })
        testamentpicturesenlargedborder.addEventListener('click', (e)=>{
            testamentpicturesenlargedborder.classList.add("hidden");
            testamentpicturesenlarged.classList.add("hidden");
        })
    }
}
showLargeImg()

function addEventListenerToRightArrow(brSlika, avariable1, tpictureimg, testamentpicturesenlargedimg){
    console.log(avariable1)
    const next = document.getElementById('next-picture-arrow');
    next.addEventListener('click', (e)=>{
        if(avariable1 == brSlika-1){
            avariable1=-1;
        }
        let src = tpictureimg[avariable1+1].src;
        testamentpicturesenlargedimg.src = src;
        if(avariable1 < brSlika-1){
            avariable1 = avariable1+1;
        }else{
            avariable1=-1;
        }
            
    })

}

function addEventListenerToLeftArrow(brSlika, avariable2, tpictureimg, testamentpicturesenlargedimg){

    const previous = document.getElementById('previous-picture-arrow');
    previous.addEventListener('click', (e)=>{
        if(avariable2==0){
            avariable2=brSlika;
        }
        let src = tpictureimg[avariable2-1].src;
        testamentpicturesenlargedimg.src = src;
        if(avariable2 > 0){
            avariable2 = avariable2-1;
        }else{
            avariable2=brSlika;
        }
            
    })

}



const apictureimg = document.getElementsByClassName('galery-img');
const aboutpicturesenlarged = document.getElementById('galery-pictures-enlarged');
const aboutpicturesenlargedimg = document.getElementById('galery-pictures-enlarged-img');
const aboutpicturesenlargedborder = document.getElementById('galery-pictures-enlarged-border');
const x = document.getElementById('x');

for(let i=0; i<apictureimg.length; i++){
    apictureimg[i].addEventListener('click', (e)=>{
        let src =apictureimg[i].src;
        aboutpicturesenlargedimg.src = src;
        aboutpicturesenlargedborder.classList.remove('hidden')
        aboutpicturesenlarged.classList.remove('hidden')
    })
    aboutpicturesenlargedborder.addEventListener('click', (e)=>{
        aboutpicturesenlargedborder.classList.add('hidden')
        aboutpicturesenlarged.classList.add('hidden')
    })
    x.addEventListener('click', (e)=>{
        aboutpicturesenlargedborder.classList.add('hidden')
        aboutpicturesenlarged.classList.add('hidden')
    })
}
