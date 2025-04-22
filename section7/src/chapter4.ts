// 제네릭 클래스

class NumberList {
  constructor(private list: number[]){}

  push(data: number){
    this.list.push(data);
  }
  pop(){
    return this.list.pop();
  }
  print(){
    console.log(this.list);
  }
}

const numberList = new NumberList([1,2,3]);
numberList.pop();
numberList.push(4);
numberList.print();

class List<T> {
  constructor(private list: T[]){}

  push(data: T){
    this.list.push(data);
  }
  pop(){
    return this.list.pop();
  }
  print(){
    console.log(this.list);
  }
}

const stringList = new List(["가","나","다"]);
stringList.pop();
stringList.push("가");
stringList.print();