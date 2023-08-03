const columns = document.querySelectorAll(".board > span");
const reset = document.querySelector("#reset");
let cur = true;
let arr = new Array(9).fill(null);
const wins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function event(can) {
  reset.addEventListener("click", fnreset);
  columns.forEach((col) => {
    if (can) col.addEventListener("click", play);
    else col.removeEventListener("click", play);
  });
}

event(true);

function play(e) {
  const block = e.target;
  if (!block.textContent) {
    cur = !cur;
    block.textContent = cur ? "O" : "X";
    move(parseInt(block.id.split("-")[1]), block.textContent);
  }
}

function move(index, XorO) {
  arr[index] = XorO;
  console.log(arr);

  for (const [a, b, c] of wins) {
    if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
        console.log(arr[a]);
        console.log(arr[b]);
        console.log(arr[c]);
      console.log(XorO, "wins");
      event(false);
      columns[a].classList.add("win");
      columns[b].classList.add("win");
      columns[c].classList.add("win");
    }
  }
}

function fnreset() {
  columns.forEach((col) => {
    col.classList.remove("win");
    col.textContent = "";
  });
  arr = new Array(9).fill(null);
  event(true);
}
