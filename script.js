let cursor = document.querySelector(".cursor");
let cursorBlur = document.querySelector(".cursor-blur");

document.addEventListener("mousemove", function (dets) {
    cursor.style.left = dets.x + "px";
    cursor.style.top = dets.y + "px";
    cursorBlur.style.left = dets.x - 150 + "px";
    cursorBlur.style.top = dets.y - 150 + "px";
})

// nav gsap

gsap.to(".nav", {
    backgroundColor: "#000",
    height: "110px",
    duration: 0.5,
    scrollTrigger: {
        trigger: ".nav",
        scoller: "body",
        // markers:true , 
        start: "top -10%",
        end: "top -11%",
        scrub: 1,

    }
})

// main

gsap.to(".main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: ".main",
        scroller: "body",
        // markers: true ,
        start: "top -50%",
        end: "top -100%",
        scrub: 2,
    }
})

// page2

gsap.from(".about-area img, .about-content", {
    y: 90,
    opacity: 0 ,
    duration: 1,
    stagger: .4,
    scrollTrigger: {
        trigger: ".about-area img, .about-content",
        scroller: "body" ,
        // markers: true ,
        start: "top 90%",
        end: "top 55%",
        scrub: 1 ,
        
    }

})
gsap.from(".card", {
    scale: .8,
    opacity: 0 ,
    duration: .5,
    scrollTrigger: {
        trigger: ".about-area img, .about-content",
        scroller: "body" ,
        // markers: true ,
        start: "top 60%",
        // end: "top 40%",
        scrub: 1 ,
        
    }

})

// page3

gsap.to(".left", {
    x: -80,
    y: -80,
    duration: 1,
    delay: 2,
    scrollTrigger: {
        trigger: ".left",
        scroller: "body",
        // markers: true ,
        // start: "top 20%",
        // end: "top 0%",
        scrub: 1,
    }
})
gsap.to(".right", {
    x: 150,
    y: 150,
    duration: 1,
    delay: 2,
    scrollTrigger: {
        trigger: ".right",
        scroller: "body",
        // markers: true ,
        // start: "top 20%",
        // end: "top 0%",
        scrub: 1,
    }
})
gsap.from(".page3 p", {
    scale: 1.2,
    opacity: 0,
    scrollTrigger: {
        trigger: ".page3 p",
        scroller: "body",
        // markers: true ,
        scrub: 1,
    }
})

// page 4

gsap.to(".page4 h1", {
    y: -55,
    duration: 1 ,
    scrollTrigger: {
        trigger: ".page4 h1",
        scroller: "body",
        // markers: true ,
        start: "top 90%",
        end: "top 60%",
        scrub: 1 ,
    }
})