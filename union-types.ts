type sumaParameter = string | number;
type sumaReturnType = string | number;


function suma(num1: sumaParameter, num2: sumaParameter): sumaReturnType {
  return String(num1) + num2;
}

interface InterfaceOne {
  prop1: number;
}

interface InterfaceTwo {
  prop2: number;
}

type InterfaceMix = InterfaceOne | InterfaceTwo;

const interfaceMix : InterfaceMix {
  prop1 = 2,
  prop2 = 2
}