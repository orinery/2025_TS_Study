// 선언 합침

interface Person  {
  name: string;
}

interface Person  {
  name: string // 선언 합침은 무조건 타입이 같아야한다.
  age: number;
}
interface Developer extends Person {
  name: "hello";
}

const person: Person = {
  name: "",
  age: 29,
}

// 모듈 보강
interface Lib {
  a: number; 
  b: number; 
}
interface Lib {
  c: string;
}

const lib = {
  a:1,
  b:2,
  c: "hello"
}
