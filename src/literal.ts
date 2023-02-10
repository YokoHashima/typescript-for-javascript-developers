export {};

let dayOfTheWeek: string = '日';
dayOfTheWeek = '月';
dayOfTheWeek = '31';  //文字列だが、想定外（曜日ではない）

//文字列で有限
//文字列では広すぎるので、ある有限なパターンに絞る
let dayOfTheWeek2: '日' | '月' | '火' | '水' | '木' | '金' | '土' = '日';
dayOfTheWeek2 = '月';
//dayOfTheWeek2 = '31';

//数値で有限
let month = 1;
month = 12;
month = 13;  //1～12にしたいのにエラーにならない

let month2: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 = 1;
month2 = 12;
//month2 = 13;  //1～12にしたいのにエラーにならない

let TRUE: boolean = true;
TRUE = false;

let TRUE2: true = true;
//TRUE2 = false;

