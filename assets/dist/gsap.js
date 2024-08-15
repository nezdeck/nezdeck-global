
// header
gsap.to("#headerlogo", {
    opacity: 1,
    duration: .5,
    marginLeft: '10px'
})
gsap.to("#header-collapsed-content li", {
    opacity: 1,
    duration: .5,
})
gsap.to("#headerButtons button", {
    opacity: 1,
    duration: .5,
    marginRight: '15px',
})
gsap.to("#sectionImage img", {
    opacity: 1,
    duration: .5,
})


// section
gsap.to("#section-01 #sectionTag", {
    duration: .5,
    opacity: 1,
})
gsap.to("#sectionHeading", {
    duration: .5,
    opacity: 1,
})
gsap.to("#sectionPara", {
    duration: .5,
    opacity: 1,
})
gsap.to("#sectionSolidBtn", {
    duration: .5,
    opacity: 1,
})
gsap.to("#sectionPlayBtn", {
    duration: .5,
    marginLeft: '10px',
    opacity: 1,
})

gsap.from("#section-02 #sectionTag", {
    duration: .7,
    opacity: 0,
    x: -20,
    scrollTrigger: {
        trigger: "#section-02",
        scroller: "body",
        start: 'top 70%',
    }
})
gsap.from("#section-02 #sectionTitle", {
    duration: .7,
    delay: .2,
    opacity: 0,
    x: -20,
    scrollTrigger: {
        trigger: "#section-02",
        scroller: "body",
        start: 'top 70%',
    }
})
gsap.from("#section-02 .animateBtn", {
    duration: .7,
    delay: .4,
    opacity: 0,
    x: -20,
    scrollTrigger: {
        trigger: "#section-02",
        scroller: "body",
        start: 'top 70%',
    }
})
gsap.from("#section-02 #paragraph", {
    duration: .7,
    delay: .6,
    opacity: 0,
    x: -20,
    scrollTrigger: {
        trigger: "#section-02",
        scroller: "body",
        start: 'top 70%',
    }
})
gsap.from("#section-02 .cards", {
    duration: .7,
    delay: .8,
    opacity: 0,
    y: 20,
    scrollTrigger: {
        trigger: "#section-02",
        scroller: "body",
        start: 'top 30%',
    }
})
gsap.from("#section-02 .cards .animateImage", {
    duration: .7,
    delay: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: "#section-02",
        scroller: "body",
        start: 'top 30%',
    }
})
gsap.from("#section-02 .cards .animateText", {
    duration: .7,
    delay: 1.2,
    opacity: 0,

    scrollTrigger: {
        trigger: "#section-02",
        scroller: "body",
        start: 'top 30%',
    }
})



// section 03 animations
gsap.from("#section-03 #section03Tag", {
    duration: .7,
    opacity: 0,
    x: -20,
    scrollTrigger: {
        trigger: "#section-03",
        scroller: "body",
        start: 'top 60%',
    }
})
gsap.from("#section-03 #section03Heading", {
    duration: .7,
    opacity: 0,
    delay: .1,
    x: -20,
    scrollTrigger: {
        trigger: "#section-03",
        scroller: "body",
        start: 'top 55%',
    }
})
gsap.from("#section-03 #section03Para", {
    duration: .7,
    opacity: 0,
    delay: .2,
    x: -20,
    scrollTrigger: {
        trigger: "#section-03",
        scroller: "body",
        start: 'top 50%',
    }
})
gsap.from("#section-03 #section03List", {
    duration: .7,
    opacity: 0,
    delay: .3,
    x: -20,
    scrollTrigger: {
        trigger: "#section-03",
        scroller: "body",
        start: 'top 40%',
    }
})
gsap.from("#section-03 #section03ImageContainer", {
    duration: .7,
    opacity: 0,
    delay: .1,
    x: 20,
    scrollTrigger: {
        trigger: "#section-03",
        scroller: "body",
        start: 'top 60%',
    }
})

// section 04 animations
gsap.from("#section-04 #section04Tag", {
    duration: .7,
    opacity: 0,
    x: -20,
    scrollTrigger: {
        trigger: "#section-04",
        scroller: "body",
        start: 'top 60%',
    }
})
gsap.from("#section-04 #section04Heading", {
    duration: .7,
    opacity: 0,
    delay: .1,
    x: -20,
    scrollTrigger: {
        trigger: "#section-04",
        scroller: "body",
        start: 'top 55%',
    }
})
gsap.from("#section-04 #section04Para", {
    duration: .7,
    opacity: 0,
    delay: .2,
    x: -20,
    scrollTrigger: {
        trigger: "#section-04",
        scroller: "body",
        start: 'top 50%',
    }
})
gsap.from("#section-04 #section04List", {
    duration: .7,
    opacity: 0,
    delay: .3,
    x: -20,
    scrollTrigger: {
        trigger: "#section-04",
        scroller: "body",
        start: 'top 40%',
    }
})
gsap.from("#section-04 #section04ImageContainer", {
    duration: .7,
    opacity: 0,
    delay: .1,
    x: 20,
    scrollTrigger: {
        trigger: "#section-04",
        scroller: "body",
        start: 'top 60%',
    }
})


// section 05 animations
gsap.from("#section-05 #section05Tag", {
    duration: .7,
    opacity: 0,
    x: -20,
    scrollTrigger: {
        trigger: "#section-05",
        scroller: "body",
        start: 'top 60%',
    }
})
gsap.from("#section-05 #section05Heading", {
    duration: .7,
    opacity: 0,
    delay: .1,
    x: -20,
    scrollTrigger: {
        trigger: "#section-05",
        scroller: "body",
        start: 'top 55%',
    }
})
gsap.from("#section-05 #section05Para", {
    duration: .7,
    opacity: 0,
    delay: .2,
    x: -20,
    scrollTrigger: {
        trigger: "#section-05",
        scroller: "body",
        start: 'top 50%',
    }
})
gsap.from("#section-05 #section05List", {
    duration: .7,
    opacity: 0,
    delay: .3,
    x: -20,
    scrollTrigger: {
        trigger: "#section-05",
        scroller: "body",
        start: 'top 40%',
    }
})
gsap.from("#section-05 #section05ImageContainer", {
    duration: .7,
    opacity: 0,
    delay: .1,
    x: 20,
    scrollTrigger: {
        trigger: "#section-05",
        scroller: "body",
        start: 'top 60%',
    }
})

// section 06 animations
gsap.from("#section-06 #section06Btn", {
    // delay: .3,
    duration: .7,
    opacity: 0,
    scrollTrigger: {
        trigger: "#section-06",
        scroller: "body",
        start: 'top 65%',
    }
})
gsap.from("#section-06 #section06Heading", {
    duration: .7,
    opacity: 0,
    delay: .1,
    x: -20,
    scrollTrigger: {
        trigger: "#section-06",
        scroller: "body",
        start: 'top 65%',
    }
})
gsap.from("#section-06 #section06Para", {
    duration: .7,
    opacity: 0,
    delay: .2,
    x: -20,
    scrollTrigger: {
        trigger: "#section-06",
        scroller: "body",
        start: 'top 65%',
    }
})
gsap.from("#section-06 #section06Card01", {
    duration: .7,
    opacity: 0,
    delay: .3,
    y: 40,
    scrollTrigger: {
        trigger: "#section-06",
        scroller: "body",
        start: 'top 55%',
    }
})
gsap.from("#section-06 #section06Card02", {
    duration: .7,
    opacity: 0,
    delay: .5,
    y: 40,
    scrollTrigger: {
        trigger: "#section-06",
        scroller: "body",
        start: 'top 55%',
    }
})
gsap.from("#section-06 #section06Card03", {
    duration: .7,
    opacity: 0,
    delay: .7,
    y: 40,
    scrollTrigger: {
        trigger: "#section-06",
        scroller: "body",
        start: 'top 55%',
    }
})
// section 07 animations
gsap.from("#section-07 #ContactBox", {
    duration: .7,
    opacity: 0,
    y: 50,
    scrollTrigger: {
        trigger: "#section-07",
        scroller: "body",
        start: 'top 55%',
    }
})