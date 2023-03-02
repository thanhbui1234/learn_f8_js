// 1 Khi co loi return message error
// 2 Khi ok no return message  , undefined

const Validator = (options) => {
  console.log(options);

  var selectorRules = {};

  var fomrElement = document.querySelector(options.form);
  // khi thực thi submit
  fomrElement.addEventListener("submit", (e) => {
    var isFormValid = true;

    e.preventDefault();
    // fomrElement.submit();
    options.rules.forEach(function (rule) {
      var inputElement = fomrElement.querySelector(rule.selector);
      var isValid = validate(inputElement, rule);
      if (isValid) {
        isFormValid = false;
      }
    });

    if (isFormValid) {
      console.log("Khong co loi");
    } else {
      console.log("co loi");
    }
  });
  // /////////////////////
  const validate = (inputElement, rule) => {
    var errorElement = inputElement.parentElement.querySelector(
      options.errorSelector
    );

    var errorMsg;
    // var errorMsg = rule.test(inputElement.value);
    // lay ra cac rule cua selector
    var rules = selectorRules[rule.selector];
    // console.log(rules);

    // rule nao khai bao truoc thi validate truoc
    // lap qua cac phan tu trong rule va kiem tra // neu co loi thi dừng việc kiểm tra
    for (var i = 0; i < rules.length; i++) {
      errorMsg = rules[i](inputElement.value);
      if (errorMsg) break;
    }
    if (errorMsg) {
      errorElement.innerText = errorMsg;
      inputElement.parentElement.classList.add("invalid");
    } else {
      errorElement.innerText = "";
      inputElement.parentElement.classList.remove("invalid");
    }
    return errorMsg;
  };
  ////
  var selectorRules = {};
  //////////////////////////
  if (fomrElement) {
    options.rules.forEach(function (rule) {
      // lưu lại các rules cho mỗi input

      if (Array.isArray(selectorRules[rule.selector])) {
        selectorRules[rule.selector].push(rule.test);
      } else {
        selectorRules[rule.selector] = [rule.test];
      }

      var inputElement = fomrElement.querySelector(rule.selector);

      if (inputElement) {
        inputElement.onblur = () => {
          validate(inputElement, rule);
        };

        inputElement.oninput = () => {
          var errorElement = inputElement.parentElement.querySelector(
            options.errorSelector
          );
          errorElement.innerText = "";
          inputElement.parentElement.classList.remove("invalid");
        };
      }
    });
  }
};

Validator.isRequired = (valueInput) => {
  return {
    selector: valueInput,
    test: (value) => {
      // ham` trim sẽ loại bỏ những khoảng cách của chuỗi
      return value.trim() ? undefined : "Vui long nhap truong nay";
    },
  };
};
Validator.isEmail = (email, msg) => {
  return {
    selector: email,
    test: (value) => {
      var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(value) ? undefined : msg || "Truong nay phai la email";
    },
  };
};

Validator.isMinLength = (password, passwordLength) => {
  return {
    selector: password,
    test: (value) => {
      return value.length >= passwordLength
        ? undefined
        : `Vui long nhap toi thieu ${passwordLength} ky tu `;
    },
  };
};

Validator.isComfirm = (input_password_confirmation, getComfirmValue, msg) => {
  return {
    selector: input_password_confirmation,
    test: (value) => {
      return value === getComfirmValue()
        ? undefined
        : msg || "Gia tri nhap vao khong trinh xac";
    },
  };
};

//////////////////////////////////////////////////
// hàm này sẽ thực thi tất cả validate trên form
Validator({
  form: "#form-1",
  errorSelector: ".form-message",
  rules: [
    Validator.isRequired("#input_fullname"),
    Validator.isRequired("#input_email"),
    Validator.isEmail("#input_email", "Truong nay phai la email"),
    Validator.isMinLength("#input_password", 6),
    Validator.isRequired("#input_password_confirmation"),
    Validator.isComfirm(
      "#input_password_confirmation",
      () => {
        return document.querySelector("#form-1  #input_password").value;
      },
      "Mật khẩu nhập lại không chính xác"
    ),
  ],
  onSubmit: (data) => {
    console.log(data);
  },
});
