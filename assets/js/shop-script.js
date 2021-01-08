$('.menu-btn').click(function() {
    $('.top-bar').toggleClass('top-bar-clicked')
    $('.bottom-bar').toggleClass('bottom-bar-clicked')
    // make the mobile menu display
    $('.mobile-menu').toggleClass('mobile-menu-display')
})

const shopList = $('.shop-items')

shopItems.forEach(item => {
    var itemHTML = `
        <div class="shop-item">
            <img src="${item.image}">
            <div class="item-text">
                <h3>${item.name}</h3>
                <p>$${item.cost}</p>
            </div>
        </div>
    `
    shopList.append(itemHTML)
})