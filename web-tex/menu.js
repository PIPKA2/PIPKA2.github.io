var t1 = new TimelineMax({ paused: true });
const menu = document.querySelector('.menu-container');

t1.to(".menu-container", 0.4, {
    right: "0%",
    ease: 'power4.easeInOut'
});

t1.reverse();
    $(document).on("click", ".nav-btn", function () {
    t1.reversed(!t1.reversed());
});
t1.reverse();
    $(document).on("click", ".close-btn", function () {
    t1.reversed(!t1.reversed());
});

document.querySelector('.nav-btn').addEventListener("click", () =>{
    menu.classList.add('menu--open')
});
document.querySelector(".close-btn").addEventListener("click", () => {
    menu.classList.remove("menu--open");
});
