export {};

//let profile = ['Yoko', 43];
//profile = [43, 'Yoko'];

//数値、文字列の順序が逆転してもエラーにならない
//文字列、数値という順序など、制約を持たせたいときにTuple型を使う

let profile: [string, number] = ['Yoko', 43];
//profile = [43, 'Yoko'];  //コンパイルエラー


