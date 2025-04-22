// 제네릭

// 제네릭 함수 (함수의 인수에 따라서 반환값의 타입을 가변적으로 정해줌)
// 모든 타입에 두루두루 범용적으로 사용할 수 있는 함수
function func<T>(value: T):T{
  return value;
}

let num = func(10);
// num.toUpperCase();

if (typeof num === "number"){
  num.toFixed();
}

let bool = func(true);
let str = func("string");
let arr = func<[number,number,number]>([1,2,3])