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

  if (product === 'HaalandJersey') {
    itemName = "Haaland Jersey";
    itemPrice = 300;
    itemImage = "img/HaalandTJ.png";
  }
  if (product === 'Haalandshort') {
    itemName = "Haaland Short";
    itemPrice = 199;
    itemImage = "img/HaalandTS.png";
  }
  if (product === 'Edersonjersey') {
    itemName = "Ederson Jersey";
    itemPrice = 300;
    itemImage = "img/EDSJ.png";
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

  // save amount in sessionStorage
  sessionStorage.setItem("totalAmount", total.toFixed(2));
  
  var totalElement = document.getElementById("totalPrice");
  totalElement.textContent = "Total: $" + total.toFixed(2) + " HKD";
}



// payment button
function createPaymentButton() {
  var cartContainer = document.getElementById("cartContainer");

  var paymentButton = document.createElement("button");
  paymentButton.textContent = "Pay Now";
  paymentButton.classList.add("payment-button-cn");
  paymentButton.addEventListener("click", function() {
    var cards = document.getElementsByClassName("cartcard");
    if (cards.length > 0) {
      showPurchaseProcessingMessage();
      setTimeout(function() {
        window.location.href = "com3105_approval.html";
      }, 2000);
      
    } else {
      showEmptyCartMessage();
    }
  });

  var paymentContainer = document.createElement("div");
  paymentContainer.classList.add("payment-container");
  paymentContainer.appendChild(paymentButton);

  cartContainer.appendChild(paymentContainer);
}

// buy fail
function showEmptyCartMessage() {
  var emptyCartMessage = document.getElementById("emptyCartMessage");
  emptyCartMessage.style.display = "block";

  setTimeout(function() {
    emptyCartMessage.style.display = "none";
  }, 1000);
}

// buy success
function showPurchaseProcessingMessage() {
  var purchaseProcessingMessage = document.getElementById("purchaseProcessingMessage");
  purchaseProcessingMessage.style.display = "block";
}

createPaymentButton();



