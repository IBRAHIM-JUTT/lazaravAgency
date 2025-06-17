const navAnimation = () => {
    let nav = document.querySelector("nav")

nav.addEventListener("mouseenter" , () => {
    let  tl = gsap.timeline();
    tl.to(".nav-bottom" , {
        height: "30vh"
    })

    tl.to(".nav-options h5" , {
        display:"block"
    })

    tl.to(".nav-options  h5 span" , {
        y:0,
        stagger:{
            amount:0.6
        }
    } , "-=0.5")
})

nav.addEventListener("mouseleave" , () => {
    let tl =  gsap.timeline()
    


     tl.to(".nav-options .nav-elem h5 span" , {
        y:25,
        stagger:{
            amount:0.2
        }
        
    } )

    tl.to(".nav-options h5" , {
        display: "none",
        duration:0.1
    })

    tl.to(".nav-bottom" , {
        height:0,
        duration:0.2
    })
})
}


// navAnimation()



// gsap.to(".nav-bottom" , {
//     y:-20,
//     scrollTrigger: {
//         trigger:".nav-bottom"
//     }
// })