const inputBox = document.getElementById("input-box");
const addBtn = document.getElementById("add-btn");
const listContainer = document.getElementById("list-container");

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
    }
}



// button.addEventListener("click", function () {
//     // random num generate
//     // change the dice acc to num
//     // check for winner
//     // if draw try again

//     let obj = generateNum();
//     changeDice(obj);
//     checkWinner(obj);

// });