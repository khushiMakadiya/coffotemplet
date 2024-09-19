let leftBtn = document.querySelector('.left-btn');
let rightBtn = document.querySelector('.right-btn');
let coffeBx = document.querySelectorAll('.coffe_bx');

let b = 0;

rightBtn.addEventListener('click', ()=> {

    b++;    
    if(b > coffeBx.length - 1) {

        b = 0;
        coffeBx[0].classList.remove('hide');
        coffeBx[coffeBx.length - 1].classList.add('hide');
    }

    coffeBx[b].classList.remove('hide');
    coffeBx[b - 1].classList.add('hide');
});

leftBtn.addEventListener('click', ()=> {

    b--;
    if(b < 0) {
        b = coffeBx.length - 1;
        coffeBx[0].classList.add('hide');
    }

    coffeBx[b].classList.remove('hide');
    coffeBx[b + 1].classList.add('hide');
});

// NUMBER2.......


let nextBtn = document.querySelector('.next-btn');
let pravBtn = document.querySelector('.prav-btn');
let tropBx = document.querySelectorAll('.trop_bx');

let e = 0;

pravBtn.addEventListener('click', ()=> {

    e++;
    if(e > tropBx.length - 1) {

       e = 0;
       tropBx[0].classList.remove('dis');
       tropBx[tropBx.length - 1].classList.add('dis'); 
    }

    tropBx[e].classList.remove('dis');
    tropBx[e - 1].classList.add('dis');
});

nextBtn.addEventListener('click', ()=> {

    e--;
    if(b < 0) {
        e = tropBx.length - 1;
        tropBx[0].classList.add('dis');
    }

    tropBx[e].classList.remove('dis');
    tropBx[e + 1].classList.add('dis');
});

// NUMBER3......

let topBtn = document.querySelector('.top-btn');
let backBtn = document.querySelector('.back-btn');
let worldBx = document.querySelectorAll('.world_bx');

m = 0;

backBtn.addEventListener('click', ()=> {

    m++;
    if(m > worldBx.length - 1) {

        m = 0;
        worldBx[0].classList.remove('show');
       worldBx[coffeBx.length - 1].classList.add('show');
    }

    worldBx[m].classList.remove('show');
    worldBx[m - 1].classList.add('show');
});

topBtn.addEventListener('click', ()=> {

    m--;
    if(m < 0) {
        m = worldBx.length - 1;
        worldBx[0].classList.add('show');
    }

    worldBx[m].classList.remove('show');
    worldBx[m + 1].classList.add('show');
});

