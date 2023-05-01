let user = localStorage.getItem("user");

const getRecepieData = async (resolve) => {
  let data = await fetch(
    "https://abrupt-skinny-kicker.glitch.me/recepies"
  ).then((res) => res.json());
  localStorage.setItem("data", JSON.stringify(data));
  appendData(data, mainDiv);
};

getRecepieData();

let mainDiv = document.querySelector("#main");

const appendData = (data, mainDiv) => {
  console.log(data);
  mainDiv.innerHTML = null;
  data.forEach((el, id) => {
    let container = document.createElement("div");
    container.classList.add("container");

    let image = document.createElement("img");
    image.src = el.image;
    image.classList.add("image");

    let title = document.createElement("h3");
    title.innerText = el.title;

    let category = document.createElement("h5");
    category.innerText = el.category;

    let short_desc = document.createElement("p");
    short_desc.innerText = el.short_desc;

    let view = document.createElement("button");
    view.innerText = "View Receipe";
    view.classList.add("buy-btn");

    container.append(image, title, category, short_desc, view);

    mainDiv.append(container);
  });
};

document.querySelector("#search").addEventListener("change", () => {
  searchTitle();
});

const searchTitle = async () => {
  let data = await fetch(
    "https://abrupt-skinny-kicker.glitch.me/recepies"
  ).then((res) => res.json());

  let title = document.querySelector("#search").value;
  let searchData = [];
  if (title == "") {
    searchData = data;
  } else {
    searchData = data.filter((el) => {
      console.log(el.title);
      if (el.title.toLowerCase().includes(title.toLowerCase())) {
        return el;
      }
    });
  }

  appendData(searchData, mainDiv);
};

let pgaeData = JSON.parse(localStorage.getItem("data"));
let limit = 5;
let pages = Math.ceil(pgaeData.length / limit);

document.querySelector("#pageNo").innerText;
