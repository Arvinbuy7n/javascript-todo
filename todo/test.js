const dom = document.getElementById("add");
const title = document.getElementById("title");

function changeText() {
  title.innerHTML = "soligdson";
}

dom.onclick = changeText;
// const addtask = document.getElementById("add");
// const todoCards = document.getElementsByClassName("todoCards")[0];

// function createTask() {
//   let task = `
//     <div class="task" id="">
//         <input type="radio" />
//         <p class="task_text">hello hi</p>

//         <div class="crud">
//             <p>e</p>
//             <p>d</p>
//         </div>
//      </div>
//     `;

//   todoCards.innerHTML = task;
// }

// addtask.onclick = createTask;
