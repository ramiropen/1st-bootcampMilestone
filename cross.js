
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



// const map = [
//     "WWWWWWWWWW",
//     "WP       W",
//     "WWWWW WW W",
//     "W W   W  W",
//     "W W WWWWWW",
//     "W    W WFW",
//     "WWWW   W W",
//     "W    WWW W",
//     "W WW W   W",
//     "W  W   W W",
//     "WWWWWWWWWW",
//   ];
  
//   function buildMap(table) {
//     for (let tr = 0; tr < table.length; tr++) {
//       let rowDiv = document.createElement("div");
//       rowDiv.classList.add("row");
  
//       for (let td = 0; td < table[tr].length; td++) {
//         let cell = document.createElement("div");
//         cell.classList.add("cell");
  
//         let cellType = table[tr][x];
  
//         if (cellType === "W") {
//           cell.classList.add("wall");
//         }
//         rowDiv.append(cell);
//       }
  
//       let mapDiv = document.querySelector(".map");
//       mapDiv.append(rowDiv);
//     }
//   }