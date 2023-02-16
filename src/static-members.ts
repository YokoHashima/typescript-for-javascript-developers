export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Atsushi';
  static lastName: string = 'Ishida';

  static work() {
    //return "Hey, guys! Are you interseted in TypeScrit? Let't dive into TypeScript!";
    return `Hey, guys! This is ${this.firstName}! Are you interseted in TypeScrit? Let't dive into TypeScript!`;
  }
}

// let me = new Me();
// console.log(me.isProgrammer);

console.log(Me.isProgrammer); //インスタンスを作らないでアクセス可能
console.log(Me.work());
