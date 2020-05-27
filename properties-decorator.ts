function logProperty(target,key) {
  let _val = target[key];

  const getter = () =>{
    console.log(`Get: ${key} => ${_val}`);
  }

  const setter = (newValue)=>{
    console.log(`Get: ${key} => ${newValue}`);
    
    _val = newValue
  }

  const objectProperty = {
    get: getter,
    set: setter
  }

  Object.defineProperties(target,key, objectProperty);

}

class Persona {
  public name: string;

  constructor(name: string){
    this.name = name;
  }
}

const p = new Persona('Manuel');
p.name = 'Platzi';

const nameFromClass = p.name; 