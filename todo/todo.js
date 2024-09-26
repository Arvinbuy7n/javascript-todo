const addCard = document.querySelectorAll(".second"); //modal gargah uyd click hiih button
const beginReact = document.querySelector(".beginReact"); //add task click hiih uyd garch ireh modal
const todoCards = document.querySelectorAll(".todoCards"); //shineer task nemeh uyd todoCards div-iin innerHTML ruu nemeh
const form = document.querySelector("form"); //modal garch ireh uyd bugluh heseg
const turns = document.querySelectorAll(".too"); //task count

let count = 1; //tuhain category-t bga taskiin too
let data = []; //shineer task nemegdeh uyd hooson array ruugaa nemeh

const setData = (arr) => {
  data = arr;
  render();
};

//catogory-oor ni angilj task nemeh
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

  //tuhain id-tai uussen taskiin id gaar ni barij delete hiih
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

//todoCards.innerHTML ruu nemegdeh shine task(shine task bur tusdaa id tai uusej bh)
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

//add task button darah uyd garch ireh modal
addCard.forEach((item) => {
  item.addEventListener("click", () => {
    beginReact.style.display = "flex";
  });
});

//modal neegdeh uyd bugluh form
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
