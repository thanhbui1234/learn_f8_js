// var a = 1;
// var b = 2;
// if (a <b){
//     alert('con cho ngu');
// }

// funtion tự định nghĩa ra
// var hehe = function(){
//     alert('lol');
// }
/// gọi funtion
// hehe();

//object types

// var occho = {

//     /// mỗi dữ liệu cách nhau bằng dấu phẩy
//     name: 'hehe',
//     age: 18,
//     diaChi: 'Xuan kien' 
// };

// var array= [
//     'javascrip',
//     'php',1,2,3

// ];
// console.log(array)



//// kiem tra kieu du liệu
// console.log(typeof tên thằng muốn kiểm tra   )



///// funtion ///
// function occho (){
//     alert('yeu em nhieu')

// }

// occho();
// function occho1(){
//     alert('hehehjehheheheheeheh')
// }

// occho1();


///// tham số trong tên hàm/////  tham số trong dấu ()
// function writelong(message) {
//     console.log(message)
// }

// chuyền vào một giá trị vào nó sẽ là đối số
// writelong('test occho');
// writelong('test hehe');
// writelong(['hehe','huhu'])


// function pro() {
    
//     var sstring= '';
//     for( var hhhh of arguments  ){
//         sstring += `${hhhh}  - `
//     }
//     console.log(sstring)
// }
// pro('occho','pro','hehe');


// function sum(a,b ){
//     return a +b;
// }
// var result = sum(223112232132132132113213213212321,1321321321343);
// console.log(result);


// var fullname = 'Bui Chi Thanh 333//';
// console.log(fullname.length)


//template string
// var firstName = 'thanh';
// var lastName = 'Bui';
// console.log(`Toi la: ${firstName} ${lastName}  `)



// var languages = [
//     'hhehe',
//     'huhu',
//     'doi'
// ]
// var lenguage2 = [
//     'hoho',
//     'hihi'
// ]
// console.log(languages.pop())  // xoa element cuoi mang va tra ve phan tu da xaos
// shitf xoa element o dau mang va tra ve phan tu da xoa
// console.log(languages.push('hahah'))

// languages.splice(1)
// xoa di vi tri bat ky
// languages.splice(1,2,('dart'))
// element thu 1 la vi tri dat con tro  , 2 la vi tri xoa , 3 la them 


// unshift them 1 hoac nhieu phan tu vao dau mang 
// console.log(languages.concat(lenguage2))
// kết hợp 2 mảng nè :3

var courses = [
    'occho',
    'hehe',
    'hehe',
    'haha'
]
console.log(courses.toString())
console.log(courses.join('-'))
// console.log(courses.pop()) // xóa phần tử cuối mảng và trả về phần tử đã xóa
// console.log(courses.pop()) // xóa phần tử cuối mảng và trả về phần tử đã xóa
// console.log(courses.pop()) // xóa phần tử cuối mảng và trả về phần tử đã xóa
// console.log(courses.pop()) // xóa phần tử cuối mảng và trả về phần tử đã xóa
// console.log(courses.pop()) // xóa phần tử cuối mảng và trả về phần tử đã xóa
console.log(courses.push('love','javascrip','Tinh yeu'))   
console.log(courses)   
console.log(courses.shift())  //     xóa phần tử đầu mảng và trả về phần tử đã xóa
console.log(courses)   
console.log(courses.unshift('hi','hahaha'))   
console.log(courses)   
// courses.splice(1,5) /// xoa phan tu (tham số thứ nhất là index , tham số thứ 2 là ký tự muốn xóa)
console.log(courses)   
courses.splice(3,0,'dart' ,'json')
console.log(courses)   

var courses2 = [
    'muhahahahahs'
]
console.log(courses.concat(courses2)) // kết hợp  2 mảng với nhau

console.log(courses.splice(1,5)) // xóa phần tử trong khoảng , thâm số thứ nhất là index , thâm số thứ 2 là xóa để khoảng muốn xóa  











