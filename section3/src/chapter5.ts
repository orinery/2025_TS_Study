// 타입 추론
// 타입스크립트는 자동으로 변수의 타입을 추론할 수 있다.

let a = 10;// number
let b = "hello";
let c = {
  id: 0,
  name: "오리너리",
  profile: {
    nickname:"오리너리"
  },
  urls: [ "https://www.naver.com"]
};

let { id, name, profile} = c;
let [one, two, three] = [1,"hello",true];

function func(message = "hello"){
  return "hello";
}


let d; // 암묵적 any 타입
d = 10; 
d.toFixed()
// d.toUpperCase();// error

d= "hello";
d.toUpperCase();

const num = 10 ;
const str = "hello";
let arr = [1, "string"];