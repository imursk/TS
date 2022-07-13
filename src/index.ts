// 类的装饰器
// 实验性语法，后面会有改动

// 装饰器作用：扩展类  扩展类中的属性和方法(不能修饰函数，因为函数有变量提升的问题)

// 洋葱模式
function addSay1 (val: string) {
  console.log(val)
  return function (target: any) {
    console.log('1')
  }
}
function addSay2 (val: string) {
  console.log(val)
  return function (target: any) {
    console.log('2')
  }
}
function addSay3 (val: string) {
  console.log(val)
  return function (target: any) {
    console.log('3')
  }
}
// @addSay1('a1')
// @addSay2('a2')
// @addSay3('a3')


function eat (target: any) {
  target.prototype.eat = function () {
    console.log('eat')
  }
}


function toUpperCase (target: any, key: any) {
  let val: string = ''
  Object.defineProperty(target, key, {
    get () {
      return val.toUpperCase()
    },
    set (newVal: string) {
      return val = newVal
    },
  })
}

function double (num: number) {
  return function (target: any, key: string) { // target指的是类
    let v = target[key]
    Object.defineProperty(target, key, {
      get () {
        return num * v
      },
    })
  }
}

function Enum (x: boolean) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = x
  }
}

function params (target: any, key: string, index: number) {
  console.log()
}

// @eat
class Person {
  // eat!: () => void
  @toUpperCase
  name: string = 'zk'

  @double(3)
  static age: number = 18  // 静态属性通过类调用

  @Enum(false)
  drink (@params val: any) { }
}
let p = new Person()
// p.eat()
p.name = 'kk'
console.log(p.name)

console.log(Person.age)
console.log(p)






