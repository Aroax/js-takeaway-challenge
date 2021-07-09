document.addEventListener("DOMContentLoaded", () => {
  const takeaway = new TakeAway();

  let setupMenu = () => {
    takeaway.addDish("DISH", "PRICE");
    takeaway.addDish("chow mein", 5);
    takeaway.addDish("fried rice", 3.50);
    takeaway.addDish("prawn crackers", 1.99);
  };
  setupMenu();

  // let menuLength = (Object.keys(takeaway.menu)).length;
  // console.log(menuLength);

  let array = [
    ["Item", "Price"],
    [1,2,3],
    [3,4],
    [5,6],
    [7,8]
    ];

    console.log('hello')

  let makeTableHTML = () => {

    let menuLength = (Object.keys(takeaway.menu)).length;
    // console.log(menuLength)
    var result = "<table border=1>";
    for(var i=0; i<menuLength; i++) {
        result += "<tr>";
        for(var j=0; j<2; j++){
            result += "<td>"+takeaway.menu[Object.keys(takeaway.menu)[i]]+"</td>";
        }
        result += "</tr>";
    }
    result += "</table>";

    return result;


  };
  document.getElementById("menu-table").innerHTML = makeTableHTML();
});






// const menuData = require("./menu.js");

// import { menu } from './menu.js';

// let buildTable = (myArray) => {
//   var tableBody = document.getElementById("menu-table");
//
//   // Reset the table
//   tableBody.innerHTML = "";
//
//   // Build the new table
//   myArray.forEach( (row) => {
//       var newRow = document.createElement("tr");
//       tableBody.appendChild(newRow);
//
//       if (row instanceof Array) {
//           // const button = ""
//           row.push('<button class="btn btn-primary shop-item-button" type="button">ADD TO CART</button>')
//           row.forEach( (cell) => {
//               var newCell = document.createElement("td");
//               newCell.textContent = cell;
//               newRow.appendChild(newCell);
//           });
//       } else {
//           newCell = document.createElement("td");
//           newCell.textContent = row;
//           newRow.appendChild(newCell);
//       }
//   });
// }
//
// buildTable(array);
//
// function
