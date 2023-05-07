const formOpenBtn_create = document.querySelector("#form-open-create"),
  formOpenBtn_read = document.querySelector("#form-open-read"),
  formOpenBtn_update = document.querySelector("#form-open-update"),
  formOpenBtn_delete = document.querySelector("#form-open-delete"),
  home = document.querySelector(".home"),
  formContainer = document.querySelector(".form_container"),
  formCloseBtn_create = document.querySelector(".form_close"),
  formCloseBtn_read = document.querySelector(".form_close"),
  formCloseBtn_update = document.querySelector(".form_close"),
  formCloseBtn_delete = document.querySelector(".form_close");

formOpenBtn_create.addEventListener("click", () => home.classList.add("show"));
formCloseBtn_create.addEventListener("click", () => home.classList.remove("show"));

formOpenBtn_read.addEventListener("click", () => home.classList.add("show"));
formCloseBtn_read.addEventListener("click", () => home.classList.remove("show"));

formOpenBtn_update.addEventListener("click", () => home.classList.add("show"));
formCloseBtn_update.addEventListener("click", () => home.classList.remove("show"));

formOpenBtn_delete.addEventListener("click", () => home.classList.add("show"));
formCloseBtn_delete.addEventListener("click", () => home.classList.remove("show"));




/*
pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});

function login(){
  window.location.assign("cars.html");
  /*var username = document.getElementsById("username").value;
  var password = document.getElementsById("password").value;
  var admin = document.getElementsById("admin").value;
  if(username == "x" && password == "x"){
    if(admin == null){ //user 
      window.location.assign("cars.html");
      alert("Login Successfully!");
    }
    else{
      if(admin == "1234"){ // admin 
        window.location.assign("crudpage.html");
        alert("Login Successfully!");
      }
      else{
        alert("Wrong CODE!");
        return;
      }
    }
  }
  else{
    alert("Invalid Information");
    return;
  }

}

function signup(){
  window.location.assign("crudpage.html");
  /*var admin = document.getElementsById("admin").value;
  if(admin == "1234"){ // admin 
    window.location.assign("crudpage.html");
    alert("Login Successfully!");
  }
  else{
    alert("Wrong CODE!");
    return;
  }

}*/