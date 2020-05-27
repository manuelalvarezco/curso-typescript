class Transporte {
  private velocidad: number;
  private formaDeMovilidad: string;

  constructor(velocidad: number, formaDeMovilidad: string){
    this.velocidad = velocidad;
    this.formaDeMovilidad = formaDeMovilidad;
  }

  getVelocidad(){
    return this.velocidad;
  }

  setVelocidad(velocidad: number){
    this.velocidad = velocidad;
  }
  getformaDeMovilidad(){
    return this.formaDeMovilidad;
  }

  setformaDeMovilidad(formaDeMovilidad: string){
    this.formaDeMovilidad = formaDeMovilidad;
  }


}

const transporte: Transporte = new Transporte(20,'suelo')

class Auto extends Transporte {
  private cantidadDePuertas: number;

  constructor(velocidad: number, formaDeMovilidad: string, cantidadDePuertas: number){
    
    super(velocidad, formaDeMovilidad);

    this.cantidadDePuertas = cantidadDePuertas;

  }

  getVelocidad(){
    return super.getVelocidad() + 10;
  }

  getCantidadDePuertas(){
    return this.cantidadDePuertas;
  }

  setCantidadDePuertas(cantidad: number){
    this.cantidadDePuertas = this.cantidadDePuertas;
  }

}

const auto: Auto = new Auto(10,'suelo',4);