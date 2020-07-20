//This documents handles the user form in my portofolio

var email = document.getElementById('email').value.toString();
var name = document.getElementById('name');
var projectTitle = document.getElementById('title');
var submitButton = document.getElementById('submit').addEventListener('click', ShowIt);

function ShowIt(){
    console.log("User input ii not categorized");
    console.log(email.value.toString());
    console.log(name.value);
    console.log(projectTitle.value);
}

