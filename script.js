function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}


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
};

const page2Abimation = () => {
let allRightelem = document.querySelectorAll(".right-elem")

allRightelem.forEach((val) => {
    val.addEventListener("mouseenter" ,(dets) => {
         gsap.to(val.childNodes[3] , {
            opacity: 1,
            scale: 1
         })
    })

    val.addEventListener("mouseleave" ,(dets) => {
         gsap.to(val.childNodes[3] , {
            opacity: 0,
            scale: 0
         })
    })

    val.addEventListener("mousemove" , (dets) =>{
        // console.log(val.getBoundingClientRect().y)

        gsap.to(val.childNodes[3] , {
            x:dets.x- val.getBoundingClientRect().x-60,
            y:dets.y- val.getBoundingClientRect().y-140

        })
       
    })
})
};

const videoAnim = () => {
    let pageCenter = document.querySelector(".page3-center");
var video = document.querySelector(".page3 video")

pageCenter.addEventListener("click" , () => {
    video.play();
    gsap.to(video , {
        transform : "scaleX(1) scaleY(1)",
        opacity: 1,
        borderRadius: 0
    })
})

video.addEventListener("click" , () => {
    video.pause();
     gsap.to(video , {
        transform : "scaleX(0.7) scaleY(0)",
        opacity: 0,
        borderRadius: "30px",
    })
})

};


const videiAnimation2 = () => {
    let videoPage6 = document.querySelectorAll(".section video")
let section = document.querySelectorAll(".sec-right");
let circle = document.querySelector(".sec-right .circle");

section.forEach((elem) => {
    console.log(elem.childNodes[5])
    elem.addEventListener("mouseenter" , () => {
      elem.childNodes[5].style.opacity = 1
      elem.childNodes[5].play();
      circle.style.opacity = 1
    })

    elem.addEventListener("mouseleave" , ()=> {
         elem.childNodes[5].style.opacity = 0
      elem.childNodes[5].load()
       circle.style.opacity = 0
    })

    elem.addEventListener("mousemove" , (dets) => {
      circle.style.top = dets.y
      circle.style.left = dets.x
    })
})


}

const textAnimation = () => {
    gsap.from(".bottom8-part2 h4" ,{
    x:0,
    duration:1,
    scrollTrigger: {
        trigger: ".bottom8-part2",
        scroller:".main",
        start:"top 80%",
        end: "top 10%",
        scrub:2
    }
})

gsap.from(".bottom8-part3 h4" ,{
    x:0,
    duration:1,
    scrollTrigger: {
        trigger: ".bottom8-part3",
        scroller:".main",
        start:"top 80%",
        end: "top 10%",
        scrub:2
    }
})

gsap.from(".bottom8-part4 h4" ,{
    x:0,
    duration:1,
    scrollTrigger: {
        trigger: ".bottom8-part4",
        scroller:".main",
        start:"top 80%",
        end: "top 10%",
        scrub:2
    }
})

}

const loadingAnimation = () => {
  var tl = gsap.timeline()

tl.from(".page1" , {
  opacity:0,
  duration:0.2,
  delay:0.2
})

tl.from(".page1" , {
    transform:"scaleX(0.7) scaleY(0.2) translateY(80%)",
    borderRadius: "150px",
    duration:2,
  ease:"expo.out"

})

tl.from("nav" , {
    opacity:0,
    delay:-0.2
})

tl.from(".page1 h1, .page1 p, .page1 div" , {
    opacity: 0,
    stagger:0.2,
    duration:0.5
})
}


navAnimation();

page2Abimation();

videoAnim();

videiAnimation2();

locomotiveAnimation()

textAnimation()

loadingAnimation()


