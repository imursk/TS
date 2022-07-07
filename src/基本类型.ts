// 基本类型
let num: number = 123,
  str: string = '123',
  bool: boolean = true

// 大小number区别   装箱区别
let num1: number = 666
let num2: Number = 666 // 大Number,类
let num3: Number = new Number()


// 数组
const arr1: number[] = [12313]
const arr2: (number | string)[] = ['a', 1]
// 数组中内容无规律
const arr3: any[] = []
const arr4: Array<boolean> = [true, false] // 泛型

const tuple: [string, boolean, number] = ['123', true, 666] // 元组



// 数据交换 会用到元素\泛型

// 枚举类型
// 普通枚举  异构枚举  常量枚举

const enum ROLE { // 大写规范  加const不会生成对象
  USER = 'USER',
  ADMIN = 5,
  MANAGER
}
console.log(ROLE.ADMIN)
// console.log(ROLE[0], ROLE)
// 枚举可支持反举,会根据上一个值,自动推断下一个


// null undefined
let u: undefined = undefined
let n: null = null


// never 代码永远无法到达终点,是任何类型的子类型
function setVal (val: string) {
  if (typeof val === 'string') {
    val // string类型
  } else {
    val // never类型(走不到就是never)
  }
}

// void 只能赋予null\undefined
// 严格模式下不能把null赋予给void
function getVoid (): void {
  return undefined
}


// object
// 非原始数据类型
function create (obj: object) { // 泛型约束大量运用到object

}
create({})
create(() => { })
create([])

// Symbol Bigint(es2020) js的类型
let s = Symbol()
let b = BigInt(1)

let max = Number.MAX_SAFE_INTEGER
// console.log(max)
console.log(max + 1 === max + 2) // 超出js最大精度
console.log(BigInt(max) + BigInt(1) === BigInt(max) + BigInt(2))




export { }  // 防止模块中共享数据