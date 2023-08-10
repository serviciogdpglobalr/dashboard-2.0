// Calculo de la efectividad de las solicitudes

const calcularEfectividadSolicitudes = () => {
    let efectividadSolicitudes = (100 - (erroresSolicitudes * 100) /solicitudesMesEnCurso);
    if (efectividadSolicitudes < 50) {
        luzAmarilla.style.background = '#978E22';
        luzVerde.style.background = '#557E39';
    }
    if (efectividadSolicitudes > 50 && efectividadSolicitudes < 80) {
        luzRoja.style.background = '#8F2730';
        luzVerde.style.background = '#557E39';
    }
    if (efectividadSolicitudes >= 80) {
        luzRoja.style.background = '#8F2730';
        luzAmarilla.style.background = '#978E22';
    }
    solicitudesSpan.textContent = `${efectividadSolicitudes}%`;
}

const calcularEfectividadReportes = () => {
    let efectividadReportes = (100 - (erroresReportes * 100) / reportesEnviados);
    if (efectividadReportes < 50) {
        luzAmarillaReportes.style.background = '#978E22';
        luzVerdeReportes.style.background = '#557E39';
    }
    if (efectividadReportes > 50 && efectividadReportes < 80) {
        luzRojaReportes.style.background = '#8F2730';
        luzVerdeReportes.style.background = '#557E39';
    }
    if (efectividadReportes >= 80) {
        luzRojaReportes.style.background = '#8F2730';
        luzAmarillaReportes.style.background = '#978E22';
    }
    reportesSpan.textContent = `${efectividadReportes}%`;
}

calcularEfectividadSolicitudes();
calcularEfectividadReportes();
