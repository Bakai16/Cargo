
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

function app() {
	const buttons = document.querySelectorAll('.filter__btn');
	const cards = document.querySelectorAll('.content__card');
	function filter(category, items) {
	  items.forEach((item) => {
		  const isItemFiltered = !item.classList.contains(category);
		  if (isItemFiltered) {
			  item.classList.add('hide');
		  }
	  });
	}
	buttons.forEach((button) => {
	  button.addEventListener("click", () => {
		  const currentCategory = button.dataset.filter;
		  filter(currentCategory, cards);
	  });
	});
  }
  
  app();

let menuToggle = 
document.querySelector(".toggle");
menuToggle.addEventListener("click", function 
() {
	menuToggle.classList.toggle("active");
});


