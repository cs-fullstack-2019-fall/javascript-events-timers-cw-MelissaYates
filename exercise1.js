//get node references from the DOM
let checkbox = document.getElementById("check");


//set up event listener for checkbox (check)
checkbox.addEventListener("click", checked);//reference to call back function

// checkbox clicked
function checked(event) {
    //preventing the checkbox from being checked
    event.preventDefault();
    alert("I TOLD YOU NOT TO CLICK THIS!")
}


