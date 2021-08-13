gsap.registerPlugin(ScrollTrigger);


const timeline = gsap.timeline({delay: 0.5});

timeline.from('.animation-loader--text--1', 1.5, {
    y:"-100%",
    ease:Power4.easeOut
});
timeline.to('.animation-loader--text--1', 2, {
    y:"150%",
    ease:Power4.easeOut
});
timeline.from('.animation-loader--text--2', 0.9, {
    y:"-100%",
    ease:Power4.easeOut
});
    timeline.to('.animation-loader--text--2', 1.5, {
    y:"150%",
    ease:Power4.easeOut
});
timeline.to(".loader", {
    delay: .5,
    duration: 1.5,
    opacity: 0
}, "=-.3");
timeline.to(".loader",{
    zIndex: -1,
    duration: .1
});
timeline.from("logo", {
    duration: 2,
    opacity: 0,
    y: -100,
    ease: 'power4',
}, "-=.2");


