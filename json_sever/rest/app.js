
var couresApi = 'http://localhost:3000/courses';


// khi ứng dụng khởi động chúng ta sẽ chạy hàm start()

// function start(){
//     // khi get được courses chúng ta sẽ render ra html view 
//     getCoures(function(coures){
//         renderCoures(coures)
//     });

// };
// cách tối ưu
function start() {
    getCoures(renderCoures)
    handlerCreateForm();
}

start()

// Functions


// get ra các khóa học
function getCoures(callback) {
    // mặc định của thằng fetch là gửi đi phương thức là get  read
    fetch(couresApi)
        .then(function (response) {
            return response.json()
        })
        .then(callback);
}

// sẽ nhận một object gồm name và decsripton 
function createCourse(data,callback) {
    var options = {
        method: 'POST',
        headers :{
            'Content-Type': 'application/json',

        }
        ,
        body: JSON.stringify(data)

    }
    fetch(couresApi, options)
    .then(function(response){
        response.json();

    })
    .then(callback);
}


function handlerdeleteCourse(id){
    var options = {
        method: 'DELETE',   
        headers :{
            'Content-Type': 'application/json',

        }
        
        

    }
    fetch(couresApi + '/' +id, options)
    .then(function(response){
        response.json();

    })
    .then(function(){
        
    });
}
// tạo ra cái view html 
function renderCoures(coures) {
    var listCoursesBlock = document.querySelector('#list-coures');
    var htmls = coures.map(function (course) {
        return `
   <li>
   <h4>${course.name}</h4>
   <p>${course.description}</ơ>
   <button onclick="handlerdeleteCourse(${course.id})">Xoa</button>

   </li>
   `;

    });
    listCoursesBlock.innerHTML = htmls.join('')

}

function handlerCreateForm() {
    var craeteBtn = document.querySelector('#create')
    craeteBtn.onclick = function () {
        var name = document.querySelector('input[name=name]').value
        var description = document.querySelector('input[name=description]').value
       var fromData = {
        name:name,
        description : description
       }
        createCourse(fromData,function(){
    getCoures(renderCoures)

        })
    }
}