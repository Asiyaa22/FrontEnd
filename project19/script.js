// var nav_bar = document.querySelector(".nav");


// menu_btn.addEventListener("click", function(){
//     var cross_btn = `<i class="fa-solid fa-xmark"></i>`;
//     menu_btn.style.visibility = 'hidden';
//     document.getElementById("sho-btn").innerHTML = cross_btn;
//     const container = document.createElement("div");
//     container.classList.add("mobile-nav");
//     container.style.display = 'block';
//     document.body.appendChild(container);
//     menu_btn.addEventListener("mouseleave", function(){
//         setTimeout(() =>{
//             container.remove();
//         }, 4000);
//     });
   
// });



// var unne = document.querySelector(".btn");
// unne.addEventListener("click", function(){
//     alert("bhai mai kya kara");
// });
var menu_btn = document.querySelector(".hamburger");
var mobile = document.querySelector(".mobile-nav");

menu_btn.addEventListener("click", function(){
    // alert("mera dimagh garam nakko karo");
    menu_btn.classList.toggle('is-active');
    mobile.classList.toggle('is-active');
    // menu_btn.addEventListener("mouseleave", function(){
    //             setTimeout(() =>{
    //                 mobile.remove();
    //             }, 4000);
    //         });
    // menu_btn.addEventListener("click", function(){
    //     menu_btn.remove()
    // });
});

const service = document.getElementById("serve-btn");
service.addEventListener("click", function(){
    const element = document.getElementById("scroll-id");
    element.scrollIntoView();
});

// function myFunction() {
//     alert("I am clicked");
//     const element = document.getElementById("scroll-id");
//     element.scrollIntoView();
//   }

//vanilla-tilt.js code
VanillaTilt.init(document.querySelectorAll(".container"), {
    max: 25,
    speed: 400,
    easing: "cubic-bezier(.03,.98,.52,.99)",   
    glare: false,
    "max-glare": 1,
});
{/* <div class="your-element" data-tilt data-tilt-max="50" data-tilt-speed="400" data-tilt-perspective="500"></div> */}

