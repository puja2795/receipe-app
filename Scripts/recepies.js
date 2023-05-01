let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  addReceipe();
});

let user_name = localStorage.getItem("user");

const addReceipe = async () => {
  let title = document.querySelector("#title").value;
  let image = document.querySelector("#image").value;
  let short_desc = document.querySelector("#desc").value;
  let category = document.querySelector("#category").value;
  let ingredients = document.querySelector("#ingredients").value;
  let description = document.querySelector("#description").value;
  ingredients = ingredients.split(",").map((item) => item.trim());
  let obj = {
    user_name: user_name,
    title,
    image,
    short_desc,
    category,
    ingredients,
    description,
  };

  await fetch("https://abrupt-skinny-kicker.glitch.me/recepies", {
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
      alert("Receipe Added");
      form.reset();
      window.location.reload();
    });
};
