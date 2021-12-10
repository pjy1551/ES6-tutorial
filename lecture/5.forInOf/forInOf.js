let jsonDataArray = [{ 
    name : 'jyp',
    age : 22
}, {
    name : 'bmk',
    age : 25
}]


for(let data in jsonDataArray){
    console.log(data) // index 순서대로
}
for(let data of jsonDataArray){
    console.log(data) // 데이터 순서대로
}

module.exports =  'forInOf' ;
