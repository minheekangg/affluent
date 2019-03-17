document.addEventListener('DOMContentLoaded', ()=>{
    console.log('DOM Content Loaded')
    // const startHere = document.querySelector('#start-here')

    // When the user scrolls the page, execute myFunction 
    window.onscroll = function () { myFunction() };
    // Get the navbar
    var navbar1 = document.querySelector('#nav1');
    var navbar2 = document.querySelector('#nav2');
    // Get the offset position of the navbar
    var sticky = navbar1.offsetTop;
    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        if (window.pageYOffset >= sticky) {
            console.log(pageYOffset)
            navbar1.classList.add("sticky")
            navbar2.classList.add("sticky")
        } else {
            console.log(pageYOffset)
            navbar1.classList.remove("sticky");
            navbar2.classList.remove("sticky");
        }
    }

    // CHANGE INDEX.HTML NAVBAR
    var mainbottom =
      $("#aboutpage-1").offset().top + $("#aboutpage-1").height();
    var navbar1 = document.querySelector("#nav1");
    var navbar2 = document.querySelector("#nav2");
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



})