// 객체 타입을 정의하는 방법
// 객체 리터럴 타입
// 타입 스크립트는 구조를 기준으로 타입을 정의한다.(구조적 타입 시스템)
let user:{
  id?:number; // ?는 선택적 프로퍼티를 의미한다. (optional property)
  name:string;
} = {
  id: 1,
  name: "orinery",
}

let config: {
  readonly apiKey:string;
}= {
  apiKey: "my api key",
};