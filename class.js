const addCard = document.querySelectorAll(".second");
const beginReact = document.querySelector(".beginReact");
const todoCards = document.querySelectorAll(".todoCards");
const form = document.querySelector("form");

let data = [];

addCard.forEach((item) => {
  item.addEventListener("click", () => {
    beginReact.style.display = "flex";
  });
});

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

      saveTurn();
    });
  });
};

const Card = (props) => {
  const { title, id } = props;

  return `
    <div class="card" id="${id}" draggable="true">
            <div class="color">
                <img class="zurag" src="check.png">
                <div class="nav">
                    <p class="cardName">${title}</p>
                    <img id="${id}" class="cardDelete" src="trash.png">
                </div>
            </div>
    </div>
    `;
};

render();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const { elements } = event.target;
  const title = elements.title.value;
  const status = elements.status.value;
  const newData = [...data, { title, id: "id", status }];
  setData(newData);
  beginReact.style.display = "none";
});
