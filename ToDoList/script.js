function start() {
  let add = document.getElementById("add");
  let todocont = document.getElementById("toDoContainer");
  let input = document.getElementById("input");

  if (input.value === "" || input.value == 0) {
    alert("You must write Something");
  } else {
    var paragraph = document.createElement("p");
    paragraph.classList.add("styling");
    paragraph.innerText = input.value;
    todocont.appendChild(paragraph);
    input.value = " ";
    paragraph.addEventListener("click", function () {
      paragraph.style.textDecoration = "line-through";
    });
  }
}
