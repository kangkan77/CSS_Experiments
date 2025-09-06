const tl = gsap.timeline()

tl.from("h1",{
    y:-20,
    opacity:0,
    duration:1,
    delay:.2
})
tl.from("h2",{
    y:-20,
    duration:1,
    opacity:0,
    stagger:.3
})
tl.from("h3",{
    y:-30,
    opacity:0,
    duration:1.5,
    delay:.3,
    scale:.7
})