
var input = document.getElementById("btnTodo");
var addBtn = document.getElementById("btnId");
var todos = document.getElementById("todos");

addBtn.addEventListener("click", function () {
    var text = input.value;
    
    const li = document.createElement("li");
    const p = document.createElement("p");
    const i = document.createElement("i");
    i.classList = "fa-regular fa-trash-can";
    p.innerText = text;
    li.appendChild(p);
    li.appendChild(i);
    todos.appendChild(li);
})
todos.addEventListener("mouseover", function (e) {
    var deleteBtns = document.querySelectorAll(".fa-trash-can");
    deleteBtns.forEach(btn => {
        btn.addEventListener("click", function (e) {
            var element = e.target.parentElement;
            element.remove();
        });
    });
})