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