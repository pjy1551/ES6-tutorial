myFunction = (name, age = 22) => {
    return console.log('myFunction : ' + '내이름 ' + name + '내나이' + age);
}

myFunction('jyp')
myFunction('jyp', '32')

function myFunction2(name, age = '25'){
    return console.log('myFunction2 : ' + '내이름 ' + name + '내나이' + age);
}
myFunction2('jyp')
myFunction2('jyp', '32')




module.exports =  'defaultParameters' ;