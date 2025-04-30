/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Simon Still
      Date: 4/4/2025

      Filename: project03-01.js
*/

let menuItems = document.getElementsByClassName("menuItem");

function calcTotal(){
      let orderTotal = 0;
      for(let i = 0; i < menuItems.length; i++){
            if (menuItems[i].checked){
                  orderTotal += Number(menuItems[i].value);
            } 
      } 
      document.getElementById('billTotal').innerHTML = formatCurrency(orderTotal);
}

for(let i = 0; i < menuItems.length; i++){
      menuItems[i].addEventListener('click', calcTotal);
}

// Function to display a numeric value as a text string in the format $##.## 
function formatCurrency(value) {
    return "$" + value.toFixed(2);
}
 
