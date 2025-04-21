// 접근 제어자 access modifier
// => public private protected

class Employee{
  //필드
  // private name:string; //클래스 내부에서만 접근할 수 있다.
  // protected age:number; //파생 클래스 내부까지는 접근할 수 있다.
  // public position:string;

  //생성자
  constructor( private name:string, protected age: number, public position:string){
  }

  //메서드드
  work(){
    console.log(`${this.name}일하기`)
  }
}

class ExecutiveOfficer extends Employee{
  //필드
  officeNumber: number;
  //생성자
  constructor(name:string, age: number, position:string, officeNumber:number){
    super(name,age,position);
    this.officeNumber = officeNumber; 
  }

    //메서드
    work(){
      console.log(`${this.age}`)
    }
}

const employee = new Employee("오리너리",29,"developer");
// employee.name = "구냥냥" 
// employee.age= 30;
employee.position = "디자이너"

console.log(employee)