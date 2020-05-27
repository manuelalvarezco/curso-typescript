interface Interface1 {
  prop1: number;
}

interface Interface2 {
  prop2: number;
  prop3: number;
}

interface Interface3 {
  prop2: number;
}


type InterfaceMiz = Interface1 & Interface2;

const interfaceMiz: InterfaceMiz = {
  prop1:2,
  prop2:3,
  prop3:4
}
