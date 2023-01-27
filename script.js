const title = document.querySelector('#title');
const subTitle = document.querySelector('#sub-title');

const typeWriterFaster = (elemento) => {
    const textoArray = elemento.innerHTML.split('');
    textoArray.forEach((letra, i) => {
        elemento.innerHTML = '';
        setTimeout(() => {
            elemento.innerHTML += letra;
        }, 50 * i) 
    })
}

typeWriterFaster(subTitle)

// // FAZENDO EFEITO DE APARECER 


const aparecerSlowly = () => {
    let primeiroTexto = document.querySelector('#primeiro-texto');
    let segundoTexto = document.querySelector('#segundo-texto');
    let terceiroTexto = document.querySelector('#terceiro-texto');

    setTimeout(() => {
        primeiroTexto.style.opacity = '100%';
    }, 1700)

    setTimeout(() => {
        segundoTexto.style.opacity = '100%';
    }, 2700)

    setTimeout(() => {
        terceiroTexto.style.opacity = '100%';
    }, 3700)
}

aparecerSlowly();
