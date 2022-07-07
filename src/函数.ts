// 函数 


function sum (x: string, y: string): string {
  return x + y
}

type IFn = (a: number, b: number) => number
const sum2: IFn = (x, y) => {
  return x + y
}
console.log(sum2(1, 2))

// ?表示参数可传可不传  但是y的类型 可以是number | undefined
// 默认值用 = 
// 可以使用剩余运算符
// js中默认参数和可选运算符不能一起使用
const sum3 = (x: number, y?: number, ...args: number[]): number => {
  // return x + (y as number)
  return x + y!
}
sum3(123, 1, 2, 3, 4)


// 函数重载
// 根据不同的参数实现不同的功能
// '123' => [1,2,3]
// 'abc' => ['a', 'b', 'c']

function toArray (val: string): string[]
function toArray (val: number): number[]
function toArray (val: string | number) { // 重载方法写在真实方法上面
  if (typeof val == 'string') {
    return val.split('')
  } else if (typeof val == 'number') {
    return val.toString().split('').map(item => Number(item))
  }
}

toArray(123)
// toArray('123')
