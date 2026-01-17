const ul = document.querySelector(".list");
const btn = document.querySelector("#btn");
const input = document.querySelector("#input");

const OnSubmit = () => {
  console.log("btn is pressed");
  let text = input.value;
  let li = document.createElement("li");
  li.classList.add("task", "items");

  li.textContent = text;

  const icons = document.createElement("div");

  icons.classList.add("icons");

  const edit = document.createElement("img");
  edit.src = "assets/edit.png";
  edit.alt = "edit";
  edit.width = 20;
  edit.height = 20;

  const del = document.createElement("img");
  del.src = "assets/delete.png";
  del.alt = "delete";
  del.width = 20;
  del.height = 20;

  del.addEventListener("click", () => {
    ul.removeChild(li);
  });

  edit.addEventListener("click", () => {
    window.location.href = "/editTasks.html"
  })

  icons.appendChild(edit);
  icons.appendChild(del);

  li.appendChild(icons);

  ul.appendChild(li);

  input.value = "";
};

btn.addEventListener("click", OnSubmit);
