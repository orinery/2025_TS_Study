// 타입 별칭
type User = {
  id: number;
  name: string;
  birth: string;
  bio: string;
  location: string
};

let user: User = {
  id:1,
  name:"orinery",
  birth: "1996.03.19",
  bio: "안녕하세요",
  location: "서울",
};

let user2: User = {
  id:2,
  name:"김무무",
  birth: "1995.11.08",
  bio: "안녕하세요",
  location: "수원",
};

// 인덱스 시그니처
type CountryCodes = {
  [key : string] : string; // key는 string, value는 string
};

let countryCodes: CountryCodes = {
  Korea: 'ko',
  UnitedState:'us',
  UnitedKingdom: 'uk',
};

type CountryNumberCodes ={
  [key:string] : number;
  Korea: number;
}

let countryNumberCodes:CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
}