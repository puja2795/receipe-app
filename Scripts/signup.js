let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  signup();
});

let user_name = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

const signup = async () => {
  let obj = {
    user_name: user_name.value,
    email: email.value,
    password: password.value,
  };

  await fetch("https://abrupt-skinny-kicker.glitch.me/signup", {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "content-type": "application/json",
    },
    redirect: "follow",
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      alert("Sign Up successful");
      form.reset();
      window.location.replace("./signin.html");
    });
};
