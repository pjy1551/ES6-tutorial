//일반 사용법
function inputFunction(...data){
    console.log(data) // 배열로 들어옴..
}
function inputFunction2(data){
    console.log(data)
}
inputFunction('1')
inputFunction2('2')

// 배열사용법
let number = [1, 2, 3, 4, 5]
let [one, two, ...nums] = number
console.log(one) // '1' 
console.log(two) // '2' 
console.log(nums) // ['3', '4', '5']

// 객체복사
let obj1 = { string: 'bar', int: 42 }
let obj2 = { ...obj1 }
console.log(obj1)
console.log(obj2)  



// function numbers(...arg){
//     console.log(arg)
// }
// numbers(1,2,3,4,5)  // 1,2,3,4,5  -> 배열 타입 입니다.

// let number = [1, 2, 3, 4, 5]
// let [one, two, ...nums] = number

// console.log(one) // 1
// console.log(two) // 2
// console.log(nums) // [3, 4, 5]



// let obj1 = { string: 'bar', int: 42 }
// let obj2 = { ...obj1 }
// console.log(obj1, obj2)  


// let arr = [1,2,3,4,5]
// let arr2 = [...arr]
// arr[0] = 100
// console.log(arr)  // 100,2,3,4,5
// console.log(arr2) // 1,2,3,4,5




module.exports =  'spreadOperator' ;