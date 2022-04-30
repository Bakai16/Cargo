
$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:6,
		autoplay:true,
		speed:1800,
		autoplaySpeed:900,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});

let menuToggle = 
document.querySelector(".toggle");
menuToggle.addEventListener("click", function 
() {
	menuToggle.classList.toggle("active");
});


