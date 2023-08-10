const toolTip1Display = () => {
    toolTip1.style.display = 'block';
}

const toolTip1None = () => {
    toolTip1.style.display = 'none';
}

const toolTip2Display = () => {
    toolTip2.style.display = 'block';
}

const toolTip2None = () => {
    toolTip2.style.display = 'none';
}

const toolTip3Display = () => {
    toolTip2.style.display = 'block';
}

const toolTip3None = () => {
    toolTip3.style.display = 'none';
}

promediosDiagnostico.addEventListener("click", toolTip1Display);
promediosDesarrollo.addEventListener("click", toolTip2Display);
promediosCerrados.addEventListener("click", toolTip3Display);
toolTip1.addEventListener("click", toolTip1None);
toolTip2.addEventListener("click", toolTip2None);
toolTip3.addEventListener("click", toolTip3None);