function logParameters(target, propertyName, index){

  const metaDataKey =`log_${propertyName}_parameers`

  if(Array.isArray(target[metaDataKey])){
    target[metaDataKey].push(index)
  }else{
    target[metaDataKey] = [index]
  }

}

class P {
  greet(@logParameters message: string):string {
    return message;
  }

}

const p = new P();

p.greet('Hola');