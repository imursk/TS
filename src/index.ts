// 类

class Pointer {
  // x!: number
  // y!: number // 声明的变量会加到实例上去(在参数中使用public修饰符具有相同效果)
  constructor(public x: number, public y: number) {
    this.x = x
    this.y = y
  }
}

new Pointer(100, 200)

// 修饰符 
// public     自己,子类,子类之外
// protected  自己,自己的子类
// private    自己
// readonly   只读

class Animal {
  constructor(public name: string, public age: number) {
    console.log(this.name, 'Animal')
  }
}

class Cat extends Animal {
  constructor(name: string, age: number, address: string) {
    super(name, age)
    console.log(this.name, 'Cat')

  }
}

let cat = new Cat('Tom', 66, '老美')
console.log(cat)

console.log(Pointer)


export { }


















export { }