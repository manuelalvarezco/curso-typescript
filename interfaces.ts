type Dni = number;

interface Persona {
  altura?: number;
  edad: number;
  nombre: string;
  apellido: string;
  dni: Dni;
}

const persona: Persona = {
  edad: 30,
  nombre: 'Manuel',
  apellido: 'Alvarez',
  dni: 234
}