$(document).ready(function(){
    // 메인 슬라이더
    $('#slider').slick({
        slide: 'div',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows : true,
        dots : true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow :"<button type='button' class='slick-prev'>Prev</button>",
        nextArrow :"<button type='button' class='slick-next'>Next</button>"
    });

    // delivery-togo
    $('.dt-change-box').slick({
        slide: 'div',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows : true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow : "<button type='button' class='slick-prev dt_arrow_p'>Prev</button>",
        nextArrow : "<button type='button' class='slick-next dt_arrow_n'>Next</button>"
    });
});


window.onload = function() {
    let contents = document.querySelectorAll(".homes-box");
    let homeMenu = document.querySelectorAll(".home-menu li");
    let con = '';

    for(var i = 0; i < contents.length; i++) {
        
        homeMenu[i].querySelector('.tab').addEventListener('mouseover', function(e){
            e.preventDefault();
            this.querySelector('.hm-img').style.filter = 'none';
            this.querySelector('.hm-img').style.transform = 'scale(1.05)';
            this.querySelector('.hm-img').style.transition = 'ease 0.2s';
            
            for(var j = 0; j < homeMenu.length; j++) {
                contents[j].style.display = 'none';
            }
            
            con = this.getAttribute('href');
            console.log(con);
            document.querySelector(con).style.display = 'block';
        });

        homeMenu[i].querySelector('.tab').addEventListener('mouseout', function(e){
            this.querySelector('.hm-img').style.filter = 'grayscale(100%) brightness(50%)';
            this.querySelector('.hm-img').style.transform = 'scale(1)';
        });
    }
}