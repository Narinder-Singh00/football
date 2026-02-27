// Team Registration Alert
const formButton = document.querySelector(".glass-box button");

if(formButton){
  formButton.addEventListener("click", function(e){
    e.preventDefault();
    alert("Team Registered Successfully!");
  });
}