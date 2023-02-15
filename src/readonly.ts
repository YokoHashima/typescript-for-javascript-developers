export {};

//readonlyの場合はpublicを書かなくてもよいが、readonlyの場合のみ
//またreadonlyを除くとコンパイルエラーになる。アクセス修飾子がないと初期化が実行されないから。

class VisaCard {
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('Yoko');
console.log(myVisaCard.owner);
//myVisaCard.owner = 'aaa';
