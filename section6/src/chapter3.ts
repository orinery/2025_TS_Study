// 인터페이스와 클래스

interface CharacterInterface {
  name: string; 
  moveSpeed: number;
  move(): void;
}

// 캐릭터 클래스는 캐릭터인터페이스를 구현한다. 여기서 인터페이스는 설계도라고 볼 수 있다.
// 인터페이스는 무조건 public 필드다. 
class Character implements CharacterInterface{
  
  constructor(public name:string,public moveSpeed: number, private extra:string){
  }

  move(): void{
    console.log(`${this.moveSpeed}속도로 이동!`)
  }
}