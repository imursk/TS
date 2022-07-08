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

// @eat
class Person {
  constructor() {

  }
  // eat!: () => void
  @toUpperCase
  name: string = 'zk'
}
let p = new Person()
// p.eat()
p.name = 'kk'
console.log(p.name)





