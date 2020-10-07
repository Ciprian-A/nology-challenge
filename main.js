// FORM VALIDDATION
// alert('is working');

const status = document.querySelector('.status');
function validateForm() {
    const name =  document.getElementById('name').value;
    if (name == "") {
        status.innerHTML = 
        "<p style='color: white; background-color: red; width: 65%; border-radius: 5px; margin: auto; tex-align: center;'>Name field cannot be empty</p>";
        clearInnerHTML();
        return false;
    }
    const email =  document.getElementById('email').value;
    if (email == "") {
      status.innerHTML = 
        "<p style='color: white; background-color: red; width: 65%; border-radius: 5px; margin: auto; text-align: center;'>Email field cannot be empty</p>";
        clearInnerHTML();
        return false;
    } else {
        var regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!regExp.test(email)){
          status.innerHTML = 
            "<p style='color: white; background-color: red; width: 65%; border-radius: 5px; margin: auto; text-align: center;'>Email format invalid</p>";
            clearInnerHTML();
            return false;
        }
    }
    const subject =  document.getElementById('subject').value;
    if (subject == "") {
      status.innerHTML = 
        "<p style='color: white; background-color: red; width: 65%; border-radius: 5px; margin: auto; text-align: center;'>Subject field cannot be empty</p>";
        clearInnerHTML();
        return false;
    }
    const message =  document.getElementById('message').value;
    if (message == "") {
      status.innerHTML = 
        "<p style='color: white; background-color: red; width: 65%; border-radius: 5px; margin: auto; text-align: center;'>Message field cannot be empty</p>";
        clearInnerHTML();
        return false;
    }
    status.innerHTML = 
    "<p style='color: white; background-color: green; width: 65%; border-radius: 5px; margin: auto; text-align: center;'>Form successfully submitted!:)</p>";
    document.querySelector('#contact-form').reset();
    clearInnerHTML(); // Make the message disapear after 2 seconds
}

function clearInnerHTML(){
  setTimeout(function(){status.innerHTML = "";}, 2000); 
}

// TOP MEDIA ICON ANIMATION
const mediaTl = gsap.timeline();
mediaTl.from(".git", {x: 100, duration: 1, opacity: 0, rotation: 720, delay: 1})
  .from(".linkedin", {x: 100, duration: 1, opacity: 0, rotation: 720}, "-=0.5") 
  .from(".facebook", {x: 100, duration: 1, opacity: 0, rotation: 720}, "-=0.5");


// GREETING ANIMATION FADE-IN-OUT FOR '.HI'
const hiTextWrapper = document.querySelector('.hi');
hiTextWrapper.innerHTML = hiTextWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.hi .letter',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 300 + 30 * i
  }).add({
    targets: '.hi .letter',
    translateY: [0,-100],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1200,
    delay: (el, i) => 100 + 30 * i
  });

  // GREETING ANIMATION FADE-IN-OUT FOR '.CIPRIAN'
  const ciprianTextWrapper = document.querySelector('.ciprian');
  ciprianTextWrapper.innerHTML = ciprianTextWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ciprian .letter',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 300 + 30 * i
  }).add({
    targets: '.ciprian .letter',
    translateY: [0,-100],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1200,
    delay: (el, i) => 100 + 30 * i
  });
  
  // GREETING ANIMATION FADE-IN-OUT FOR '.WEB-DEV'

const webDevTextWrapper = document.querySelector('.web-dev');
webDevTextWrapper.innerHTML = webDevTextWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  
anime.timeline({loop: true})
  .add({
    targets: '.web-dev .letter',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 300 + 30 * i
  })
  .add({
    targets: '.web-dev .letter',
    translateY: [0,-100],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1200,
    delay: (el, i) => 100 + 30 * i
  });

// ABOUT-SECTION ANIMATION 

const quoteTextWrapper = document.querySelector('.quote');
quoteTextWrapper.innerHTML = quoteTextWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    
   

const quote = document.querySelector('.quote');
const mePic = document.querySelector('#me-pic');
const aboutMe = document.querySelector('.about-me');
// Add a constant movement of #me-pic 
anime({
  targets: '#me-pic',
  translateX: '5px', 
  translateY: '5px',
  easing: 'easeInOutQuad',
  direction: 'alternate',
  loop: true
});

// Make the #quote visible when the picture is clicked 
mePic.addEventListener('click', ()=> {
    quote.style.visibility = 'visible';
    aboutMe.innerHTML = 'My short story';
    anime.timeline({loop: false})
    .add({
      targets: '.quote .letter',
      translateY: [100,0],
      translateZ: 0,
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 400,
      delay: (el, i) => 700 + 30 * i
    });
});
  
// PROJECT-SECTION ANIATION: CREATE A 'FADE-IN & SLIDE-IN ANIMATION

const projectsTl = gsap.timeline();   
const projects = document.querySelector('#projects-section');


gsap.registerPlugin(ScrollTrigger);
const projectScrollTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#about-section",
    start: "bottom center",
    toggleActions: 'play restart play reset',
    endTrigger: "#projects-section",
    end: 'bottom center',
    scrub: 0.5,
    markers: false
  }
});
projectScrollTl.from(".card-tl", {x: -40, y: -40, duration: 1, opacity: 0, ease: "power1.out"})
        .from(".card-tm", {y: -40, duration: 1, opacity: 0, ease: "power1.out"},'-= 0.5') 
        .from(".card-tr", {x: 40, y: -40, duration:1, opacity: 0, ease: "power1.out"},'-= 0.5') 
        .from(".card-bl", {x: -40, y: 40, duration: 1, opacity: 0, ease: "power1.out"},'-= 0.5') 
        .from(".card-bm", {y: 40, duration: 1, opacity: 0, ease: "power1.out"},'-= 0.5') 
        .from(".card-br", {x: 40, y: 40, duration: 1, opacity: 0, ease: "power1.out"},'-= 0.5'); 


// SKILLS-SECTION ANIMATION : CREATE A CONSTANT 'WAVE' ANIMATION

anime({
  targets: '.space-bars, .progress',
  // translateY: 20,
  translateX: 20,
  direction: 'alternate',
  opacity: 0.2,
  loop: true,
  duration: 9000,
  easing: function(el, i, total) {
    return function(t) {
    return Math.pow(Math.sin(t * (i + 1)), total);
    }
  }
});

// CONTACT-SECTION ANIMATION: TRIGGER A 'FADE-IN' ANIMATION ON SCROLL

const contactScrollTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#skills-section",
    start: "bottom 80",
    toggleActions: 'play restart none reset',
    endTrigger: "#contact-section",
    end: 'bottom bottom',
    scrub: 1,
    markers: false
  }
});
contactScrollTl.from(".mb-4", {duration: 3 , opacity: 0, ease: "power1.out"})