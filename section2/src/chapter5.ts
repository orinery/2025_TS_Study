//enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

// 숫자형 이넘 
enum Role {
  ADMIN ,
  USER,
  GUEST,
}
enum Language {
  korean = "ko",
  english = "en",
}

const user1 ={
  name: "오리너리",
  role: Role.ADMIN, // 0 <-관리자
  language: Language.korean, 
}
const user2 ={
  name: "무무킴",
  role: Role.USER, // 1<-유저
  language: Language.english,
}
const user3 ={
  name: "김토토",
  role: Role.GUEST, // 2<-게스트
  language: Language.korean, 
}

console.log(user1, user2, user3);