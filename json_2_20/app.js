var lisstCourser = document.querySelector("#listCourses");

const cousersApi = "http://localhost:3000/courses";

function start() {
  getCourse(renderCoures);
  handlerCreateForm();
}
////
const getCourse = (callback) => {
  fetch(cousersApi)
    .then((response) => {
      return response.json();
    })
    .then(callback);
};
////////////
const renderCoures = (courses) => {
  var lisstCourser = document.querySelector("#listCourses");
  var htmls = courses.map((course) => {
    return `<li class='course_item_${course.id}'> 
      <h4>${course.name}</h4> 
      <h4>${course.description}</h4>
      <button onclick=handlerDeleteCoures(${course.id}) >Xoa</button> 
    </li>
    `;
  });
  lisstCourser.innerHTML = htmls.join("");
};

const handlerDeleteCoures = (id) => {
  var options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  };
  fetch(cousersApi + "/" + id, options)
    .then((response) => {
      response.json();
    })
    .then(function () {
      var couserItem = document.querySelector("#course_item_" + id);
      if (couserItem) {
        couserItem.remove();
      }
    });
};

const createCoursers = (data, callback) => {
  var options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data),
  };
  fetch(cousersApi, options)
    .then((response) => {
      response.json();
    })
    .then(callback);
};

//// khi web chay la ham start() thuc thi;

function handlerCreateForm() {
  var createBtn = document.querySelector("#createBtn");

  createBtn.onclick = () => {
    var name = document.querySelector("input[name='name']").value;
    var description = document.querySelector("input[name=description]").value;
    var formData = {
      name: name,
      description: description,
    };

    createCoursers(formData, () => {
      getCourse(renderCoures);
    });
  };
}

start();
