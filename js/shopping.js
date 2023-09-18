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

// Insert the newly added product card at the front of the container
var container = document.querySelector(".container");
var newCard = document.querySelector(".card.jersey:last-child");
container.prepend(newCard);




// cart button setting
var count = 0;

function buyToCart() {
  var badge = document.querySelector('.badge');
  count++;

  badge.textContent = count;

  var modal = document.getElementById("successModal");
  modal.style.display = "block";

  setTimeout(function() {
    modal.style.display = "none";
  }, 1000);
}






        
//cart
function openNewPage(event) {
  event.preventDefault();
  var cartContainer = document.getElementById("cartContainer");
  cartContainer.classList.add("open");
}

function closeCart() {
  var cartContainer = document.getElementById("cartContainer");
  cartContainer.classList.remove("open");
}

function addToCart(product) {
  var itemName, itemPrice, itemImage;

  if (product === 'haalandJersey') {
    itemName = "Erling Haaland Jersey";
    itemPrice = 300;
    itemImage = "img/FDJ.png";
  } else if (product === 'fodenJersey') {
    itemName = "Phil Foden Jersey";
    itemPrice = 300;
    itemImage = "img/FDJ.png";
  } else if (product === 'fodenShort') {
    itemName = "Phil Foden Short";
    itemPrice = 199;
    itemImage = "img/PFS.png";
  }

  var cartContainer = document.getElementById("cartContainer");
  var card = document.createElement("div");
  card.classList.add("cartcard");

  var image = document.createElement("img");
  image.src = itemImage;

  var info = document.createElement("div");

  var name = document.createElement("h5");
  name.textContent = itemName;

  var price = document.createElement("span");
  price.classList.add("price");
  price.textContent = "$" + itemPrice.toFixed(2) + " HKD";

  var deleteButton = document.createElement("button");
  deleteButton.textContent = "Remove";
  deleteButton.classList.add("delete-button");
  deleteButton.addEventListener("click", function() {
    removeProduct(card);
  });

  info.appendChild(name);
  info.appendChild(price);

  var contentWrapper = document.createElement("div");
  contentWrapper.appendChild(image);
  contentWrapper.appendChild(info);

  card.appendChild(contentWrapper);
  card.appendChild(deleteButton);

  cartContainer.appendChild(card);

  calculateTotalPrice();
}

function removeProduct(card) {
  var cartContainer = document.getElementById("cartContainer");
  cartContainer.removeChild(card);
  card.remove();

  if (count > 0) {
    count--;
  }

  calculateTotalPrice();
}

function calculateTotalPrice() {
  var cartContainer = document.getElementById("cartContainer");
  var cards = cartContainer.getElementsByClassName("cartcard");
  var total = 0;

  if (cards.length > 0) {
    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      var priceElement = card.getElementsByClassName("price")[0];
      var priceText = priceElement.textContent;
      var price = parseFloat(priceText.replace("$", ""));
      total += price;
    }
  }

  var totalElement = document.getElementById("totalPrice");
  totalElement.textContent = "Total: $" + total.toFixed(2) + " HKD";
}