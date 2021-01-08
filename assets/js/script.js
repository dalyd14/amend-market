$('.menu-btn').click(function() {
    // change cart icon color
    if($('.cart-icon i').hasClass('white')) {
        $('.cart-icon i').removeClass('white').addClass('black')
    } else {
        $('.cart-icon i').removeClass('black').addClass('white')
    }
    // change title image color
    if($('.amend-logo h1').hasClass('white')) {
        $('.amend-logo h1').removeClass('white').addClass('black')
    } else {
        $('.amend-logo h1').removeClass('black').addClass('white')
    }
    // if($('.amend-logo img').attr('src').includes('unstacked-logo-white')) {
    //     var srcPath = $('.amend-logo img').attr('src').split('unstacked-logo-white')
    //     $('.amend-logo img').attr('src',srcPath.join('unstacked-logo-black'))
    // } else {
    //     var srcPath = $('.amend-logo img').attr('src').split('unstacked-logo-black')
    //     $('.amend-logo img').attr('src',srcPath.join('unstacked-logo-white'))
    // }
    // change the menu button colors
    if($('.menu-btn-bar').hasClass('border-black')) {
        $('.menu-btn-bar').removeClass('border-black')
    } else {
        $('.menu-btn-bar').addClass('border-black')
    }
    $('.top-bar').toggleClass('top-bar-clicked')
    $('.bottom-bar').toggleClass('bottom-bar-clicked')
    // make the mobile menu display
    $('.mobile-menu').toggleClass('mobile-menu-display')
})