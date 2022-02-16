async function loginFormHandler(event) {
  console.log("loading login modal");
  event.preventDefault();

  //initialize modal
  $(".ui.small.modal.login").modal();

  //show modal
  $(".ui.small.modal.login").modal("show");
}

async function loginButtonHandler(event) {
  event.preventDefault();

  //get email and passsword info from form
  var email = document.querySelector("#loginEmail").value.trim();
  var password = document.querySelector("#loginPassword").value.trim();

  console.log(email, password);
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
      $(".ui.small.modal.login").modal("hide");
      alert("You are now logged in!");
    } else {
      alert(response.statusText);
    }
  } else {
    alert("Email/Password is missing");
  }
}

async function logoutButtonHandler(event) {
  event.preventDefault();

  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to log out.");
  }
}

async function signUpFormHandler(event) {
  event.preventDefault();
  console.log("loading sign up modal");

  //initialize modal
  $(".ui.small.modal.signup").modal();

  //show modal
  $(".small.modal.signup").modal("show");
}

async function signUpButtonHandler(event) {
  event.preventDefault();

  //get email and passsword info from form
  const first_name = document.querySelector("#first_name").value.trim();
  const last_name = document.querySelector("#last_name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const username = document.querySelector("#username").value.trim();
  const password = document.querySelector("#password").value.trim();
  const confirm_password = document
    .querySelector("#confirm_password")
    .value.trim();

  console.log(
    first_name,
    last_name,
    email,
    username,
    password,
    confirm_password
  );

  //check to see if email and password is not blank
  if (
    confirm_password === password &&
    first_name &&
    last_name &&
    email &&
    username
  ) {
    //check database for user
    const response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        first_name,
        last_name,
        email,
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
      $(".ui.small.modal.signup").modal("hide");
      alert("Thank you for joining The Forum!");
    } else {
      alert(response.statusText);
    }
  } else {
    alert("Email/Password is missing");
  }
}

$("#loginModal").on("click", loginFormHandler);
$("#loginButton").on("click", loginButtonHandler);
$("#logoutButton").on("click", logoutButtonHandler);

$("#signUpModal").on("click", signUpFormHandler);
$("#signUpButton").on("click", signUpButtonHandler);
