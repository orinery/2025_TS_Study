// void 타입
// void => 아무것도 없음을 의미하는 타입

function func1():string{
  return"hello";
}

function func2():void{
  console.log("hello")
}

let a : void;
a = undefined; // void는 undefined만 가능

// never 타입
// never ->존재하지 않는, 불가능한 타입

function func3(): never {
  while(true){}
}

function func4(): never{
  throw new Error();
}

