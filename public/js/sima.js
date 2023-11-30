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

const smotuljak = document.getElementById('smotuljak');
const pInSmotuljak = document.getElementById('p-in-smotuljak');
const smotuljakOkvir = document.getElementById('smotuljak-okvir');

smotuljak.addEventListener('click', (e)=>{
        smotuljak.classList.add('smotuljak-transform');
        setTimeout(function(){
            pInSmotuljak.classList.remove('none');
        }, 500);
})

const tpictureimg = document.getElementsByClassName('tpictureimg');
const testamentpicturesenlargedborder = document.getElementById('testament-pictures-enlarged-border');
const testamentpicturesenlarged = document.getElementById('testament-pictures-enlarged');
const testamentpicturesenlargedimg = document.getElementById('testament-pictures-enlarged-img');
const next = document.getElementById('next');
let a;
let brSlika = tpictureimg.length;
for(let i=0; i<brSlika; i++){ 
    tpictureimg[i].addEventListener('click', (e)=>{
    let src = tpictureimg[i].src;
    a = i;
    testamentpicturesenlargedimg.src = src;
    testamentpicturesenlargedborder.classList = 'visible';
    testamentpicturesenlarged.classList = 'visible';
    console.log(a)
})
testamentpicturesenlargedborder.addEventListener('click', (e)=>{
    testamentpicturesenlargedborder.classList = 'hiden';
    testamentpicturesenlarged.classList = 'hiden';
})
}

next.addEventListener('click', (e)=>{
    if(a != 2){
        console.log("cao")
    }
    let src = tpictureimg[a+1].src;
    testamentpicturesenlargedimg.src = src;
    console.log(testamentpicturesenlargedimg.src);
    if(a < 2){
        a = a+1;
    }else{
        a=-1;
    }
        
})




