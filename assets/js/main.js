var kaylaGriffinAPI = (function () {

	var public = {};
	var navStatus = true;
	var navOpen;
	var navClose;
	var isMobile = window.matchMedia("only screen and (max-width: 767px)");
	var currentPage = window.location.pathname;
	var notIndex = window.location.search;
	var index1 = "/kaylagriffin/index.php";
	var index2 = "";
	var category;

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

		$(".work li a.filter").on("click", function() {

			category = this.getAttribute("data-filter");

			if (notIndex != index2) {

				// var frame = document.getElementById("frame");
				window.location = "index.php";
				// $("#grid").mixItUp("filter", category);
			
			}

		});

	}

	// INIT FUNCTION
	function init() {

		console.log(category);

		// CALL INIT FUNCTIONS
		console.log("kaylaGriffinAPI loaded...");

		mobileNav();
		desktopNav();

		// MIX IT UP
		console.log(currentPage);
		if (currentPage === index1) {

			$("#grid").mixItUp();

		}	
		
	}

	// PUBLIC FUNCTIONS
	public.init = init;

	// RETURN PUBLIC FUNCTIONS
	return public;

}());

$(document).on("ready", kaylaGriffinAPI.init);