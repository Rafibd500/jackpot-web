// active menu start 

$('#navigation a#icon').on('click', function () {
  console.log('clicked me');
  $('.navbar-nav li').toggleClass('hide');
});

/*jquery for active class*/

$('.navbar-nav li').on('click', function () {
  $('.navbar-nav li').removeClass('active');
  $(this).addClass('active');
});

// active menu end 

// sticky header start
$(function () {
  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();
    if (scrolling > 200) {
      $(".navbar").addClass("bg");
    } else {
      $(".navbar").removeClass("bg");
    }
  });
});
// sticky header end


// games slider start 
$('.games-item-part').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  responsive: [{
      breakpoint: 991.98,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode:true,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// games slider end
// games slider start 
$('.about-games-slider').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 2,
  arrows: false,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode:true,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// games slider end

// tour countdown part start 

function makeTimer() {

  //		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
  var endTime = new Date("03 Sep 2021 9:56:00 GMT+01:00");
  endTime = (Date.parse(endTime) / 1000);

  var now = new Date();
  now = (Date.parse(now) / 1000);

  var timeLeft = endTime - now;

  var days = Math.floor(timeLeft / 86400);
  var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
  var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
  var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

  if (hours < "10") {
    hours = "0" + hours;
  }
  if (minutes < "10") {
    minutes = "0" + minutes;
  }
  if (seconds < "10") {
    seconds = "0" + seconds;
  }

  $("#days").html(days + "<span></span>");
  $("#hours").html(hours + "<span></span>");
  $("#minutes").html(minutes + "<span></span>");
  $("#seconds").html(seconds + "<span></span>");

}

setInterval(function () {
  makeTimer();
}, 1000);

// tour countdown part end 


// about-video venobox start 

$(function () {
  $('.venobox').venobox();
});
// about-video venobox end 


//==== Back-to-top button start
$(window).on('scroll', function(event) {
  if($(this).scrollTop() > 600){
    $('.back-to-top').fadeIn(200)
  } else{
    $('.back-to-top').fadeOut(200)
  }
});

//==== Animate the scroll to top
$('.back-to-top').on('click', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: 0,
    }, 1000);
});
//==== Back-to-top button end