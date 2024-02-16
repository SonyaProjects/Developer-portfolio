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
});

var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
	centeredSlides: true,
  slidesPerView: 5,
  touchRatio: 0.2,
  slideToClickedSlide: true,
});
galleryTop.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryTop;
