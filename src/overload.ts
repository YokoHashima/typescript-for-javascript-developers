export {};

function double(value: number): number;
function double(value: string): string;

function double(value: any): any {
  console.log(typeof value);

  if (typeof value === 'number') {
    return value * 2;
    // } else if (typeof value === 'string') {
    //   return value + value;
  } else {
    return value + value;
  }
  // } else {
  //   throw 'numverでもstringでもないので、引数の型を確認してください。'; //コンパイルエラーになるので、else説は不要
  // }
}

// function double(value: number): number {
//   return value * 2;
// }

// function double(value: string): string {
//   return value + value;
// }

console.log(double(100));
console.log(double('Go '));
//console.log(double(true)); //signatureに定義されていないのでコンパイルエラー
