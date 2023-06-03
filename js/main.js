const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".burger_close");
const menuIcon = document.querySelector(".burger");

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
    } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
    }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
    function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
    }
)






filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}




const modal1 = document.getElementById('dialog1')
const modalBox1 = document.getElementById('modal-box1')
const showModalBtn1 = document.getElementById('show-modal-btn1')
const closeModalBtn1 = document.getElementById('close-modal-btn1')

let isModalOpen1 = false

showModalBtn1.addEventListener('click', (e) => {
  modal1.showModal()
  isModalOpen1 = true
  e.stopPropagation()
})

closeModalBtn1.addEventListener('click', () => {
  modal1.close()
  isModalOpen1 = false
})

document.addEventListener('click', (e) => {
  if (isModalOpen1 && !modalBox1.contains(e.target)) {
    modal1.close()
  }
})



const modal2 = document.getElementById('dialog2')
const modalBox2 = document.getElementById('modal-box2')
const showModalBtn2 = document.getElementById('show-modal-btn2')
const closeModalBtn2 = document.getElementById('close-modal-btn2')

let isModalOpen2 = false

showModalBtn2.addEventListener('click', (e) => {
  modal2.showModal()
  isModalOpen2 = true
  e.stopPropagation()
})

closeModalBtn2.addEventListener('click', () => {
  modal2.close()
  isModalOpen2 = false
})

document.addEventListener('click', (e) => {
  if (isModalOpen2 && !modalBox2.contains(e.target)) {
    modal2.close()
  }
})


const modal3 = document.getElementById('dialog3')
const modalBox3 = document.getElementById('modal-box3')
const showModalBtn3 = document.getElementById('show-modal-btn3')
const closeModalBtn3 = document.getElementById('close-modal-btn3')

let isModalOpen3 = false

showModalBtn3.addEventListener('click', (e) => {
  modal3.showModal()
  isModalOpen3 = true
  e.stopPropagation()
})

closeModalBtn3.addEventListener('click', () => {
  modal3.close()
  isModalOpen3 = false
})

document.addEventListener('click', (e) => {
  if (isModalOpen3 && !modalBox3.contains(e.target)) {
    modal3.close()
  }
})


function hello(colorName) {
    var i;
    var x = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    document.getElementById(colorName).style.display = "flex";   }



var btnTabContainer = document.getElementById("myBtnContainer1");
var btnsTab = btnTabContainer.getElementsByClassName("btn");
for (var i = 0; i < btnsTab.length; i++) {
    btnsTab[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
}




var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}




var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide(){
  slides[currentSlide].className = 'slide';
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].className = 'slide showing';
}