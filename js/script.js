const imgBlock = document.querySelector('.img-block img');
const gallery = document.querySelectorAll('.gallery img');
const specifications = document.querySelector('.specifications');
const specBtn1 = document.querySelectorAll('nav a')[2];
const specBtn2 = document.querySelector('.spec a');
let imgNumber = 0;

run = setInterval( () => {
    imgBlock.src = gallery[imgNumber].src;
    imgNumber++;
if (imgNumber >= gallery.length) {
    imgNumber = 0;
}
    imgBlock.src = gallery[imgNumber].src;
}, 1500);

for (let i = 0; i < gallery.length; i++) {
    gallery[i].addEventListener('click', () => {
        clearInterval(run);
        imgBlock.src = gallery[i].src;
    });
}

specBtn1.addEventListener('click', () => {
    if (specifications.className == "specifications") {
        specifications.classList.add('active');
        specBtn2.innerHTML = 'Сховати технічні характеристики'
    }
    else{
        specifications.classList.remove('active');
        specBtn2.innerHTML = 'Повні технічні характеристики'
    }
});

specBtn2.addEventListener('click', () => {
    if (specifications.className == "specifications") {
        specifications.classList.add('active');
        specBtn2.innerHTML = 'Сховати технічні характеристики'
    }
    else{
        specifications.classList.remove('active');
        specBtn2.innerHTML = 'Повні технічні характеристики'
    }
});