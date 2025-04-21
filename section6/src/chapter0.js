// 클래스
let studentA = {
  name: "오리너리",
  grade: "A+",
  age: 29,
  study() {
    console.log("열심히 공부 함");
  },
  introduce() {
    console.log("안녕하세요!");
  },
};

class Student {
  // 필드
  name;
  grade;
  age;

  // 생성자
  // 클래스를 호출하면 실제로 객체를 만드는 메서드
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  //메서드
  study() {
    console.log("열심히 공부 함");
  }

  introduce() {
    console.log(`안녕하세요 ${this.name}입니다!`);
  }
}

// 클래스를 이용해서 만든 객체 -> 인스턴스
// student 인스턴스
// let studentB = new Student("오리너리", "A+", 29);
// console.log(studentB);
// studentB.study();
// studentB.introduce();

class StudentDeveloper extends Student {
  //필드
  favoritSkill;

  //생성자
  constructor(name, grade, age, favoritSkill) {
    super(name, grade, age);
    this.favoritSkill = favoritSkill;
  }

  //메서드
  programming() {
    console.log(`${this.favoritSkill}로 프로그래밍 함`);
  }
}

const studentDeveloper = new StudentDeveloper(
  "오리너리",
  "B+",
  29,
  "Typescript"
);

console.log(studentDeveloper);
studentDeveloper.programming();
