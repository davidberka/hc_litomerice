$(function () {
  $('select, .shop__check').styler();
  //presmerovani pomoci selectu
  
     // tabs
     $('.hp-soupiska__tabs .tab').on('click', function (event) {
      var id = $(this).attr('data-id');
      $('.hp-soupiska__tabs').find('.tab__content').removeClass('tab-active').hide();
      $('.hp-soupiska__tabs .hp-soupiska__tab').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#' + id)
        .addClass('tab-active')
        .fadeIn();
      return false;
    });
    $('.report .report__tab').on('click', function (event) {
      var id = $(this).attr('data-id');
      $('.report').find('.report__content').removeClass('tab-active').hide();
      $('.report .report__tabs').find('.report__tab').removeClass('active');
      $(this).addClass('active');
      $('#' + id)
        .addClass('tab-active')
        .fadeIn();
      return false;
    });
   $('.partners').slick({
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 1370,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
          },
        },
      
      ],
    });
  
    
   $('.navbar__menu').on('click', function () {
      $('.nav').slideToggle();
    });
    $('.nav__link').on('click', function () {
      $(this).closest('.nav__item').toggleClass('active');
    });
 });

 
 const menuBtn = document.querySelector('.navbar__menu');
 let menuOpen = false;
 menuBtn.addEventListener('click', () => {
   if (!menuOpen) {
     menuBtn.classList.add('open');
     menuOpen = true;
   } else {
     menuBtn.classList.remove('open');
     menuOpen = false;
   }
 });

//  vstupenky btn
// const btns = document.querySelectorAll('.zapasy-page__button');

// btns.forEach(btn => {
//   const type = btn.parentNode.parentNode.className.split(' ')[1];
//   if (type === 'away') {
//     btn.style.display = 'none';
//   }
// })

//  //filter buttons - global
// let typeOfMatch = 'league';
// let filterClass = '';

// $('.zapasy_container').hide();
// $('.zapasy_container.' + typeOfMatch).show();

//  // filter buttons - league, pre-season
// $(".liga-row a").each(function() {
//     $(this).on("click", function(){
//       btns.forEach(btn => {
//         const type = btn.parentNode.parentNode.className.split(' ')[1];
//         if (type === 'away') {
//           btn.style.display = 'none';
//         }
//       })

//       typeOfMatch = this.className.split(' ')[0];
//       filterClass = '';
//       $('#filter a.active').removeClass('active');
//       $('#filter a.all').addClass('active');
//       $('.zapasy_container.' + typeOfMatch + ' .zapasy-page__row').show();

//       $('.liga-row a').removeClass('active');
//       $(this).addClass('active');
    
//       $('.zapasy_container').hide();

//       if (typeOfMatch === 'league') {
//         $('.zapasy_container.' + typeOfMatch).show();
//       } else if (typeOfMatch === 'pre-season') {
//         $('.zapasy_container.' + typeOfMatch).show();
//       } else {
//         $('.zapasy_container').show();
//       }
//     });
// });


// // filter buttons - home, away, all
// $('.zapasy_container.' + typeOfMatch + ' .zapasy-page__row').show();

// $("#filter a").each(function() {
//     $(this).on("click", function(){
//       filterClass = this.className.split(' ')[0];

//       btns.forEach(btn => {
//         const type = btn.parentNode.parentNode.className.split(' ')[1];
//         if (type === 'away') {
//           btn.style.display = 'none';
//         }
//       })

//       $('#filter a').removeClass('active');
//       $(this).addClass('active');
    
//       $('.' + typeOfMatch + ' .zapasy-page__row').hide();
      
//       if (filterClass === 'home') {
//         $('.' + typeOfMatch + ' .zapasy-page__row.' + filterClass).show();
//       } else if (filterClass === 'away') {
//         $('.' + typeOfMatch + ' .zapasy-page__row.' + filterClass).show();
//       } else {
//         $('.' + typeOfMatch + ' .zapasy-page__row').show();
//       }
//     });
// });


// filter btns - home, away, all
const targetFilter = localStorage.getItem('target-filter');

window.addEventListener('load', () => {
  const linkClass = targetFilter && document.querySelector(`a[data-target="${targetFilter}"]`).className.split(' ')[0];
  if (linkClass) {
    $('#filter a.active').removeClass('active');
    $('#filter a.' + linkClass).addClass('active');
  } else {
    $('#filter a.all').addClass('active');
  }
  
})

$('#filter a').each(function () {
  $(this).on("click", function () {
      localStorage.setItem('target-filter', $(this).data("target"));
  })
})

// match btns - league, pre-season
const targetCategory = localStorage.getItem('target-category');

window.addEventListener('load', () => {
  const linkClass = targetCategory && document.querySelector(`a[data-target="${targetCategory}"]`).className.split(' ')[0];
  if (linkClass) {
    $('.liga-row a.active').removeClass('active');
    $('.liga-row a.' + linkClass).addClass('active');
  } else {
    $('.liga-row a.league').addClass('active');
  }
  
})

$('.liga-row a').each(function () {
  $(this).on("click", function () {
    localStorage.setItem('target-category', $(this).data("target"));
    localStorage.setItem('target-filter', 'all');
  })
})

// hp - kalendar carousel months
$('#tab_kalendar').one("click", function() {
  $('.kalendar_months').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<img class="carousel-arrow carousel-next" src="images/svg/arrow-right.svg">',
    prevArrow: '<img class="carousel-arrow carousel-prev" src="images/svg/arrow-right.svg">',
  })
})

/// score
var n=$("#scoreboard_carousel").data("initialslider");null==n&&(n=1),$("#scoreboard_carousel").slick({infinite:!1,arrows:!0,dots:!1,autoplay:!1,slidesToShow:5,slidesToScroll:1,centerMode:true,swipeToSlide:!0,initialSlide:n-1,responsive:[{breakpoint:1650,settings:{slidesToShow:4,slidesToScroll:1}},{breakpoint:1440,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:1100,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:750,settings:{slidesToShow:1,slidesToScroll:1,dots:!1}},{breakpoint:440,settings:{slidesToShow:1,slidesToScroll:1,dots:!1,arrows:!0,centerMode:!1}}]});
var _gallery_loading = false;

$('a[data-gallery]').click(function () {
  if (_gallery_loading) return;
  _gallery_loading = true;

  var mode = $(this).data('gallery');
  var url = '/inc/gallery_ajax.asp?mode=' + mode;

  if (mode == 1 || mode == 2) {
    url += '&id=' + $(this).data('gallery-id');
  }

  $.getJSON(url, { format: 'json' })
    .done(function (e) {
      $(this).lightGallery({
        hash: false,
        share: false,
        dynamic: true,
        dynamicEl: e,
        download: false,
        backdropDuration: 500,
      });
    })
    .fail(function (e, textStatus, error) {
      alert('Nastala chyba při načítání galerie. Prosím zkuste to znovu.');
      console.error('getJSON failed, status: ' + textStatus + ', error: ' + error);
      console.error(e);
    })
    .always(function () {
      _gallery_loading = false;
    });

  return false;
});