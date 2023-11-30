// elems
const logBtn = document.getElementById("btn-log");
const clearBtn = document.getElementById("btn-clear");
const blockBtn = document.getElementById("btn-block");
const hideBtn = document.getElementById("btn-hide");
const colorBtn = document.getElementById("btn-color");
const createBtn = document.getElementById("btn-create");
const removeLastBtn = document.getElementById("btn-remove-last");
const removeNthBtn = document.getElementById("btn-remove-nth");
const textInputEl = document.getElementById("input-text");
const blocksWrapper = document.getElementById("blocks-wrapper");
const numberInputEl = document.getElementById("input-number");

// listeners
logBtn.addEventListener("click", log);
colorBtn.addEventListener("click", color);
clearBtn.addEventListener("click", clear);
blockBtn.addEventListener("click", disable);
hideBtn.addEventListener("click", hide);
createBtn.addEventListener("click", create);
removeLastBtn.addEventListener("click", removeLast);
removeNthBtn.addEventListener("click", removeNth);
textInputEl.addEventListener('keyup', create);

// funcs
function log() {
  console.log(textInputEl.value);
}

function clear() {
  textInputEl.value = "";
}

function disable() {
  if (textInputEl.getAttribute("disabled")) {
    textInputEl.removeAttribute("disabled");
  } else {
    textInputEl.setAttribute("disabled", true);
  }
}

function hide() {
  textInputEl.classList.toggle("hide");
}

function color() {
  const clrs = ["black", "red", "green", "blue"];
  const randomNum = Math.floor(Math.random() * clrs.length);
  textInputEl.style.setProperty("box-shadow", `0 0 5px ${clrs[randomNum]}`);
}

function create(e) {
    if(e.type === 'keyup' &&  e.key !== 'Enter') return;
  const divEl = document.createElement("div");
  divEl.innerText =
    textInputEl.value.trim().length === 0 ? "empty" : textInputEl.value;
  divEl.className = "block";
  textInputEl.value = "";
  blocksWrapper.append(divEl);
}

function removeLast() {
  if (blocksWrapper.lastChild) {
    blocksWrapper.lastChild.remove();
  }
}

function removeNth() {
  const blocks = document.querySelectorAll(".block");
  const num = numberInputEl.value.trim();
  if (blocks[num - 1]) {
    console.log(blocks[num - 1].remove());
  }
}
