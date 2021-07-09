class Takeaway {

  //  menuTableCreation() {
  //    const menuData =
  // }



};

let array = [
  ["Item", "Price"],
  [1,2,3],
  [3,4],
  [5,6],
  [7,8]
  ];

// const menuData = require("./menu.js");

// import { menu } from './menu.js';

let buildTable = (myArray) => {
  var tableBody = document.getElementById("menu-table");

  // Reset the table
  tableBody.innerHTML = "";

  // Build the new table
  myArray.forEach( (row) => {
      var newRow = document.createElement("tr");
      tableBody.appendChild(newRow);

      if (row instanceof Array) {
          // const button = ""
          row.push('<button class="btn btn-primary shop-item-button" type="button">ADD TO CART</button>')
          row.forEach( (cell) => {
              var newCell = document.createElement("td");
              newCell.textContent = cell;
              newRow.appendChild(newCell);
          });
      } else {
          newCell = document.createElement("td");
          newCell.textContent = row;
          newRow.appendChild(newCell);
      }
  });
}

buildTable(array);
