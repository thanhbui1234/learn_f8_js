// tao object


var emailKey = 'email'
var myInfo = {
    name: 'thanh',
    age: 16,
    addres: 'Xuan kien',
    emalKey: 'lala'
    ,
    [emailKey]: 'occho',

    getName: function(){
        return this.name

    }

};
 

// them key new
// myInfo.email = 'Thanhbro' ;
myInfo.class = 'Hoc giot';  
delete myInfo.age
console.log(myInfo);
console.log(myInfo.getName());

