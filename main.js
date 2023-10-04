let image = document.getElementById("image");

let upload = document.getElementById("upload");
let saturate = document.getElementById("saturate");
let contrast = document.getElementById("contrast");
let brightness = document.getElementById("brightness");

let sepia = document.getElementById("sepia");

let grayscale = document.getElementById("grayscale");

let blur = document.getElementById("blur");

let huorotat = document.getElementById("hue-rotate");

let download = document.getElementById("download");


let imagbox= document.querySelector(".img");
let info = document.querySelectorAll(".info li")

let input = document.querySelectorAll(".input li")

let flater = document.getElementById("flater")

let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")

let mod = document.getElementById("mod")

let icon = document.querySelector(".icon");
let vl1= document.getElementById("vl1")
let vl2= document.getElementById("vl2")
let vl3= document.getElementById("vl3")
let vl4= document.getElementById("vl4")
let vl5= document.getElementById("vl5")
let vl6= document.getElementById("vl6")
let vl7= document.getElementById("vl7")




rotateoption= document.querySelectorAll(".rt li");

let  rotate= 0;

let rtr = document.getElementById("rtr");

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


saturate.oninput=()=>{
 vl1.innerHTML= `${saturate.value}`;
 
 
}


contrast.oninput=()=>{
 vl2.innerHTML=  `${contrast.value}`;
 
}

brightness.oninput=()=>{
 vl3.innerHTML=  `${brightness.value}`;
 
}

sepia.oninput = () => {
 vl4.innerHTML =  `${sepia.value}`;

}

grayscale.oninput = () => {
 vl5.innerHTML =  `${grayscale.value}`;

}

blur.oninput = () => {
 vl6.innerHTML =  `${blur.value}`;
}

huorotat.oninput = () => {
 vl7.innerHTML =  `${huorotat.value}`;

}


window.addEventListener("load",()=>{
 imagbox.style.display="none";
 download.style.display="none";
 
 flater.style.display="none"
if (width>=650) {
 munu.style.display="none";
munlist.style.display="none";
}
 
})

const filterapply =()=>{
 
 
 ctx.filter=`
  saturate(${saturate.value}%)
  brightness(${brightness.value}%)
contrast(${contrast.value}%)
sepia(${sepia.value}%)
grayscale(${grayscale.value})
blur(${blur.value}px)
hue-rotate(${huorotat.value}deg)

  `
  ctx.drawImage(image,0,0,canvas.width,canvas.height);
 
}



info.forEach(li=>{
 li.onclick =()=>{
  info.forEach(li=>{
   li.className=""
  })
  li.className="current";
  let temp = li.textContent;
  input.forEach(img=>{
   img.style.display="none";
   if (img.getAttribute("data-filter")== temp.toLowerCase() ) {
    img.style.display="block"
    flater.style.display="block"
   }
  })
 }
 
})


function rstv() {
 image.style.filter="none";
 saturate.value="100";
 contrast.value="100";
 brightness.value="100";
 sepia.value="0";
 grayscale.value="0";
 blur.value="0";
 huorotat.value="0";
 vl1.innerHTML="100";
vl2.innerHTML="100";
vl3.innerHTML="100";
vl4.innerHTML="0";
vl5.innerHTML="0";
vl6.innerHTML="0";
vl7.innerHTML="0";

}

upload.onchange=()=>{
rstv()
imagbox.style.display="block";
 download.style.display="block";
 
 let file = new FileReader();
 file.readAsDataURL(upload.files[0]);
 file.onload = ()=>{
  image.src=file.result;
 }
 
 image.onload =()=>{
  canvas.width=image.width;
  canvas.height= image.height;
  ctx.drawImage(image,0,0,canvas.width,canvas.height);
  image.style.display="none";
  
 }
}





let filtres = document.querySelectorAll("ul li input");


filtres.forEach(filtre=>{
 filtre.addEventListener("input",()=>{
  filterapply()
 })
})





download.onclick=()=>{
 download.href=canvas.toDataURL()
}

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




