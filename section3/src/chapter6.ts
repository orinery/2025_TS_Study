// 타입 단언 (type assertion)

type Person = {
  name: string;
  age: number; 
}

let person = {} as Person;
person.name = "오리너리";
person.age = 29;

type Dog = {
  name: string;
  color: string;
}

let dog = {
  name: "곰돌이",
  color: "white",
  breed: "페키니즈",
} as Dog;

// 타입 단언의 규칙
// 값 as 단언 <- 단언식
// A as B 
// A가 B의 슈퍼타입이거나 서브타입이어야 함

let num1 = 10 as never; 
let num2 = 10 as unknown; 

let num3 = 10 as unknown as string; //다중 단언, 단언이 안되는 단언을 하는 치트키, 권장하지않음.

// const 단언
let num4 = 10 as const;

let cat = {
  name: "사몽",
  color: "black",
} as const; // readonly가 된다.

// cat.name = '' //error

// Non Null 단언
type Post = {
  title: string;
  author?: string;
}

let post: Post = {
  title: "게시글1",
  author: "오리너리",
}

const len : number = post.author!.length;