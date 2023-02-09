export {};

//型エイリアスは別名なので＝が必要
type ObjectType = {
  name: string;
  age: number;
};

//インターフェースは＝が不要
interface ObjectInterface {
  name: string;
  age: number;
}

let object: ObjectType = {
  name: 'Yoko',
  age: 43
}

let object2: ObjectInterface = {
  name: 'YOKO',
  age: 43
}
