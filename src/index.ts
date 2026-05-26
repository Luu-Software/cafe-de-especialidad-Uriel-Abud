import { preguntar } from './lib/consola.ts';

let totalTexto: string = preguntar('Total de la cuenta: ');
let totalNúmero: number = Number(totalTexto);

let esEstudiante: string = preguntar('¿Son estudiantes de ORT? si/no: ');
if (esEstudiante === "si") {
    totalNúmero = totalNúmero * 0.9;
}

let personasTexto: string = preguntar('Dividir la cuenta entre: ');
let personasNúmero: number = Number(personasTexto);

let totalPorPersona: number = totalNúmero / personasNúmero;
console.log("Total por persona: $" + totalPorPersona);