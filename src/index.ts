import { preguntar } from './lib/consola.ts';

let totalTexto: string = preguntar('Total de la cuenta: ');
let cuentaNúmero: number = Number(totalTexto);

let esEstudiante: string = preguntar('¿Son estudiantes de ORT? si/no: ');
if (esEstudiante === "si") {
    cuentaNúmero = cuentaNúmero * 0.9;
}

let personasTexto: string = preguntar('Dividir la cuenta entre: ');
let personasNúmero: number = Number(personasTexto);

let totalPorPersona: number = cuentaNúmero / personasNúmero;
console.log("Total por persona: $" + totalPorPersona);