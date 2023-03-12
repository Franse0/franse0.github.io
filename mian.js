// Menu hamburguesa
const barMenu = document.querySelector(".bars-menu");

let line1 = document.querySelector(".line1_bars-menu");
let line2 = document.querySelector(".line2_bars-menu");
let line3 = document.querySelector(".line3_bars-menu");


const animateBars=  ()=> {

    line1.classList.toggle("active-line1_bars-menu")
    line2.classList.toggle("active-line2_bars-menu")
    line3.classList.toggle("active-line3_bars-menu")


};

barMenu.addEventListener("click", animateBars);


const navItems = document.querySelector(".nav-items");


barMenu.addEventListener("click", ()=>{
    navItems.classList.toggle("nav-menu_visible")
})



// // productos
const btn1= document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const a = document.getElementById("a")
const b = document.getElementById("b")
const c = document.getElementById("c")




const seguroHogar =()=>{
    a.classList.remove("displayNone");
    a.classList.add("displayBlock");
    b.classList.remove("displayBlock");
    c.classList.remove("displayBlock");
    b.classList.add("displayNone");
    c.classList.add("displayNone");
};


const seguroAuto =()=>{
    b.classList.remove("displayNone");
    b.classList.add("displayBlock");
    a.classList.remove("displayBlock");
    c.classList.remove("displayBlock");
    a.classList.add("displayNone");
    c.classList.add("displayNone");
};


const seguroPersonal =()=>{
    c.classList.remove("displayNone");
    c.classList.add("displayBlock");
    a.classList.remove("displayBlock");
    b.classList.remove("displayBlock");
    a.classList.add("displayNone");
    b.classList.add("displayNone");
};

btn1.addEventListener("click", seguroHogar);
btn2.addEventListener("click", seguroAuto);
btn3.addEventListener("click", seguroPersonal);

