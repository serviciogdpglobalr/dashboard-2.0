//Data
let erroresSolicitudes = 0.5;
let solicitudesMesEnCurso = 50;
let erroresReportes = 0;
let reportesEnviados = 41;
let casosNuevos = 11;

// Elementos del DOM
const solicitudesSpan = document.querySelector('.efectividad-solicitudes');
const reportesSpan = document.querySelector('.cumplimiento-reportes');
const luzRoja = document.querySelector('.rojo');
const luzAmarilla = document.querySelector('.amarillo');
const luzVerde = document.querySelector('.verde');
const luzRojaReportes = document.querySelector('.rojo-reportes');
const luzAmarillaReportes = document.querySelector('.amarillo-reportes');
const luzVerdeReportes = document.querySelector('.verde-reportes');
const promediosDiagnostico = document.querySelector('.promedios-diagnostico');
const promediosDesarrollo = document.querySelector('.promedios-desarrollo');
const promediosCerrados = document.querySelector('.promedios-cerrados');
const toolTip1 = document.querySelector('.tooltip1');
const toolTip2 = document.querySelector('.tooltip2');
const toolTip3 = document.querySelector('.tooltip3');

//Elementos del DOM para navegación
const nuevosContainer = document.querySelector('.nuevos-container');