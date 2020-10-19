/*
 * @Author: zting
 * @LastEditors: zting
 * @Description: 判断值是否是某个类型
 * 
 */
function isTypeX(type) {
    return function(obj){
        return Object.prototype.toString.call(obj) === `[object ${type}]`
    }
}


const isObject = isTypeX("Object")

const isNumber = isTypeX("Number")

const isString = isTypeX("String")

const isBoolean = isTypeX("Boolean")

const isArray = isTypeX("Array")

const isFunction = isTypeX("Function")

const isUndefined = isTypeX("Undefined")

const isNull = isTypeX("Null")

const isDate = isTypeX("Date")

const isEegExp = isTypeX("EegExp")

const isError = isTypeX("Error")



export {
    isObject,
    isNumber,
    isString,
    isBoolean,
    isArray,
    isFunction,
    isUndefined,
    isNull,
    isDate,
    isEegExp,
    isError
}


// 测试用例
// console.log(isObject({a:2}))
// console.log(isNumber(3))
// console.log(isString('123'))
// console.log(isBoolean(false))
// console.log(isArray([1,2]))
// console.log(isFunction(function(){console.log('this is function')}))
// console.log(isUndefined(undefined))
// console.log(isNull(null))
// console.log(isDate(new Date()))
// console.log(isEegExp(/^[a-zA-Z]{5,20}$/))
// console.log(isError(new Error()))
