const addCard = document.querySelectorAll(".second");
const form = document.querySelector("form");
const todoCards = document.querySelectorAll(".todoCards");
const beginReact = document.querySelector(".beginReact");
const turns = document.querySelectorAll(".too");

let count = 1;
let data = [];

const setData = (arr) => {
  data = arr;
  render();
};

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
    } else if (item.status == "Stuck") {
      todoCards[2].innerHTML += Card(item);
    } else if (item.status == "Done") {
      todoCards[3].innerHTML += Card(item);
    }
  });

  const deleteBtns = document.querySelectorAll(".cardDelete");

  deleteBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.id;
      const newData = data.filter((item) => {
        return item.id !== id;
      });
      setData(newData);
    });
  });
};

const Card = (props) => {
  const { title, id } = props;

  return `
    <div class="card" id="${id}" draggable="true">
        <div>
            <div class="color">
                <img class="zurag" src="check.png">
                <div class="nav">
                    <p class="cardName">${title}</p>
                    <img id="${id}" class="cardDelete" src="trash.png">
                </div>
            </div>
        </div>
    </div>
    `;
};

render();

addCard.forEach((item) => {
  item.addEventListener("click", () => {
    beginReact.style.display = "flex";
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const { elements } = event.target;
  const title = elements.title.value;
  const status = elements.status.value;

  const newData = [...data, { title, id: "id" + count, status }];

  count++;

  setData(newData);

  beginReact.style.display = "none";
});
