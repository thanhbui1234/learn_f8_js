const hehe = [ 1 , 2 ,3 ,4, 5, 6 ,8 ,9  ]

var haaha = hehe.reduce((total , curentValue) =>{
    return total + curentValue
},10)
console.log(haaha)