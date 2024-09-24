const addtask = document.querySelectorAll(".add");
const modal = document.querySelector(".modal");
const todoCards = document.querySelectorAll("todoCards");
const form = document.querySelector("form");

let data = [];

const setData = (arr) => {
  data = arr;
  render();
};

addtask.forEach((item) => {
  item.addEventListener("click", () => {
    modal.style.display = "flex";
  });
});

const render = () => {
  todoCards[0].innerHTML = "";
  todoCards[1].innerHTML = "";
  todoCards[2].innerHTML = "";
  todoCards[3].innerHTML = "";

  data.forEach((item) => {
    if (item.status == "To do") {
      todoCards[0].innerHTML += Card(item);
    } else if (item.status == "In progress") {
      todoCards[1].innerHTML += Card(item);
    } else if (item.status == "Done") {
      todoCards[2].innerHTML += Card(item);
    } else if (item.status == "Blocked") {
      todoCards[3].innerHTML += Card(item);
    }
  });
};

const Card = (props) => {
  const { text, id } = props;

  return `
    <div class="task" id="${id}">
        <input type="radio" />
        <p class="task_text">${text}</p>
    `;
};

render();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const { element } = event.target;
  const text = element.text.value;
  const status = element.status.value;
  const newData = [...data, { text, id: "id", status }];
  setData(newData);
  modal.style.display = "none";
});
