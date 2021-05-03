$(document).ready(function () {

 /*
 ==============================================
 counter up 
 ==============================================
 */   
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });

	// LOADER
	var loader = document.querySelector(".loader")
	window.addEventListener("load", vanish);
	function vanish() {
	loader.classList.add("disppear");
	}
	
   // scroll top btn jq
   $(".top").click(function(){
    $("html,body").animate({
        scrollTop:0
    },3000)
 });

//Movement Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");

//Items

const sneaker = document.querySelector(".sneaker img");

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animate In
container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";

    //Popout
    sneaker.style.transform = "translateZ(300px)";
});

//Animate Out
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;

    //Popback
    
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
});

// top btn hide jq
$(window).scroll(function(){
    var ourwindow=$(this).scrollTop();
  $('.top-btn').hide();
    if(ourwindow<200){
        $(".top").fadeOut();
    }
    else{
        $(".top").fadeIn();
    }
  });
  
// smoth work
$(".menu-list li a").on('click',function(slow){
    if(this.hash !== " "){
        slow.preventDefault();
 
        var hash=this.hash;
        $("html, body").animate({
            scrollTop:$(hash).offset().top
        },1000,function(){
            window.location=hash;
        } 
        );
    }
 })

/*
 ==============================================
 skill bar  
 ==============================================
 */  

$('svg.radial-progress').each(function( index, value ) { 
    $(this).find($('circle.complete')).removeAttr( 'style' );
});



$('svg.radial-progress').each(function( index, value ) { 
    $(this).find($('circle.complete')).removeAttr( 'style' );
});

// Activate progress animation on scroll
$(window).scroll(function(){
    $('svg.radial-progress').each(function( index, value ) { 
        // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
        if ( 
            $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
            $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
        ) {
            // Get percentage of progress
            percent = $(value).data('percentage');
            // Get radius of the svg's circle.complete
            radius = $(this).find($('circle.complete')).attr('r');
            // Get circumference (2πr)
            circumference = 2 * Math.PI * radius;
            // Get stroke-dashoffset value based on the percentage of the circumference
            strokeDashOffset = circumference - ((percent * circumference) / 100);
            // Transition progress for 1.25 seconds
            $(this).find($('circle.complete')).animate({'stroke-dashoffset': strokeDashOffset}, 1250);
        }
    });
}).trigger('scroll');

/*
 ==============================================
 sticky menu  
 ==============================================
 */  

$(".about-js-section").waypoint(function(valu){
    if(valu == "down"){
        $("nav").addClass("sticky");
    }else{
    $("nav").removeClass("sticky")
    }
 
  
 
 });




 
    /* Video Lightbox - Magnific Popup */
    $('.popup-youtube, .popup-vimeo').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/', 
                    id: function(url) {        
                        var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
                        if ( !m || !m[1] ) return null;
                        return m[1];
                    },
                    src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                },
                vimeo: {
                    index: 'vimeo.com/', 
                    id: function(url) {        
                        var m = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
                        if ( !m || !m[5] ) return null;
                        return m[5];
                    },
                    src: 'https://player.vimeo.com/video/%id%?autoplay=1'
                }
            }
        }
    });

});



new WOW().init();

/*
 ==============================================
  responsive menu  js code
 ==============================================
 */ 
const openmenu=document.querySelector(".open-menu span");
const closebtn=document.querySelector(".menu-and-btn");
const closemenu=document.querySelector(".close-menu");

openmenu.addEventListener("click",function(){
    closebtn.style.left="0%";
    openmenu.style.display="none";
    closemenu.style.display="block";
});

closebtn.addEventListener("click",function(){
    closebtn.style.left="-100%";
    openmenu.style.display="block";
    closemenu.style.display="none";
    
});

closemenu.addEventListener("click",function(){
    closebtn.style.left="-100%";
    closemenu.style.display="none";
    openmenu.style.display="block";
    
});


