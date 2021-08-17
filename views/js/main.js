// $('.login-button').on('click', () => {
//     $('.login-form').toggle();
//     $('.login-button').toggleClass('button-active');
//   });

// $(document).ready(function() {
//     $("#hidden").hover(funtion() {
//         $(this).css("color", "black");
//     },
//     function() {

//     }
// })
$('.slider-two')
.not(".slick-initialized")
.slick({
    // autoplay:true,
    // autoplayspeed:3000,
    // dots:true,
    prevArrow:".site-slider-two .prev",
    nextArrow:".site-slider-two  .next"
    slidesToShow:4,
    slidesToScroll:1,
    autoplaySpeed: 3000
});