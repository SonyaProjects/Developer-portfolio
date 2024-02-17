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


	function changeImage1(imageName1,  imageName2) {
		var temp = document.getElementById(imageName1).src;
		document.getElementById(imageName1).src = document.getElementById(imageName2).src;
		document.getElementById(imageName2).src = temp;
	};



	function changeImage2(imageName1,  imageName2) {
		var image1 = document.getElementById(imageName1);
		var image2 = document.getElementById(imageName2);
	
		if (image1.style.opacity !== "0") {
			image1.style.opacity = "1";
			image2.style.opacity = "0";
		} else {
			image1.style.opacity = "0";
			image2.style.opacity = "1";
		}
	}

	function changeImage(imageName1,  imageName2){
		changeImage1(imageName1,  imageName2);
		changeImage2(imageName1,  imageName2);

	}
	


