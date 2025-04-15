//배열타입을 정의하는 방법.
let numArr:number[] = [1,2,3];
let strArr:string[] =["hello","im","orinery"];
// 하단은 제네릭 문법을 사용했다.
let boolArr:Array<boolean> = [true,false,true];

// 배열에 들어가는 요소들의 타입이 다양한 경우
let multiArr: (number | string)[] = [1,"hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] =[
  [1,2,3],
  [4,5],
];

// 튜플 타입
// 길이와 타입이 고정된 배열
let tup1:[number,number] = [1, 2];

let tup2: [number, string, boolean] = [1,"2", true];

const users:[string, number][] = [
  ["오리너리",1],
  ["김무무", 2],
  ["김토토", 3],
]