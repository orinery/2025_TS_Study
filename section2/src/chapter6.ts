// any 타입
// 특정 변수의 타입을 우리가 확실히 모를 때 사용 (런타임 오류로 인해 최대한 쓰지 않는 것을 추천천)
let anyVar: any = 10;

let num:number = 10;
num = anyVar;

// unknown
let unknownVar: unknown; 

unknownVar = "";
unknownVar = 1;
unknownVar = ()=>{};

if (typeof unknownVar === "number"){
  num = unknownVar; // unknown 타입은 타입을 체크한 후에만 사용 가능
}