var kaylaGriffinAPI = (function () {

	var public = {};
	var navStatus = true;
	var navOpen;
	var navClose;
	var isMobile = window.matchMedia("only screen and (max-width: 767px)");
	var currentPage = window.location.pathname;
	var notIndex = window.location.search;
	var index1 = "/kaylagriffin/index.php";
	var index2 = "?page=work";

	function mobileNav() {

		function open() {
			$("#nav-icon").addClass("open");
		}

		function close() {
			$("#nav-icon").removeClass("open");
		}

		$("#nav-icon").click(function() {

				if (navStatus) {
					navOpen = new TimelineMax();
					navOpen.to("#nav-icon", 0.5, {left: 243, ease: Power4.easeInOut, onComplete:open})
					.to("aside", 0.5, {left: "0%", ease: Power4.easeInOut});
					navStatus = false;
				} else {
					navClose = new TimelineMax();
					navClose.to("#nav-icon", 0.5, {left: 0, ease: Power4.easeInOut})
					.to("aside", 0.5, {left: "-100%", ease: Power4.easeInOut}, "-=0.125");
					close();
					navStatus = true;
				}

		});

		$("nav ul li a").on("click", function() {

			if (isMobile.matches) {
				navClose = new TimelineMax();
				navClose.to("#nav-icon", 0.5, {left: 0, ease: Power4.easeInOut})
				.to("aside", 0.5, {left: "-100%", ease: Power4.easeInOut, onComplete:close});
				close();
				navStatus = true;
			}

		});

	}

	function desktopNav() {

		$(".work li a.filter").on("click", function(e) {

			if (notIndex === index2) {

				e.preventDefault();

			}

		});

	}

	// INIT FUNCTION
	function init() {

		// CALL INIT FUNCTIONS
		console.log("kaylaGriffinAPI loaded...");

		mobileNav();
		desktopNav();

		// MIX IT UP
		$("#grid").mixItUp();

		// ABOUT SLIDER
		$('.about-slider').bxSlider({
			pager: false,
			nextSelector: '#slider-next',
			prevSelector: '#slider-prev',
			nextText: '<img src="assets/img/arrow-right.png"/>',
			prevText: '<img src="assets/img/arrow-left.png"/>'
		});

		// ABOUT SLIDER
		$('.work-slider').bxSlider({
			pager: false,
			nextSelector: '#work-next',
			prevSelector: '#work-prev',
			nextText: '<img src="assets/img/arrow-right.png"/>',
			prevText: '<img src="assets/img/arrow-left.png"/>'
		});

	}

	// PUBLIC FUNCTIONS
	public.init = init;

	// RETURN PUBLIC FUNCTIONS
	return public;

}());

$(document).on("ready", kaylaGriffinAPI.init);