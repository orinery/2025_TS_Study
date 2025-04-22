// 인덱스드 엑세스 타입

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  }
}[];

function printAuthorInfo(author: PostList[number]["author"]){
  console.log(`${author.name}-${author.id}`)
}

const post : PostList[number] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id:1,
    name: "오리너리",
    age: 29
  }
}

printAuthorInfo(post.author);

// 튜블타입에서 사용하는 인덱스드 엑세스 
type Tup = [number, string, boolean];
type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
// type Tup3 = Tup[3]; 

type TupNum = Tup[number];
