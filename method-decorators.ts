function log(target, key) {
  console.log(key, 'se ha llamadao');
}

class Persona {
  private name: string;

  constructor(name: string){
    this.name = name;
  }

  @log
  sayMyName(){
    console.log(this.name);
  }


}


const persona: Persona = new Persona('Manuel');

persona.sayMyName(); // 'Manuel' // 'sayMyName   se ha llamado'