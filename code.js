const menuBtn = document.querySelector(".menu");
const navigation = document.querySelector("main header nav");
const bars = document.querySelectorAll(".sma");
menuBtn.addEventListener("click", () => {
    navigation.classList.toggle("sideNav");
    bars[0].classList.toggle("onTop")
    bars[1].classList.toggle("onMid")
    bars[2].classList.toggle("onBot")
})