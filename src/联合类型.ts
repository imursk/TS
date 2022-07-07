// 联合类型  
// let numOrstring   不初始化必须要给类型,否则都是any

let numOrstring: number | string = 1


const ele: HTMLElement | null = document.getElementById('app')
// 非空断言  (跳脱空校验)
ele!.innerText = '123'

// as \ <> 强转某类型(要求:必须联合类型中有才可以;可提示强转后类型下的可使用方法)
let a: string | number | undefined
// (<string>a).indexOf('123')

(a as any) as boolean // 先转any,再转其他类型(会导致类型出问题)


// 字面量类型
// 复杂类型复用
type IType = 'a' | 'b' | 'c' | 'd'
let type: IType = 'b'
let type2: IType = 'c'




export { }