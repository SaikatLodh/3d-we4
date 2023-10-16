const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

var tl = gsap.timeline()

tl.to(".page1",{
    y:"100vh",
    scale:0.6,
    duration:0
})
tl.to(".page1",{
    y:"30vh",
    duration:1,
    delay:1
})
tl.to(".page1",{
    y:"0vh",
    rotate:360,
    scale:1,
    duration:0.7
})



var swiper = new Swiper("#fast", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
},
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  var swiper = new Swiper("#second", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

var show = document.querySelector(".nav3")
var hide = document.querySelector(".inner-icon")
var containet = document.querySelector(".show-and-hide")


show.addEventListener("click",function(){
    gsap.to(".show-and-hide",{
        scale:1,
        opacity:1,
        display:"block",
})
})

hide.addEventListener("click",function(){
    gsap.to(".show-and-hide",{
        scale:0.5,
        opacity:0,
        display:"none",
})
})