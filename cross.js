
// this function will help input the correct answer in the boxes by searching for the class
function checkAnswer() {
    let answer = "'" + document.querySelector("input").value + "'";
    for (let node of document.querySelectorAll("td")) {
        if (node.className.indexOf(answer) >= 0) {
            node.style = "color: black;";
        }
    }
    document.querySelector("input").value = "";
}

console.log(checkAnswer)