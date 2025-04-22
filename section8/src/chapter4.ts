// 템플릿 리터럴 타입

type Color = 'red'| 'black' | 'green';

type Animal = 'dog' | 'cat' | 'bird';

type ColoredAnimal = `${Color}-${Animal}`; // 'red-dog' | 'red-cat' | 'red-bird' | 'black-dog' | 'black-cat' | 'black-bird' | 'green-dog' | 'green-cat' | 'green-bird'
