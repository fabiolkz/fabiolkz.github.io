const title = document.querySelector('#title');
const subTitle = document.querySelector('#sub-title');

const typeWriterTitle = (elemento) => {
    const textoArray = elemento.innerHTML.split('');
    textoArray.forEach((letra, i) => {
        elemento.innerHTML = '';
        setTimeout(() => {
            elemento.innerHTML += letra;
        }, 100 * i) 
    })
}

const typeWriterSubTitle = (elemento) => {
    const textoArray = elemento.innerHTML.split('');
    textoArray.forEach((letra, i) => {
        elemento.innerHTML = '';
        setTimeout(() => {
            elemento.innerHTML += letra;
        }, 50 * i) 
    })
}

const typeComplete = () => {

    typeWriterTitle(title);

    setTimeout(() => {
        subTitle.style.opacity = '100%';
        typeWriterSubTitle(subTitle);
    }, 12 * 100)
}

typeComplete();
