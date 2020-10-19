/*
 * @Author: zting
 * @LastEditors: zting
 * @Description: 获取值类型
 */
function getVarType (val = 0) {
    let type = typeof val
    if(type === 'object'){
        let typeStr = Object.prototype.toString.call(val)
        typeStr = typeStr.split(' ')[1]
        type = typeStr.substring(0,typeStr.length-1)
    }
    return type
}


export {
    getVarType
}

//测试用例
// let allVarMap = {
//     // 数字
//     num:123,
//     // Infinity
//     num1: 1 / 0,
//     // NaN
//     num2: null / 0,
//     // 字符串
//     str: 'abcdef',
//     // 布尔类型
//     bool: true,
//     // 数组
//     arr :[1, 2, 3, 4],
//     // json对象
//     json :{name:'wenzi', age:25},
//     // 函数
//     func:function(){ console.log('this is function'); },
//     // 箭头函数
//     func1: () => {console.log('arrow function')},
//     // undefined类型
//     und:undefined,
//     // null类型
//     nul:null,
//     // date类型
//     date:new Date(),
//     // 正则表达式
//     reg :/^[a-zA-Z]{5,20}$/,
//     // 异常类型
//     error:new Error()
// }


// let results = []
// for(let i in allVarMap){
//     results.push(getVarType(allVarMap[i]))
// }
// console.log(results.join())
