class Persona {
  private altura: number;
  private edad : number;
  private dni: string;

  constructor(altura: number, edad: number, dni: string){
    this.altura = altura;
    this.edad = edad;
    this.dni = dni;
  }

}

class Alumno extends Persona {

  private matricula: string;

  constructor(altura: number, edad: number, dni: string, matricula: string){
    super(altura, edad, dni);

    this.matricula = matricula;

  }
}

let persona: Persona = new Persona(30, 175,'123');

let alumno: Alumno = new Alumno(30, 175,'123','222');

persona = alumno

alumno = persona



