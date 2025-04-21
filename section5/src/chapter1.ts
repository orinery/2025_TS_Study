// 인터페이스의 확장

interface Animal {
  name: string;
  color: string;
}

interface Dog extends Animal {
  // name: "Hello"; //재정의한 타입은 원본 프로퍼티의 서브타입이어야한다.
  isBark: boolean;
}

const dog:Dog = {
  name:"Hello",
  color:"",
  isBark:true,
}

interface Cat extends Animal{
  isScratch: boolean;
}

interface Chicken extends Animal{
  isFly: boolean;
}

interface DogCat extends Dog, Cat{
}

const dogCat: DogCat = {
  name: "",
  color: "",
  isBark: true,
  isScratch: true,
}