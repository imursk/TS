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
  public readonly n: number = 1
  constructor(public name: string, public age: number) {
    // console.log(this.name, 'Animal')
    this.n = 100
    this.n = 200
  }
  static type = '哺乳动物' // 静态属性es7写法
  // static get type(){   // 属性访问器 es6写法
  //   return '哺乳动物'
  // }

  static getName () {
    return '父动物'
  }
}

class Cat extends Animal {
  constructor(name: string, age: number, address: string) {
    super(name, age)
    // console.log(this.name, 'Cat')
    console.log(this.n)
    console.log(Cat.getName())
  }
  static getName () { // 静态方法
    // console.log(super.getName()) // super 默认在构造函数中和静态方法中都指向自己的父类
    return '子类的动物'
  }
  say () { // 原型方法

  }

  private str: string = '123'
  get content () {
    return this.str
  }
  set content (val: string) {
    this.str = val
  }
}


let cat = new Cat('Tom', 66, '老美')

console.log(cat.content)
cat.content = '666'
console.log(cat.content)


// console.log(cat)

// console.log(Pointer)





export { }


















export { }