async function loginFormHandler(event) {
  console.log("loading login modal");
  event.preventDefault();

  //initialize modal
  $(".small.modal.login").modal();

  //show modal
  $(".small.modal.login").modal("show");
}

async function loginButtonHandler(event) {
  event.preventDefault();

  //get email and passsword info from form
  var email = document.querySelector("#email").value.trim();
  var password = document.querySelector("#password").value.trim();

  //check to see if email and password is not blank
  if (email && password) {
    //check database for user
    const response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
      $(".ui.modal").modal("hide");
    } else {
      alert(response.statusText);
    }
  } else {
    alert("Email/Password is missing");
  }
}

async function signUpFormHandler(event) {
  event.preventDefault;
  console.log("loading sign up modal");

  //initialize modal
  $(".small.modal.signup").modal();

  //show modal
  $(".small.modal.signup").modal("show");
}

$("#loginModal").on("click", loginFormHandler);
$("#loginButton").on("click", loginButtonHandler);

$("#signUpModal").on("click", signUpFormHandler);
