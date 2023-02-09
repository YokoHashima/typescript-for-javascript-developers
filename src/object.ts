export {};

let profile1: object = {name: 'Yoko'};
profile1 = { birthYear: 1999 };
//↑異なる属性の値を入れてもエラーが発生しない(objectのデメリット)

let profile2: {} = { name: 'Yooko'};
profile2 = { birthYear: 1998};
//↑まだエラーにならない

let profile3: { name: string } = { name: 'Yoooko' };
//profile3 = { birthYear: 1997 };
//profile3 = { name: 1997 };
profile3 = { name: '1997' };
//↑属性と型が指定できる

