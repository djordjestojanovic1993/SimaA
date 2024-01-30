
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
        if(window.pageYOffset>i+0){
            title.style.opacity = 1-i/450;
        }
    }
})

// const probamejs = document.getElementById('probamejs')
// probamejs.addEventListener('click', ()=>{
//     window.location.href = '/ejs_page';
// })

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

const clanoviUpravnogOdbora = document.getElementsByClassName('upravni-odbor-slide');
const upravniOdborStrelicaDesno = document.getElementById('upravni-odbor-strelica-desno');
const upravniOdborStrelicaLevo = document.getElementById('upravni-odbor-strelica-levo');

function slideMembersUpravnogOdbora(){
    let brClanovaUpravnogOdbora = clanoviUpravnogOdbora.length;
    let brojac = 0;
    upravniOdborStrelicaDesno.addEventListener('click', (e)=>{
        
        clanoviUpravnogOdbora[brojac].classList.remove("visible");
        if(brojac==brClanovaUpravnogOdbora-1){
            brojac=-1;
        }
        clanoviUpravnogOdbora[brojac+1].classList.add("visible");
        brojac = brojac+1;
    })
    upravniOdborStrelicaLevo.addEventListener('click', (e)=>{
        clanoviUpravnogOdbora[brojac].classList.remove("visible");
        if(brojac==0){
            brojac=brClanovaUpravnogOdbora;
        }
        clanoviUpravnogOdbora[brojac-1].classList.add("visible");
        brojac = brojac-1;
    })
}
slideMembersUpravnogOdbora();

const navUl1 = document.getElementById("nav-ul1");

function hamburger(){
    const line1 = document.getElementById('line1');
    const line2 = document.getElementById('line2');
    const line3 = document.getElementById('line3');
    const hamburger = document.getElementById('hamburger');
    const list = document.querySelector('nav ul');
    const listA = document.getElementsByClassName('nav-a');
    const nav = document.querySelector('nav');
    const arrowHero = document.getElementById("arrow-hero");
    let clicked1 = false;


    const openList = function(){
        line1.style.transform = "rotate(45deg)";
        line2.style.transform = "scaleY(0) li";
        line3.style.transform = "rotate(-45deg)";
        list.style.display = "flex";
        if(!nav.classList.contains('scrolled')){
            nav.classList.add('scrolled');
            addedScrolled = true;
        }
        clicked = true;
    }
    const closeList = function(){
        line1.style.transform = "rotate(0deg)";
        line2.style.transform = "scaleY(1)";
        line3.style.transform = "rotate(0deg)";
        list.style.display = "none";
        // navUl1.style.opacity = "0";
        // navUl1.style.visibility = "hidden";
        if(addedScrolled){
            nav.classList.remove('scrolled');
            addedScrolled = false;
        }
        clicked = false;
        clicked1 = false;
    }

    let addedScrolled = false;
    let clicked = false;

    hamburger.addEventListener('click', function(){
        if(clicked === false){
            openList();
        }else{
            closeList();
        }
    });

    for(let navA of listA){
        navA.addEventListener('click', function(){
            // if(clicked1 === true)
                closeList();
        });
    }

    const openHeroList = function(){
        navUl1.style.display = "flex";
        navUl1.style.opacity = "1";
        navUl1.style.visibility = "visible";
        // if(!nav.classList.contains('scrolled')){
        //     nav.classList.add('scrolled');
        //     addedScrolled = true;
        // }
        clicked1 = true;
    }

    const closeHeroList = function(){
        navUl1.style.opacity = "0";
        navUl1.style.visibility = "hidden";
        // if(!nav.classList.contains('scrolled')){
        //     nav.classList.add('scrolled');
        //     addedScrolled = true;
        // }
        clicked1 = false;
    }

    arrowHero.addEventListener('click', function(){
        if(clicked1 === false){
            openHeroList();
        }else{
            closeHeroList();
        }
    });

}
hamburger();
