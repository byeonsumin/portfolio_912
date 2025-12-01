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
    loop: false,
    centeredSlidesBounds: true,
});
