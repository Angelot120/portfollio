

let t1 = gsap.timeline();


t1.from('.letter',{
    duration: 1,
    opacity: 0,
    stagger: 0.25,
    color: '#F5F5DC'

})


// Responsive

t1.from('.letter-res',{
    duration: 1,
    opacity: 0,
    stagger: 0.25,
    color: '#F5F5DC'

})
t1.to('.letter-res',{
    y: -180

})



t1.to('.letter1',{
    duration: 0.5,
    dalay: 0.5,
    fontSize: '10rem',
    x: -300,
    y: 100
})


t1.to('.letter2',{
    duration: 0.5,
    dalay: -0.5,
    fontSize: '6rem',
    x: -280,
    y: 350
})


t1.to('.letter3',{
    duration: 0.5,
    dalay: -0.5,
    fontSize: '4rem',
    x: -100,
    y: -190
})


t1.to('.letter4',{
    duration: 0.5,
    dalay: -0.5,
    fontSize: '6rem',
    x: 0,
    y: -90
})


t1.to('.letter5',{
    duration: 0.5,
    dalay: -0.5,
    fontSize: '6rem',
    x: 20,
    y: 300
})


t1.to('.letter6',{
    duration: 0.5,
    dalay: -0.5,
    fontSize: '6rem',
    x: -130,
    y: 700
})


t1.to('.letter7',{
    duration: 0.5,
    dalay: -0.5,
    fontSize: '10rem',
    x: 100,
    y: 680
})


t1.from('header', {
    duration: 0.5,
    y: 40,
    opacity: 0
})

t1.from('.hero',{
    duration: 1,
    height: 0,
    opacity: 0
}, "<-0.5")

// t1.from('.hero',{
//     height: 0,
//     duration: 1,
//     opacity: 0
// }, "<-0.5")

t1.from('.triangle',{
    duration: 1,
    opacity: 0
}, "<0.5")


t1.from('.footer-left-items',{
    duration: 1,
    opacity: 0,
    // x: 0
})


t1.from('.after-banner',{
    duration: 1,
    opacity: 0,
    x: -40
})


t1.from('.card-session',{
    duration: 1,
    opacity: 0,
    y: 40
})


t1.from('.contact-session',{
    duration: 1,
    opacity: 0,
    x: -40
})


t1.from('.footer-img',{
    duration: 1,
    opacity: 0,
    y: 40
})






// t1.to('.letter1-res',{
//     duration: 0.5,
//     dalay: 0.5,
//     fontSize: '10rem',
//     x: -300,
//     y: 100
// })


// t1.to('.letter2-res',{
//     duration: 0.5,
//     dalay: -0.5,
//     fontSize: '6rem',
//     x: -280,
//     y: 350
// })


// t1.to('.letter3-res',{
//     duration: 0.5,
//     dalay: -0.5,
//     fontSize: '4rem',
//     x: -100,
//     y: -190
// })


// t1.to('.letter4-res',{
//     duration: 0.5,
//     dalay: -0.5,
//     fontSize: '6rem',
//     x: 0,
//     y: -90
// })


// t1.to('.letter5-res',{
//     duration: 0.5,
//     dalay: -0.5,
//     fontSize: '6rem',
//     x: 20,
//     y: 300
// })


// t1.to('.letter6-res',{
//     duration: 0.5,
//     dalay: -0.5,
//     fontSize: '6rem',
//     x: -130,
//     y: 700
// })


// t1.to('.letter7-res',{
//     duration: 0.5,
//     dalay: -0.5,
//     fontSize: '10rem',
//     x: 100,
//     y: 680
// })