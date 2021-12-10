// ES5
function myFunc(name) {
	return 'hi ' + name;
}

console.log(myFunc('jyp'));

myFunc2 = (name) =>{
    return 'hi ' + name
}
console.log(myFunc2('jyp2'))

myFunc3 = (name) => 'hi ' + name;

console.log(myFunc3('jyp3'))



const myArrary = ['진수', '영철', '영희', 5];

let arr2 = myArrary.filter((data) => { return data })
console.log(arr2)



module.exports =  'arrowFunctions' ;