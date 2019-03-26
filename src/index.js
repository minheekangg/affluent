document.addEventListener('DOMContentLoaded', ()=>{
    console.log('DOM Content Loaded')
    // const startHere = document.querySelector('#start-here')

    const navbar1 = document.querySelector("#nav1");
    const navbar2 = document.querySelector("#nav2");
    const navbars = document.querySelector("nav");
    const steps = document.querySelectorAll('.icon');
    console.log(steps)

    window.onscroll = function () { 
        if (navbar1) {
            renderIndexHTMLNav()
        } else {
            renderSecondStickyNavBar(navbar2);
        }
    };

    function renderBothStickyNavBar(navbar2, navbar1){
        if (window.pageYOffset >= navbars.offsetTop) {
              navbar2.classList.add("sticky");
              navbar1.classList.add("sticky");
            } else {
              navbar2.classList.remove("sticky");
              navbar1.classList.remove("sticky");
            }
    }
    function renderSecondStickyNavBar(navbar2){
        if (window.pageYOffset >= navbars.offsetTop) {
              navbar2.classList.add("sticky");
            } else {
              navbar2.classList.remove("sticky");
            }
    }

    function renderIndexHTMLNav() {
        
        navbar1 ? renderBothStickyNavBar(navbar2, navbar1) : renderSecondStickyNavBar(navbar2)

        var mainbottom =
          $("#aboutpage-1").offset().top + $("#aboutpage-1").height();
        // on scroll, 
        $(window).on('scroll', function () {
    
            // we round here to reduce a little workload
            var stop = Math.round($(window).scrollTop());
    
            if (stop > mainbottom) {
                navbar1.classList.add("hidden");
                navbar2.classList.remove("hidden");
            } else {
                navbar2.classList.add("hidden");
                navbar1.classList.remove("hidden");
            }
    
        });
    }



})