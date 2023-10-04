let mod = document.getElementById("mod")
let icon = document.querySelector(".icon");

let munu = document.querySelector(".menu")

let width = screen.width;
let munlist  = document.querySelector(".munu-liste")

let rmove =document.querySelector(".rmove")
let getmode = sessionStorage.getItem("mode");

if (getmode && getmode === "dark" ) {
document.body.classList.add("dark");

}



munu.addEventListener("click",()=>{
 munlist.style.display="block";
 rmove.style.display="block";
 munu.style.display="none"
 
})
rmove.addEventListener("click",()=>{
 munlist.style.display="none";
 rmove.style.display="none";
 munu.style.display="block"
 
})


mod.addEventListener("click",()=>{
 
 document.body.classList.toggle("dark")
 if (document.body.classList.contains("dark")) {
  icon.classList.remove("fa-moon");
  icon.classList.add("fa-sun")
 }
 else{
icon.classList.remove("fa-sun");
icon.classList.add("fa-moon")
 }
 
 if (!document.body.classList.contains("dark")) {
  return sessionStorage.setItem("mode", "lighet")
 }
 sessionStorage.setItem("mode", "dark")
 
 
})