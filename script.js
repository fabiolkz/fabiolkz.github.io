const title = document.querySelector('#title');
const subTitle = document.querySelector('#sub-title');

// console.log(subTitle.textContent.length);


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

// typeWriter(title, setTimeout(() => {
//     subTitle.style.opacity = '100%';
//     typeWriterFaster(subTitle);
// }, 1200));

typeWriterFaster(subTitle)

// // FAZENDO EFEITO DE APARECER 



const aparecerSlowly = () => {
    let primeiroTexto = document.querySelector('#primeiro-texto');
    let segundoTexto = document.querySelector('#segundo-texto');
    let terceiroTexto = document.querySelector('#terceiro-texto');

    setTimeout(() => {
        primeiroTexto.style.opacity = '100%';
    }, 2350)

    setTimeout(() => {
        segundoTexto.style.opacity = '100%';
    }, 3350)

    setTimeout(() => {
        terceiroTexto.style.opacity = '100%';
    }, 4350)
}

aparecerSlowly();
























// typeWriterTitle()

// const typeComplete = () => {

//     typeWriterTitle(title);

//     setTimeout(() => {
//         subTitle.style.opacity = '100%';
//         typeWriterSubTitle(subTitle);
//     }, 12 * 150)
// }

// typeComplete();
