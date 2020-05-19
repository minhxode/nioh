const inputs = document.querySelectorAll('.input');
const hammer = document.querySelector('.hammer');
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll('.nav-links li');
var logi = document.getElementById("login");
var regi = document.getElementById("register");
var butn = document.getElementById("scroll-btn-div");
var lines = document.querySelectorAll(".hammer div");
var container = document.querySelectorAll('.login-container');


function login(){
    logi.style.left = "0px";
    regi.style.left = "400px";
    butn.style.left = "0px";
}

function register(){
    logi.style.left = "400px";
    regi.style.left = "0px";
    butn.style.left = "185px";
}

function focusFunc(){
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus');
}

function blurFunc(){
    let parent = this.parentNode.parentNode;
    if (this.value == ""){
    parent.classList.remove('focus');
    }
    
}

hammer.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    // links.forEach(link =>{
    //     link.classList.toggle("fade");
    //     if (link.style.animation){
    //         link.style.animation = '';
    //     }
    //     else{
    //         link.style.animation = 'navLinkFade 0.5s ease forward ${index/6 + 1}s';
    //     }
    // });

    // navLinks.forEach((link, index) =>{
    //     if (link.style.animation){
    //         link.style.animation = '';
    //     }
    //     else{
    //         link.style.animation = 'navLinkFade 0.5s ease forward ${index/6 + 1}s';
    //     }
        
    // });
    // hammer.classList.toggle("toggleline");
}); 



inputs.forEach(input => {
    input.addEventListener('focus', focusFunc);
    input.addEventListener('blur', blurFunc);
});

