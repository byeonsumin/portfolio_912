/* 베스트 셀러 */
var swiper = new Swiper(".best_seller_list", {
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    direction: 'horizontal', 
    slidesPerView: 'auto',   
    spaceBetween: 20,      
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true, 
    },
});



/* 퍼퓸 카테고리 */
var swiper = new Swiper(".perfume_swiper", {
    slidesPerView: 'auto',
    centeredSlides: true,       // 가운데 정렬
    spaceBetween: 20,           // 카드 간격
    initialSlide: 2,            // 시작 슬라이드 (원하면 변경 가능)
    loop: true,
    centeredSlidesBounds: true,
});




/* 기프트 */
const giftSwiper = new Swiper("#gift_swiper", {
    slidesPerView:5,
    centeredSlides: true,
    spaceBetween: 0,
    loop:false,
    initialSlide:2,   //가운데(중앙) 슬라이드에서 시작
    navigation: {
        nextEl: "#gift_swiper .swiper-button-next",
        prevEl: "#gift_swiper .swiper-button-prev"
    },
});
// 슬라이드 클릭 시 해당 슬라이드로 이동
document.querySelectorAll('#gift_swiper .swiper-slide').forEach((slide, index) => {
    slide.addEventListener('click', () => {
        giftSwiper.slideTo(index);  // 해당 index로 이동
    });
});
