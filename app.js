const inputBox = document.getElementById("input-box");
const addBtn = document.getElementById("add-btn");
const listContainer = document.getElementById("list-container");
const lis = document.querySelectorAll("li");

addBtn.addEventListener("click", () => {
    addTask();
});


function addTask() {
    if (inputBox.value == "") {
        alert("Please enter a task!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = "";
    saveData()
}

listContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
    saveData()
});

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function reloadData() {
    listContainer.innerHTML = localStorage.getItem("data");
}

reloadData();