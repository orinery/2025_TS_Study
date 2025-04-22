// 프로미스
// 프로미스는 비동기 작업의 최종 완료 또는 실패와 그 결과 값을 나타내는 객체입니다.

const promise = new Promise<number>((resolve, reject)=>{
  setTimeout(()=>{
    // resolve(20);
    reject("error");
  },3000);
})

promise.then((response)=>{
  console.log(response * 10);
})

promise.catch((err)=>{
  if(typeof err === "string"){
    console.log(err);
  }
})

// 프로미스를 반환하는 함수의 타입을 정의
interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchPost():Promise<Post>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve({
        id:1,
        title: "게시글 제목",
        content: "게시글 내용"
      });
    }, 3000);
  })
}

const postRequest = fetchPost();
postRequest.then((post)=>{
  post.id 
})