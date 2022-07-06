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
