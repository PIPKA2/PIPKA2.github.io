var t1 = new TimelineMax({ paused: true });

t1.to(".menu-container", 0.4, {
    right: "0%",
});
t1.from(".menu--link--1", 1.5,{
    y:"-100%",
    ease:Power4.easeOut
});

t1.reverse();
    $(document).on("click", ".nav-btn", function () {
    t1.reversed(!t1.reversed());
});
