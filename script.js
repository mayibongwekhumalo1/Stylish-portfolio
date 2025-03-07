const hamburger =document.querySelector(".hamburger");
const sideBar =document.querySelector(".sidebar");


hamburger.addEventListener("click",() => {
    hamburger.classList.toggle("active");
    sideBar.classList.toggle("active");
})