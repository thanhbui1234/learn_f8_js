// tao  object contructor  coi nhu mot ban thiet ke
function USER(firstName, lastName, Avatar){
    this.firstName= firstName;
    this.lastName= lastName;
    this.Avatar= Avatar;
    this.getName  = function (){
        return `${this.firstName} ${this.lastName}`
    }
}

// add cho contructor
USER.prototype.class='f8';
USER.prototype.getClassName = function(){
    return this.class;
}


// day moi la 1 doi tuong
var author = new USER('son','dang','avt');
var user = new USER('thanh','bui','avt');

// console.log(author);
// console.log(user);


// chung' ta co the add  nhung~ thuoc. tinh rieng cho cac doi tuong
author.mail = 'thanhbanh2k3';
user.commnet='CAM MOM DI';

console.log(author.getName());
console.log(user.getClassName());


// math random
console.log(Math.floor(Math.random() * 10 ));





var random = Math.floor(Math.random() * 4 );
var gif =[
    '10 coin',
    '20 coin',
    '30 coin',
    '40 coin',

]
console.log(gif[random]);

var random = Math.floor(Math.random() * 100 );
if(random< 20){
    console.log('Thanh cong');
}




function getRandNumbers(min, max, length) {
    var array = [];
    for(var i = 0; i < length; i++) {
        array = [array, Math.floor(Math.random() * (max - min) + min)]
    }

    return array;
}



////////////////////////////////////////
function run(object) {
    var arr= [];
    var i=0
    for( var key in object){
         arr[i] = `Thuộc tính ${key} có giá trị ${object[key]}`;
        i++;

    }
    return arr;


}

// Expected results:

// console.log(run({ name: 'Nguyen Van A', age: 16 }));
// Output:
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"
// ]

var arr= [
    [1,2],
    [3,4],
    [5,6]
];
for(var i = 0; i<arr.length; i++){
    for( var j=0; j<arr[i].length;j++){
        console.log(arr[i][j])
        // console.log(typeof [j])
    }

}
