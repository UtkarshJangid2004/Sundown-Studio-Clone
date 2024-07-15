const width = window.innerWidth;

function loco() {
  gsap.registerPlugin(ScrollTrigger);


  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });

  locoScroll.on("scroll", ScrollTrigger.update);


  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();

}

function anime() {
  let mm = gsap.matchMedia();
  mm.add("(min-width: 1025px)", () => {
    gsap.to("#hero3", {
      rotation: 20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    })
    gsap.to("#hero1", {
      y: "-4.5vw",
      duration: 5,
      repeat: -1,
      delay: 2.5,
      yoyo: true,
      ease: "power1.inOut"
    })
    gsap.to(".section", {
      x: "-100%",
      duration: 10,
      repeat: -1,
      ease: "linear"
    })
    gsap.to("#hero4", {
      xPercent: -10,
      yPercent: 10,
      skewX: -12,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      startAt: {
        xPercent: 10,
        yPercent: -10,
        skewX: 0
      }
    })
    gsap.to("#hero5", {
      yPercent: 5,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    })

    gsap.to("#hero6", {
      rotation: 40,
      delay: 5,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    })
    gsap.to("#hero8", {
      rotation: -30,
      delay: 2,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "linear"
    })
    gsap.to("#hero7", {
      y: "-10%",
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "linear"
    })
    var tl = gsap.timeline()
    tl.to("#loader h1:nth-child(1)", {
      opacity: 1,
      duration: 0.1,
      delay: .2
    })
    tl.to("#loader h1:nth-child(1)", {
      opacity: 0,
      duration: 0.1,
      delay: 0.9
    })
    tl.to("#loader h1:nth-child(2)", {
      opacity: 1,
      duration: 0.1,
      delay: .2
    })
    tl.to("#loader h1:nth-child(2)", {
      opacity: 0,
      duration: 0.1,
      delay: 0.9
    })
    tl.to("#loader h1:nth-child(3)", {
      opacity: 1,
      duration: 0.1,
      delay: .2
    })
    tl.to("#loader h1:nth-child(3)", {
      opacity: 0,
      duration: 0.1,
      delay: 0.9
    });
    tl.to("#loader", {
      y: "-100%",
      duration: .5,
      delay: 0
    })
  });
  mm.add("(max-width: 767px)", () => {
    gsap.to("#hero2", {
      rotation: 360,
      duration: 3,
      skewX: -15,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    })
    gsap.to("#hero1", {
      y: "-4.5vh",
      x:"-9vh",
      rotation:20,
      duration: 3,
      skewX: -25,
      repeat: -1,
      delay: 2.5,
      yoyo: true,
      ease: "power1.inOut"
    })
    gsap.to(".section", {
      x: "-100%",
      duration: 10,
      repeat: -1,
      ease: "linear"
    })
    gsap.to("#hero4", {
      xPercent: -10,
      yPercent: 10,
      skewX: -12,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      startAt: {
        xPercent: 10,
        yPercent: -10,
        skewX: 0
      }
    })
    gsap.to("#hero5", {
      yPercent: 5,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    })

    gsap.to("#hero6", {
      rotation: 40,
      delay: 5,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    })
    gsap.to("#hero8", {
      rotation: -30,
      delay: 2,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "linear"
    })
    gsap.to("#hero7", {
      y: "-10%",
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "linear"
    })
    var tl = gsap.timeline()
    tl.to("#loader h1:nth-child(1)", {
      opacity: 1,
      duration: 0.1,
      delay: .2
    })
    tl.to("#loader h1:nth-child(1)", {
      opacity: 0,
      duration: 0.1,
      delay: 0.9
    })
    tl.to("#loader h1:nth-child(2)", {
      opacity: 1,
      duration: 0.1,
      delay: .2
    })
    tl.to("#loader h1:nth-child(2)", {
      opacity: 0,
      duration: 0.1,
      delay: 0.9
    })
    tl.to("#loader h1:nth-child(3)", {
      opacity: 1,
      duration: 0.1,
      delay: .2
    })
    tl.to("#loader h1:nth-child(3)", {
      opacity: 0,
      duration: 0.1,
      delay: 0.9
    });
    tl.to("#loader", {
      y: "-100%",
      duration: .5,
      delay: 0
    })
  });
}

function img() {
  var elemc = document.querySelector("#elem-container");
  var fixed = document.querySelector("#fixed_video");
  if (width >= 1000) {
    elemc.addEventListener("mouseenter", () => {
      fixed.style.display = "block";
      fixed.pause();
    })
    elemc.addEventListener("mouseleave", () => {
      fixed.style.display = "none";
    })
  } else {
    fixed.style.display = "none";
  }

  var elems = document.querySelectorAll(".elem");
  elems.forEach((e) => {
    e.addEventListener("mouseenter", () => {
      var video = e.getAttribute("data-image");
      fixed.src = video;
      fixed.play();
    })
  })
}


function swiper() {
  var swiper = new Swiper(".mySwiper", {
    breakpoints: {
      320: {
        slidesPerView: 1.5,
        spaceBetween: 10
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 3.5,
        spaceBetween: 30
      }
    },
    direction: 'horizontal', 
    mousewheel: {
      forceToAxis: true, 
      releaseOnEdges: true, 
      sensitivity: 1, 
    },
    freeMode: true,
    speed: 800,
  });


}

function pg4() {
  document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab');
    const sections = document.querySelectorAll('.content-section');
    const paragraphs = document.querySelectorAll('.content-paragraph');
    const scroller = document.querySelector('.scroller');

    tabs.forEach((tab, index) => {
      tab.addEventListener('click', function () {
        tabs.forEach(tab => tab.classList.remove('active'));

        this.classList.add('active');

        sections.forEach(section => section.classList.remove('active'));

        const contentId = this.getAttribute('data-content');
        document.getElementById(contentId).classList.add('active');

        paragraphs.forEach(paragraph => paragraph.classList.remove('active'));

        document.getElementById(contentId + '-paragraph').classList.add('active');
        if (width >= 1000) {
          scroller.style.top = `${index * 4.3}vw`;
          scroller.style.height = `${tabs[index].offsetHeight}px`;
        }
        else {
          scroller.style.top = `${index * 3.5}vh`;
          scroller.style.height = `${tabs[index].offsetHeight}px`
        }
      });
    });

    tabs[0].classList.add('active');
    sections[0].classList.add('active');
    paragraphs[0].classList.add('active');
    scroller.style.top = '0';
    scroller.style.height = `${tabs[0].offsetHeight}px`;
  });

}
function menuAnimation() {

  var menu = document.querySelector("#nav h3")
  var full = document.querySelector("#full-scr")
  var navimg = document.querySelector("#nav img")
  var flag = 0
  menu.addEventListener("click", function () {
    if (flag == 0) {
      full.style.top = 0
      navimg.style.opacity = 0
      flag = 1
    } else {
      full.style.top = "-100%"
      navimg.style.opacity = 1
      flag = 0
    }
  })
}

menuAnimation()
pg4()
swiper()
img()
anime()
loco()