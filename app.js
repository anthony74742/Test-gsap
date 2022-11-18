gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(DrawSVGPlugin);



/*
let t1 = gsap.timeline()

t1.to(".box", {
    duration:1,
    y:100,
    rotation: 360,
    backgroundColor: '#8d3dae',
    ease: "circ.out",
    repeat:Infinity,
    yoyo:true
})

t1.to(".box1", {
    duration:1,
    x:100,
    y:100,
    rotation: 360,
    backgroundColor: '#8d3dae',
    ease: "circ.out",
    repeat:Infinity,
    yoyo:true
})

t1.to(".box2", {
    duration:0.5,
    x:100,
    y:100,
    rotation: 360,
    backgroundColor: '#8d3dae',
    ease: "circ.out",
    repeat:Infinity,
    yoyo:true
})
*/
const play = () =>{
    t1.play()
}

const pause = () =>{
    t1.pause()
}

const t1 = gsap.timeline()

t1.to(".box", {
    duration: 7, 
    scale: 3.5, 
    motionPath:
        {
            path : "M -227 -67 C 660 118 686 599 1331 680",
            autoRotate: "auto"
        }
})

let t2 = gsap.timeline()

t2.from("path1", {drawSVG: 0},1)
t2.to("path1", {drawSVG: "100% 100%"},2)

gsap.to(".box1",{
    repeat: -1,
    duration: 5, 
    yoyo: true,
    motionPath:
    {
        path:"M -379 -45 C 246 450 1314 -177 2350 155",
        autoRotate: "auto"
    }

})

gsap.to(".box3",{
    scrollTrigger:{
     trigger: ".box3",
     toggleActions : "restart pause reverse pause"
    },
    opacity: 1,
    yoyo:true,
    x: 200,
    duration:1
})








/********************************/
/*
gsap.set(".astronaut", {scale: 0.5, autoAlpha: 1});

gsap.to(".astronaut", {
  duration: 5, 
  ease: "power1.inOut",
  immediateRender: true,
  repeat: 0,
  motionPath: {
    path: "#path",
    align: "#path",
    alignOrigin: [0.5, 0.5],
    autoRotate: 90
  }
});
*/