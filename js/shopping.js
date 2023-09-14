function showProducts(product) {
    var cards = document.getElementsByClassName("card");
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.display = "none";
    }
    var productCards = document.getElementsByClassName(product);
    for (var j = 0; j < productCards.length; j++) {
       productCards[j].style.display = "block";
    }
}

function showAllProducts() {
    var cards = document.getElementsByClassName("card");
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.display = "block";
    }
}

// 在容器最前面插入新添加的产品卡片
var container = document.querySelector(".container");
var newCard = document.querySelector(".card.jersey:last-child");
container.prepend(newCard);