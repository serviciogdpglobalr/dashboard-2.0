const abrirCasos = () => {
    if (location.href.endsWith('/src/pages/casos.html')) {
        return
    }
    location.href = './src/pages/casos.html';
}

const abrirSolicitudes = () => {
    location.href = '../../index.html';
}

const abrirCasosNuevos = () => {
    location.href = './casosNuevos.html';
}

const abrirCasos2 = () => {
    location.href = './casos.html';
}

//nuevosContainer.addEventListener('click', abrirCasosNuevos);