// 기본 타입 간의 호환성
let num1 : number = 10;
let num2 : 10 = 10;

num1 = num2;

// 객체 타입간의 호환성
// -> 어떤 객체 타입을 다른 객체 타입으로 취급해도 괜찮은가?

type Animal = {
  name: string;
  color: string;
}

type Dog = {
  name: string;
  color: string;
  breed: string;
}

let animal : Animal = {
  name: "기린",
  color: "yellow"
}

let dog: Dog = {
  name: "곰돌이",
  color: "white",
  breed: "페키니즈"
};

animal = dog; // Dog -> Animal
// dog = animal; // error 

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "리액트",
  price: 30000,
  skill: "react"
};

book = programmingBook;
// programmingBook = book; //error

// 초과 프로퍼티 검사 
let book2 : Book ={
  name: "리액트",
  price: 30000,
  // skill: "react"
}

let book3 : Book = programmingBook; 
function func (book:Book){}
func({
  name: "리액트",
  price: 30000,
  // skill: "react"
});
func(programmingBook);