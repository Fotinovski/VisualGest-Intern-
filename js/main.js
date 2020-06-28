//HEADER***

const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');  

    burger.addEventListener('click',()=>{
          
        nav.classList.toggle('nav-active');    
 
    navLinks.forEach((link, index)=>{
        if(link.style.animation) {
            link.style.animation = '';
        }   else {
            link.style.animation = `navLinkFade 0.8s ease forwards ${index/ 7 + 0.5}s`;
        }

        });      

        burger.classList.toggle('toggle');
    
    });
}

navSlide();

//LOAD MORE***

function loadMore(){
    const work = document.querySelector('.work_main');
    const loadMoreDiv = document.querySelector('.loadMore-btn');
      
    if (screen.width <= 425){

    loadMoreDiv.remove();

    for(var i = 5; i<=8 ; i++){
    work.innerHTML += `<div class="img-container close-img">
        <img src="./img/work`+i+`.jpg" alt="Avatar" class="image" style="width:100%">
        <div class="overlay">
            <img src="./img/view-more.png" alt="">
            </div>
        </div>`;           
            }
    work.innerHTML += ` <div class="loadMore-btn">
                            <a onclick="closeImg()" class="loadMore" id="loadMore">Close</a>
                        </div>`;
    }
    
    else {
        popUp();
    }       

};
function popUp() {
    let popup = document.getElementById("myPopup");
    
    popup.classList.toggle("show");
    setTimeout(() => {
      popup.classList.toggle("show");
    }, 2500);
  }

function closeImg(){
    const elements = document.querySelectorAll('.close-img');    
    elements.forEach(e => e.remove());
    document.querySelector('.loadMore-btn').innerHTML = ` <a onclick="loadMore()" class="loadMore" id="loadMore">load more work</a>`;
}

//Slider***

let slideIndex = 2;

showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
//timer
setInterval(function(){
    currentSlide(slideIndex + 1);
}, 10000)


//***********************************************************


//scroll to top

$(document).ready(function(){

    $(window).scroll(function(){
      if($(this).scrollTop() > 40){
        $('#topBtn').fadeIn();
      } else{
        $('#topBtn').fadeOut();
      }
    });
  
    $("#topBtn").click(function(){
      $('html ,body').animate({scrollTop : 0},800);
    });    

});

//animation when in view

let animationTriggered = false;
let animationTriggered2 = false;

$(document).scroll(function() {
    var y = $(this).scrollTop();
    var elementOffset = $('.skills_txt').position().top;
    console.log(elementOffset)
    if ((y > elementOffset - 700) && (y < elementOffset) && !animationTriggered) {
      $("#design").addClass("design");
      $("#web").addClass("web");
      $("#marketing").addClass("marketing");
      $(".stats-wrapper .stats-card i").addClass("rotate_i")
      $(".stats-wrapper .stats-card .stats-info").addClass("moveRight")
      animationTriggered = true;
    }
      let elementOffset2 = $('.card_sub-div').position().top;
      console.log(elementOffset2)
      if ((y > elementOffset2 - 800) && (y < elementOffset2 + 300) && !animationTriggered2) {
              $('.card__main-div .card_sub-div p').addClass("animate_p"); 
        }   
    });