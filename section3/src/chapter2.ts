// unknown 타입

function unknownExam () {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

  // let num: number = unknownVar;
  // let str: string = unknownVar;
}

// Never 타입 
function neverEaxm(){
  function neverFuc(): never{
    while (true){}
  }
  let num: number = neverFuc();
  let str: string = neverFuc();

  // let never1:never = 10;
  // let never2:never = "hello";
}

// void 타입
function voidExam(){
  function voidFunc():void{
    console.log("hi");
    return undefined;
  }

  let voidVar : void = undefined; 
}

// any 타입

function anyExam(){
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never; 

  anyVar = unknownVar; 
  undefinedVar = anyVar;

  // neverVar = anyVar;
}