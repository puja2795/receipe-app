let email = document.querySelector("#email");
let password = document.querySelector("#password");

let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  login();
});

const login = async () => {
  try {
    let data = await fetch(
      "https://abrupt-skinny-kicker.glitch.me/signup"
    ).then((res) => res.json());

    let loginUser = data.filter((el) => {
      if (el.email == email.value && el.password == password.value) {
        return el;
      }
    });
    if (loginUser.length > 0) {
      localStorage.setItem("user", loginUser[0].user_name);
      alert("Login Successful");
      window.location.replace("./home.html");
    } else {
      alert("Invalid Credential");
    }
  } catch (err) {
    console.log(err);
    alert("Login Failed");
  }
};
