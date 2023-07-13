
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

const title = document.getElementById('title');

window.addEventListener('scroll', (e)=>{
    for(let i=0; i<300; i++){
        if(window.pageYOffset>i+100){
            title.style.opacity = 1-i/300;
        }
    }
})

const apictureimg = document.getElementsByClassName('a-picture-img');
const aboutpicturesenlarged = document.getElementById('about-pictures-enlarged');
const aboutpicturesenlargedimg = document.getElementById('about-pictures-enlarged-img');
const aboutpicturesenlargedborder = document.getElementById('about-pictures-enlarged-border');
const x = document.getElementById('x');

for(let i=0; i<6; i++){
    apictureimg[i].addEventListener('click', (e)=>{
        let src =apictureimg[i].src;
        aboutpicturesenlargedimg.src = src;
        aboutpicturesenlargedborder.style.opacity = '1';
        aboutpicturesenlargedborder.style.visibility = 'visible';
        aboutpicturesenlarged.style.opacity = '1';
        aboutpicturesenlarged.style.visibility = 'visible';
    })
    aboutpicturesenlargedborder.addEventListener('click', (e)=>{
        aboutpicturesenlargedborder.style.opacity = '0';
        aboutpicturesenlargedborder.style.visibility = 'hidden';
        aboutpicturesenlarged.style.opacity = '0';
        aboutpicturesenlarged.style.visibility = 'hidden';
    })
    x.addEventListener('click', (e)=>{
        aboutpicturesenlargedborder.style.opacity = '0';
        aboutpicturesenlargedborder.style.visibility = 'hidden';
        aboutpicturesenlarged.style.opacity = '0';
        aboutpicturesenlarged.style.visibility = 'hidden';
    })
}


