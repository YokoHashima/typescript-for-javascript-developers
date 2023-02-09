export {};

type Mojiretsu = string;
const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello';

const example1 = {
  name: 'Yoko',
  age: 43
};

type Profile = {
  name: string;
  age: number;
}

const example2: Profile = {
  name: 'Yoko',
  age: 43
};

type Profiles2 = typeof example1;