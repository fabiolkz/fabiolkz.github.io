const title = document.querySelector('#title');
const subTitle = document.querySelector('#sub-title');


const typeWriter = (elemento) => {
    const textoArray = elemento.innerHTML.split('');
    textoArray.forEach((letra, i) => {
        elemento.innerHTML = '';
        setTimeout(() => {
            elemento.innerHTML += letra;
        }, 100 * i) 
    })
}

const typeWriterFaster = (elemento) => {
    const textoArray = elemento.innerHTML.split('');
    textoArray.forEach((letra, i) => {
        elemento.innerHTML = '';
        setTimeout(() => {
            elemento.innerHTML += letra;
        }, 50 * i) 
    })
}

typeWriter(title, setTimeout(() => {
    subTitle.style.opacity = '100%';
    typeWriterFaster(subTitle);
}, 1200));






















// typeWriterTitle()

// const typeComplete = () => {

//     typeWriterTitle(title);

//     setTimeout(() => {
//         subTitle.style.opacity = '100%';
//         typeWriterSubTitle(subTitle);
//     }, 12 * 150)
// }

// typeComplete();
