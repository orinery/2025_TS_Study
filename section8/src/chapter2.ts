// keyof 연산자
// keyof 연산자는 객체 타입의 키를 유니온 타입으로 반환합니다.

// interface Person{
//   name: string;
//   age: number;
// }

type Person = typeof person; //타입을 뽑아내는 용도

function getPropertyKey(person:Person, key: keyof Person){
  return person[key];
}

const person = {
  name: "오리너리",
  age:29
}

getPropertyKey(person,"name") //오리너리
