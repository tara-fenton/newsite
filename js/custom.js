/*global $, console, alert*/

// after page load functions
$(window).on("load", function () {
	"use strict";
	
	var hi = document.getElementById("hi"),
		name = document.getElementById("name"),
		job = document.getElementById("job"),
		hiText = "Hi, ",
		nameText = "I'm Tara Fenton",
		jobText = "Interactive Developer",
		text = "",
		text2 = "",
		text3 = "",
		i = 0,
		j = 0,
		k = 0,
		typing;
	
    // get the top of site
    $(document).scrollTop(0);
    
	// header Hi typing function
	
	function type() {
		if (text !== hiText) {
			text = text + hiText.charAt(i);
			hi.innerHTML = text;
			i += 1;
		} else if (text2 !== nameText) {
			text2 = text2 + nameText.charAt(j);
			name.innerHTML = text2;
			j += 1;
		} else {
			text3 = text3 + jobText.charAt(k);
			job.innerHTML = text3;
			k += 1;
		}
		if (text === hiText && text2 === nameText && text3 === jobText) {
			// get in touch button effect
			clearInterval(typing);
			$(".contact-button button").animate({
				opacity: 1
			}, 350);
		}
	}
	
	// loading fade out
	
	$(".loading").fadeOut(500, function () {
		// header typing trigger
		typing = setInterval(type, 150);
	});
	
});

// when document is ready functions

$(document).ready(function () {
	"use strict";
	var project = $(".project"),
		overlay = $(".overlay"),
		flag = true,
        numOfLines = document.getElementById("num-lines"),
        linesCounter = 2098,
        linesCounterFlag = 0,
        numOfProjects = document.getElementById("num-projects"),
        projectsCounter = 570,
        projectsCounterFlag = 0,
        numOfCups = document.getElementById("num-cups"),
        cupsCounter = 125,
        cupsCounterFlag = 0,
        numOfCustomers = document.getElementById("num-customers"),
        customersCounter = 0,
        customersCounterFlag = 0;
	
	// making header height equal to window height
	$(".header").height($(window).height());
	$(window).on("resize", function () {
		$(".header").height($(window).height());
	});
	
	// nav-bar links on click
	
	$(".home-nav ul li:nth-of-type(1)").on("click", function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
	});
	
	$(".home-nav ul li:nth-of-type(2)").on("click", function () {
		$("body, html").animate({
			scrollTop: $(".about").offset().top - 70
		}, 800);
	});
	
	
	$(".home-nav ul li:nth-of-type(3)").on("click", function () {
		$("body, html").animate({
			scrollTop: $(".projects").offset().top - 70
		}, 800);
	});
    
	$(".home-nav ul li:nth-of-type(4)").on("click", function () {
		$("body, html").animate({
			scrollTop: $(".skills").offset().top - 70
		}, 800);
	});
	
	
	
	$(".home-nav ul li:nth-of-type(5)").on("click", function () {
		$("body, html").animate({
			scrollTop: $(".contact").offset().top - 70
		}, 800);
	});
	
	// down icon on click
	
	$(".down-icon").on("click", function () {
		$("body, html").animate({
			scrollTop: $(".about").offset().top - 70
		}, 800);
	});
	
	// get in touch button on click
	
	$(".GIT").on("click", function () {
		$("body, html").animate({
			scrollTop: $(".contact").offset().top - 70
		}, 800);
	});
	
	// nav-bar minimize icon on click
		
	$("#minimize").on("click", function () {
		$("#list").slideToggle();
	});
	
	// nav-bar links display on resizing
	
	$(window).on("resize", function () {
		if ($("#minimize").css("display") === "none") {
			$("#list").css("display", "block");
            if ($(window).scrollTop() >= 100) {
			    $(".home-nav").css('background-color', '#2d2d2d');
		    } else if ($(window).scrollTop() < 100) {
			    $(".home-nav").css('background-color', 'transparent');
		    }
		} else {
            $("#list").css("display", "none");
            $(".home-nav").css('background-color', '#2d2d2d');
		}
	});
    
	// on scroll effects
	
	$(window).on("scroll", function () {
		
		// nav-bar background change
		
		if ($(window).scrollTop() >= 100) {
			$(".home-nav").css('background-color', '#2d2d2d');
		} else if ($(window).scrollTop() < 100 && $("#minimize").css("display") === "none") {
			$(".home-nav").css('background-color', 'transparent');
		}
		
		// skills progress bar animation
		
		if ($(window).scrollTop() >= $(".skills").offset().top - 260) {
			if (flag) {
				$(".hc").animate({
					width: '90%'
				}, 2000);
				$(".j").animate({
					width: '80%'
				}, 2000);
				$(".jq").animate({
					width: '70%'
				}, 2000);
				$(".ps").animate({
					width: '90%'
				}, 2000);
				$(".il").animate({
					width: '60%'
				}, 2000);
				$(".bs").animate({
					width: '50%'
				}, 2000);
				flag = false;
			}
		}
        
		// active link change on scrolling
		
		if ($(window).scrollTop() < $(".about").offset().top - 70) {
			$(".home-nav ul li:nth-of-type(1)").addClass("active").siblings().removeClass("active");
		}
		
		if ($(window).scrollTop() >= $(".about").offset().top - 70) {
			$(".home-nav ul li:nth-of-type(2)").addClass("active").siblings().removeClass("active");
		}
		
        if ($(window).scrollTop() >= $(".projects").offset().top - 70) {
			$(".home-nav ul li:nth-of-type(3)").addClass("active").siblings().removeClass("active");
		}
        
		if ($(window).scrollTop() >= $(".skills").offset().top - 70) {
			$(".home-nav ul li:nth-of-type(4)").addClass("active").siblings().removeClass("active");
		}
		
		if ($(window).scrollTop() >= $(".contact").offset().top - 70) {
			$(".home-nav ul li:nth-of-type(5)").addClass("active").siblings().removeClass("active");
		}
		
		
        // statistics counting
        
        if ($(window).scrollTop() >= $(".statistics").offset().top - 500) {
            // lines of code counter
            if (linesCounterFlag === 0) {
                var x = setInterval(function () {
                    linesCounter += 1;
                    numOfLines.innerHTML = linesCounter;
                    if (linesCounter === 2168) {
                        clearInterval(x);
                    }
                }, 50);
                linesCounterFlag = 1;
            }
            // projects counter
            if (projectsCounterFlag === 0) {
                var y = setInterval(function () {
                    projectsCounter += 1;
                    numOfProjects.innerHTML = projectsCounter;
                    if (projectsCounter === 640) {
                        clearInterval(y);
                    }
                }, 50);
                projectsCounterFlag = 1;
            }
            // cups counter
            if (cupsCounterFlag === 0) {
                var z = setInterval(function () {
                    cupsCounter += 1;
                    numOfCups.innerHTML = cupsCounter;
                    if (cupsCounter === 195) {
                        clearInterval(z);
                    }
                }, 50);
                cupsCounterFlag = 1;
            }
            // customers counter
            if (customersCounterFlag === 0) {
                var k = setInterval(function () {
                    customersCounter += 1;
                    numOfCustomers.innerHTML = customersCounter;
                    if (customersCounter === 70) {
                        clearInterval(k);
                    }
                }, 50);
                customersCounterFlag = 1;
            }
        }
	});
	
	// trigger mixitup for making shiffle effect in projects section
	$(function () {
		$('#Container').mixItUp();
	});
	
	// trigger owl coursel slider for clients comments
	$("#owl-demo").owlCarousel({
		navigation : true, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem: true
		// "singleItem:true" is a shortcut for:
		// items : 1, 
		// itemsDesktop : false,
		// itemsDesktopSmall : false,
		// itemsTablet: false,
		// itemsMobile : false
	});
    
    // magnific popup trigger
    
    $('.popup-link').magnificPopup({
        type: 'inline'
    });
    
});