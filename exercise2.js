//get node references from the DOM
let box = document.getElementById("enter");
let user_click =document.getElementById("down");
let second_click =document.getElementById("down");

//set up event listener for button pressed to show text area
user_click.addEventListener("click", btn_pressed);//reference to call back function

function btn_pressed(event) {
        user_click.removeAttribute("disabled");
        box.setAttribute("disabled", " ");

    }



