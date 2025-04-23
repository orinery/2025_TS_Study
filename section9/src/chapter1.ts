// 분산적인 조건부 타입

type StringNumberSwitch<T> = T extends number ? string : number; 

let a: StringNumberSwitch<number>

let b: StringNumberSwitch<string>

let c: StringNumberSwitch<number | string>

let d: StringNumberSwitch<boolean | number | string>
// 1 단계
// StringNumberSwitch<boolean> |
// StringNumberSwitch<number> |
// StringNumberSwitch<string>

//2단계
// number |
// string|
// number

// 결과
// number| string


// 실용 예제
type Exclude<T,U> = T extends U ? never : T; // T에서 U를 제외한 타입을 반환하는 조건부 타입

type A = Exclude<number | string| boolean, string>;
// 1단계
// Exclude <number, string> |
// Exclude <string, string> |
// Exclude <boolean, string>

// 2단계
// number |
// never |
// boolean

// 결과
// number | boolean

type Extract<T,U> = T extends U ? T : never; ;

type B = Extract<number | string | boolean, string>

// 1단계
// Exclude <number, string> |
// Exclude <string, string> |
// Exclude <boolean, string>

// 2단계
// never |
// string |
// never

// 결과
// string
