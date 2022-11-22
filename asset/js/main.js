
// $(document).ready(function(){
//     $(".slide-toggle").click(function(){
//         $(".box").animate({
//             width: "toggle"
//         });
//     });
// });

// menu js
function toggleNav() {
    document.querySelector('.navbar').classList.toggle('navbar--open')
}

// button up(arraw)
$(".btn-up").click(function () {
    $(window).scrollTop(0);
});

// active nav link item
$('.navbar .nav-link').click(function () {
    $('.navbar-nav .nav-link').css('color', `white`);
    $(this).css('color', `var(--mainColor)`);
});
$('.navbar-nav .nav-link').css('color', `white`);


// active nav link item portfolio
$('.nav_tabs .tab').click(function () {
    $('.nav_tabs .tab').css('background-color', `transperent`);
    $(this).css('background-color', `var(--mainColor)`);
});

    // language skills
   
    let number = document.getElementById("number");
    let counter = 0;
    setInterval(() => {
      if (counter == 60) {
        clearInner();
      } else {
        counter += 1;
        number.innerHTML = counter + "%";
      }
    }, 20);
