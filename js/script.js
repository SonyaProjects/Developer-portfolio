var galleryTop = new Swiper('.image-slider',{
	//Стрелки
	navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
	// // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
	// 	clickable: true,
	// 	dynamicBullets: true,
  // },
	hashNavigation:{
		watchState: true,
	},

	keyboard:{
		enabled: true,
		onlyInView: true,
		pageUpDown: true,
	},

	mousewheel:{
		sensitivity: 1,
		eventsTarget: ".image-slider"
	},
	slidesPerView: 1,
	initialSlide: 1,
	thumbs:{
		swiper:'.gallery-thumbs',
	},
});

var galleryThumbs = new Swiper('.gallery-thumbs', {

  slidesPerView: 5,

});




